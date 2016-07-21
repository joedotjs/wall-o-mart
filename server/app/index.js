var express = require('express');
var app = express();
var path = require('path');
module.exports = app;

app.use(
    express.static(path.join(__dirname, '../../images')),
    express.static(path.join(__dirname, '../../node_modules')),
    express.static(path.join(__dirname, '../../public'))
);

app.use('/api', require('./api'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});