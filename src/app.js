import connectRedis from 'connect-redis';
import session from 'express-session';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import helmet from 'helmet';
import compression from 'compression';

import redis from 'redis';
import { REDIS_PASSWORD } from './config/env.js';
import rootDir from './util/path.js';
import routes from './api/routes.js';
import csrfMiddleware from './middleware/csrfMiddleware.js';

/* Create Express server */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

/* Set template engine */
app.set('view engine', 'ejs');
app.set('views', rootDir + '/views');


/* enable CSRF Protection */
const csrfProtection = csrf();

/* Set up Redis and Session Store */
(async () => {
    const uri = `redis://default:${REDIS_PASSWORD}@redis:6379`;
    const redisClient = redis.createClient({
        url: uri
      });
    console.log('Connected to REDIS successfully');

     const RedisStore = connectRedis(session);

     app.use(
         session({
             secret: 'keyboard cat',
             saveUninitialized: false,
             resave: false,
             store: new RedisStore({ client: redisClient }),
            cookie: {
                    secure: false, // if true only transmit cookie over https
                    httpOnly: false, // if true prevent client side JS from reading the cookie 
                    maxAge: 1000 * 60 * 10 // session max age in miliseconds
                }
     })
 );

})();

app.use(csrfProtection);
app.use(csrfMiddleware);
app.use(helmet());
app.use(compression());

/* routes */
app.use(routes);


export default app;