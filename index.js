'use strict';

require('babel/register')({});

var server = require('./server');
var PORT = process.env.PORT || 80;

server.listen(PORT, function() {
    console.log('Server on port ', PORT);
});
