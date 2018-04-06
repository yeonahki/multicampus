var i2c = require('i2c');
var address = 0x23;
var wire = new i2c(address, {device:'/dev/i2c-1'});
var command = 0x10;
var length = 2;

var getBH1750 = function(cb){
	wire.readBytes(command, length, function(err, res){
		var hi = res.readUInt8(0);
		var lo = res.readUInt8(1);
		cb((hi << 8)+lo);
	});
};

setInterval(function(){
	getBH1750(function(lux){
		console.log('lux : ', lux);
	});
}, 3000);
