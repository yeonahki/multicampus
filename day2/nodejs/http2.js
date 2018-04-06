var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){
	if(req.url === '/'){
		res.setHeader('Content-Type','text/plain');
		res.end('hello world\n');
	}
	if(req.url === '/hello'){
		res.setHeader('Content-Type','text/plain');
		res.end('hello\n');
	}
	if(req.url === '/wrong'){
		res.setHeader('Content-Type','text/plain');
		res.end('wrong path\n');
	}
});

server.listen(port, function(){
	console.log('Server is running at http://' + hostname + ':' + port);
});
