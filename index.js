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
var PORT = process.env.NODE_ENV === 'production' ? 80 : 3000;

app.listen(PORT, function() {
    console.log('Server on port ' + PORT);
})

// if (process.env.NODE_ENV === 'production') {
//     http.createServer(function(req, res) {
//         res.writeHead(301, { Location: 'https://' + req.headers['host'] + req.url });
//         res.end();
//     }).listen(PORT, function() {
//         console.log('HTTP on port ', PORT);
//     });
//     https.createServer(options, app).listen(443, function() {
//         console.log('HTTPS on port ', 443);
//     });
// } else {
//     app.listen(PORT, function() {
//         console.log('Development server running');
//     });
// }
