import path from 'path';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

import rootDir from './util/path.js';
import routes from './api/routes.js';
import morganLogging from './config/morgan';
import redisClient from './services/redis.service.js';
import log from './config/winston.js';

/* Create Express server */
const app: Application = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

/* Set template engine */
app.set('view engine', 'ejs');
app.set('views', rootDir + '/views');

app.use(compression());
// app.use(morganLogging());

/* routes */
app.use(routes);

redisClient.init().then(() => {
  log.info('Redis is initializieadfasdf');
});

export default app;
