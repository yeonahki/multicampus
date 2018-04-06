var wpi = require('wiringpi-node');

wpi.setup('wpi');
var pin = 1;

var num = 0;
var isRight = true;

wpi.softPwmCreate(pin, 0, 100);
setInterval(function(){
   wpi.softPwmWrite(pin, num);

   if(isRight){
      num += 1;
   }
   else{
      num -= 1;
   }

   if(num == 100){
      isRight = false;
   }
   if(num == 0){
      isRight = true;
   }
console.log(num);
}, 100);
