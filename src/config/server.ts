import http from 'http';
import fs from 'fs';
import path from 'path';
import rootDir from '../util/path.js';
import express, { Application } from 'express';

import log from './winston.js';
import bodyParser from 'body-parser';
import routes from '../api/routes.js';
import helmet from 'helmet';
import compression from 'compression';

import { Express } from 'express-serve-static-core';

const privateKey = fs.readFileSync(
  path.join(rootDir, '..', 'cert', 'server.key')
);
const certificate = fs.readFileSync(
  path.join(rootDir, '..', 'cert', 'server.cert')
);

export default async function createServer(): Promise<Express> {
  return new Promise((resolve, reject) => {
    /* Create Express server */

    try {
      const server: Express = express();

      server.use(helmet());
      server.use(bodyParser.json());
      server.use(bodyParser.urlencoded({ extended: false }));
      server.use(express.static(path.join(rootDir, 'public')));

      /* Set template engine */
      server.set('view engine', 'ejs');
      server.set('views', rootDir + '/views');

      server.use(compression());
      // app.use(morganLogging());

      /* routes */
      server.use(routes);

      return resolve(server);
    } catch (error) {
      reject(error);
    }
  });
}
