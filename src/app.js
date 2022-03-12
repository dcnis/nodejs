import redis from 'redis';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { REDIS_PASSWORD } from './config/env.js';
import rootDir from './util/path.js';
import homeRouter from './api/routes/homeRoute.js';
import errorRouter from './api/routes/errorRoute.js';
import routes from './api/routes.js';


/* Set up redis */
(async () => {

    const uri = `redis://default:${REDIS_PASSWORD}@redis:6379`;
    const redisClient = redis.createClient({
        url: uri
      });
  
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
  
    await redisClient.connect();
    console.log('connected to REDIS successfully');
})();
  

/* Create Express server */
const app = express();

/* Set up Cookies */
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join('rootDir', 'public')));

/* Set template engine */
app.set('view engine', 'ejs');
console.log(rootDir);
app.set('views', rootDir + '/views');

/* routes */
app.use(homeRouter);
app.use(routes);
app.use(errorRouter);


export default app;