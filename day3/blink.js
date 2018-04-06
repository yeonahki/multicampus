var wpi = require('wiringpi-node');
var pin = 25;

wpi.setup('wpi');

//sudo gpio mode 25 out
wpi.pinMode(pin, wpi.OUTPUT);

//sudo gpio write 25 1 -> 0 -> 1-> 0 ...
var isOn = 0;
setInterval(function(){
	if(isOn){
		wpi.digitalWrite(pin, wpi.HIGH);
		isOn = 0;
	}
	else{
		wpi.digitalWrite(pin, wpi.LOW);
		isOn = 1;
	}
}, 1000);
