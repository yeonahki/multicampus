var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0',{
	baudRate:9600
});

setInterval(function(){
port.write('hello world', function(err){
	if(err)
		return console.log('Error on write : ', err.message);

	console.log('message written');
});
}, 1000);
