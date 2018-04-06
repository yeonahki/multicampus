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

});
	var i = 0;
	setInterval(function(){
	console.log('setInterval');
	//	socket.emit('msg', i);
		io.emit('msg', i);
		i++
	}, 3000);
