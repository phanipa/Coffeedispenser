var http = require('http');
var url = require('url');
var exec1 = require('child_process').exec;
var exec2 = require('child_process').exec;
var cmd1 = '/home/pi/right.sh';
var cmd2 = '/home/pi/left.sh';
var flag = 1;

http.createServer(function (request,response) {
     response.writeHead(200,{'Content-Type': 'text/plain'});
     exec1 (cmd1,function(error,stderr,stdout){console.log(stderr);});
     response.end('Hello World\n');
     var querystring = url.parse(request.url,true).query;
     console.log(querystring);
}).listen(8081);

console.log('server running on at 127.0.0.1:8081');

