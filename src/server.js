import https from 'https';
import fs from 'fs';
import path from 'path';
import rootDir from './util/path.js';

import app from './app.js';
import { PORT } from './config/env.js';
import log from './config/winston.js';


const privateKey = fs.readFileSync(path.join(rootDir, '..', 'cert', 'server.key'));
const certificate = fs.readFileSync(path.join(rootDir, '..', 'cert', 'server.cert'));

https.createServer(
    {   key: privateKey,
        cert: certificate
    }, app)
    .listen(PORT, () => {
        log.info('server started on https://localhost:' + PORT);
});
