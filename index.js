#!/usr/bin/env node

var http = require('http');
var os = require("os");
var fs = require('fs');
var url = require('url');

var hostname = os.hostname();
var port = process.argv[2] || process.env.PORT || 1337;
var thing = process.argv[3] || process.env.THING || 'thing1';

// if we got a thing but no port.
if (!parseInt(port, 10)) {
  thing = port;
  port = 1337;
}

var msg = '<h3>' + thing + ' says, "hello", from ' + hostname + ':' +
  port + '</h3><div><img width="300" src="' + thing + '.png"></img></div>';

http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;
  if (action === '/thing1.png' || action === '/thing2.png') {
     var img = fs.readFileSync('./'+thing+'.png');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');
  } else {
     res.writeHead(200, {'Content-Type': 'text/html' });
     res.end(msg);
  }
}).listen(port);

console.log(msg);