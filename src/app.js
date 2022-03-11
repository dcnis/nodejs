const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const rootDir = require('./util/path');
const homeRouter = require('./api/routes/homeRoute');
const errorRouter = require('./api/routes/errorRoute');
const routes = require('./api/routes');

/* Create Express server */
const app = express();

/* Set up Cookies */
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

/* Set template engine */
app.set('view engine', 'ejs');
app.set('views', rootDir + '/views');

/* routes */
app.use(homeRouter);
app.use(routes);
app.use(errorRouter);

module.exports = app;
