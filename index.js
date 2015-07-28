#!/usr/bin/env node

var http = require('http');
var os = require("os");

var hostname = os.hostname();
var port = process.argv[2] || process.env.PORT || 1337;
var msg = '<h1>http://' + hostname + ':' + port + ' says hello!</h1>';

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(msg);
}).listen(port);

console.log(msg);