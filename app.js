const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');
const homeRouter = require('./routes/home');
const errorRouter = require('./routes/error');

// Create Express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

// Set template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(homeRouter);
app.use(errorRouter);

app.listen(3000);
