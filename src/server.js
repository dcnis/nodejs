const http = require('http');
const app = require('./app');
const { PORT } = require('./config/env');

const server = http.createServer(app)

server.listen(PORT, () => console.log('server started listening on port:' + PORT));
