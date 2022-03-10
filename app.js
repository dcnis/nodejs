const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');
const homeRouter = require('./routes/home');
const userprofileRoutes = require('./routes/userprofile');
const shopRoutes = require('./routes/home');

// Create Express server
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

// Set template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(userprofileRoutes);
app.use(homeRouter);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
