var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0',{
	baudRate:9600
});

port.on('open', function(){
	console.log('port is opened');
});

port.on('data', function(data){
	console.log('1 Data : ', data.toString());
});

