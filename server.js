const express = require('express');

const app = express();

app.use('/users', (req, res) => {
    res.send('Users!');
});

app.use('/', (req, res) => {
    res.send('Slash');
});


app.listen(3000);