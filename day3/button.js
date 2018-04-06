var wpi = require('wiringpi-node');

wpi.setup('wpi');

var button = 24;
wpi.pinMode(button, wpi.INPUT);

setInterval(function(){
	if(wpi.digitalRead(button) === wpi.HIGH){
		console.log('button is pushed');
	}
}, 1000);
