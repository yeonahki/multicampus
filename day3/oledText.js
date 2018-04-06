var Oled = require('oled-spi');
var font = require('oled-font-5x7');

var opts = {
	width:128,
	height:64,
	dcPin:23,
	rstPin:24
}

var oled = new Oled(opts);
oled.begin(function(){
	console.log('begin');
	oled.clearDisplay();
	oled.setCursor(10,10);
	oled.writeString(font, 2, "hello", 1, true);
});
