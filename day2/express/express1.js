var express = require('express');

var app = express();
var port = 8080;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/express1.html');
});

app.listen(port, function(){
	console.log('Server is running at port ', port);
	
});
