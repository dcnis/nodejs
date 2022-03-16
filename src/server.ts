import http from 'http';
import fs from 'fs';
import path from 'path';
import rootDir from './util/path.js';

import app from './app.js';
import env from './config/env.js';
import log from './config/winston.js';

const privateKey = fs.readFileSync(
  path.join(rootDir, '..', 'cert', 'server.key')
);
const certificate = fs.readFileSync(
  path.join(rootDir, '..', 'cert', 'server.cert')
);

const server = http.createServer(app);

server.listen(env.PORT, (): void => {
  log.info('server started on https://localhost:' + env.PORT);
});
