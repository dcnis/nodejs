

import env from './config/env.js';
import morganLogging from './config/morgan';
import redisClient from './services/redis.service.js';
import db from './config/database.js';
import log from './config/winston.js';
import createServer from './config/server.js';


redisClient.init()
  .then(() => db.init())
  .then(() => createServer())
  .then((server) => {
    server.listen(env.PORT, (): void => {
        log.info('server started on https://localhost:' + env.PORT);
    });
  })
  .catch((error) => {
    log.error(error);
  });