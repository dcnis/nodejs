import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import rootDir from '../util/path.js';

const logfileStream = fs.createWriteStream(
    path.join(rootDir, '..', 'logs', 'access.log'),
    {flags: 'a'}
)

const init = morgan('combined', {stream: logfileStream});

export default init;