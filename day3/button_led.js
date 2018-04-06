var wpi = require('wiringpi-node');

wpi.setup('wpi');

var pin = 25;
var button = 24;
wpi.pinMode(button, wpi.INPUT);
wpi.pinMode(pin, wpi.OUTPUT);
setInterval(function(){
	if(wpi.digitalRead(button) === wpi.HIGH){
		console.log('button is pushed');
		wpi.digitalWrite(pin, wpi.HIGH);
	}else{
		wpi.digitalWrite(pin, wpi.LOW);
	}
}, 1000);
