const express = require('express');
const bodyParser = require('body-parser');
require('./db/config');

const cardRoutes = require('./routes/card');
const timeRoutes = require('./routes/time');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/stuff', cardRoutes);
app.use('/api/auth', timeRoutes);

module.exports = app;