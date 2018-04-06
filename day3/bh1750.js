var BH1750 = require('bh1750');
var light = new BH1750({
	address:0x23,
	device:'/dev/i2c-1',
	command:0x10,
	light:2
});

setInterval(function(){
	light.readLight(function(value){
		console.log('lux : ', value);
	});
}, 3000);
