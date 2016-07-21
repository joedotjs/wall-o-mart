var http = require('http');
var server = http.createServer();
var database = require('../db');
var app = require('./app');

server.on('request', app);

database.db.sync()
    .then(function () {
        console.log('Database models synced up!');
        server.listen(1337, function () {
            console.log('Server is listening!');
        });
    })
    .catch(console.error);

