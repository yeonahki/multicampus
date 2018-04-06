/*
var http = require('http');
var port = 3000;

var server = http.createServer();
server.listen(port);
*/

var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('hello world\n');
});

server.listen(port, function(){
	console.log('Server is running at http://' + hostname + ':' + port);
});
