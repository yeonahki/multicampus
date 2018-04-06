var wpi  = require('wiringpi-node');
var sleep = require('sleep');
var microtime = require('microtime');

wpi.setup('wpi');

var TRIG = 27;
var ECHO = 28;

wpi.pinMode(TRIG, wpi.OUTPUT);
wpi.pinMode(ECHO, wpi.INPUT);


function pulseIn(pin){
	var MAX_LOOPS = 1000000;
	var numloops = 0;

	while(wpi.digitalRead(ECHO) == wpi.LOW){
		if(numloops++ ==  MAX_LOOPS)
			return 0;
	}

	var startTime = microtime.now();

	while(wpi.digitalRead(ECHO) == wpi.HIGH){
		if(numloops++ ==  MAX_LOOPS)
			return 0;
	}

	var endTime = microtime.now();

	return endTime-startTime;
}

setInterval(function(){
	wpi.digitalWrite(TRIG, wpi.LOW);
	sleep.usleep(2);
	wpi.digitalWrite(TRIG, wpi.HIGH);
	sleep.usleep(20);
	wpi.digitalWrite(TRIG, wpi.LOW);

	var distance = pulseIn(ECHO);
	console.log('distance : ', Math.floor(distance/58));
}, 1000);
