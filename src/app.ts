import path from 'path';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

import rootDir from './util/path.js';
import routes from './api/routes.js';
import morganLogging from './config/morgan';
import RedisCache from './services/redis.service.js';

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

RedisCache.init();

/* routes */
app.use(routes);

export default app;
