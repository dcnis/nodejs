import http from 'http';
import app from './app.js';
import { PORT } from './config/env.js';
import log from './config/winston.js';

const server = http.createServer(app)

server.listen(PORT, () => log.info('server started listening on port:' + PORT));
