import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import { REDIS_PASSWORD } from './config/env.js';
import rootDir from './util/path.js';
import homeRouter from './api/routes/homeRoute.js';
import errorRouter from './api/routes/errorRoute.js';
import routes from './api/routes.js';

/* Create Express server */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join('rootDir', 'public')));

/* Set template engine */
app.set('view engine', 'ejs');
console.log(rootDir);
app.set('views', rootDir + '/views');

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


/* routes */
app.use(homeRouter);
app.use(routes);
app.use(errorRouter);


export default app;