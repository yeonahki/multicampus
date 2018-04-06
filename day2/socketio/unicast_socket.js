var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(3000, function(){
	console.log('server is running');
});

app.get('/', function(req, res){
	res.sendFile(__dirname+'/socket.html');
});

io.on('connection', function(socket){
	console.log('connection');
		socket.broadcast.emit('msg', 'hello world');

});
