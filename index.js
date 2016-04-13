'use strict';

require('babel/register')({});

var fs = require('fs');
var http = require('http');
var https = require('https');

var options = {
    key: fs.readFileSync('./app/server/ssl/course.bestactprep.co_private_key.pem'),
    cert: fs.readFileSync('./app/server/ssl/course.bestactprep.co_ssl_certificate.pem')
};

var app = require('./server');
var PORT = process.env.PORT || 80;

http.createServer(app).listen(PORT, function() {
    console.log('HTTP on port ', PORT);
});
https.createServer(options, app).listen(443, function() {
    console.log('HTTPS on port ', 443);
});
