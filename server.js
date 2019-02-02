'use strict';

const api = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || process.env.PORT || api.port

var userRoute = require('./routes/user-route');

var app = express();

app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', userRoute);

let server = module.exports = app;

server.listen(port, function() {
    console.log('Server listening at http://localhost:' + port);
});