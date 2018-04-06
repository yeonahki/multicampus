var Oled = require('oled-spi');
var pngparse = require('pngparse');

var opts = {
	width:128,
	height:64,
	dcPin:23,
	rstPin:24
};

var oled = new Oled(opts);

oled.begin(function(){
	pngparse.parseFile('clear.png', function(err, image){
		oled.drawBitmap(image.data);
	});
});
