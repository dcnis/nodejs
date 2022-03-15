import path from 'path';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import helmet from 'helmet';
import compression from 'compression';
import { createClient } from 'redis';

import rootDir from './util/path.js';
import routes from './api/routes.js';
import csrfMiddleware from './middleware/csrfMiddleware.js';
import morganLogging from './config/morgan';
import env from './config/env.js';
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

/* enable CSRF Protection */
const csrfProtection = csrf();

app.use(csrfProtection);
app.use(csrfMiddleware);
app.use(compression());
// app.use(morganLogging());

(async () => {
  const uri = `redis://default:${env.REDIS_PASSWORD}@redis:6379`;
  const client = createClient({
    url: uri,
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');
  log.info(value);
})();

/* routes */
app.use(routes);

export default app;
