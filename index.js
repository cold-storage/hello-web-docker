#!/usr/bin/env node

var http = require('http');
var os = require("os");
var port = process.env.PORT || 1337;
var msg = ' hostname:port ' + os.hostname() + ':' + port;

console.log(port, msg);

http.createServer(function(req, res) {
  res.end(msg);
}).listen(port);