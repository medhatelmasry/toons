'use strict';

const api = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.WEBSITES_PORT 
    || process.env.port 
    || process.env.PORT;

var appRoute = require('./routes/app-routes');

var app = express();

app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', appRoute);

let server = module.exports = app;

server.listen(port, function() {
    console.log('Server listening at http://localhost:' + port);
});