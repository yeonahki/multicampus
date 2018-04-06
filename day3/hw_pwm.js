var wpi = require('wiringpi-node');

wpi.setup('wpi');
var pin = 1;

var num = 0;
var isRight = true;

wpi.pinMode(pin, wpi.PWM_OUTPUT);
wpi.pwmSetMode(wpi.PWM_MODE_MS);
wpi.pwmSetClock(2000);
wpi.pwmSetRange(192);

setInterval(function(){
   wpi.pwmWrite(pin, num);

   if(isRight){
      num += 1;
   }
   else{
      num -= 1;
   }

   if(num == 200){
      isRight = false;
   }
   if(num == 0){
      isRight = true;
   }
console.log(num);
}, 100);
