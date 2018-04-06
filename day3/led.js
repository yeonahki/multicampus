var wpi = require('wiringpi-node');
var pin = 25;

wpi.setup('wpi');

//sudo gpio mode 25 out
wpi.pinMode(pin, wpi.OUTPUT);

//sudo gpio write 25 1 or 0
wpi.digitalWrite(pin, wpi.LOW);
