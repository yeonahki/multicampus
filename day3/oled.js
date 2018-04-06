var five = require('johnny-five'),
		board = new five.Board(),
		Oled = require('oled-js');
var font = require('oled-font-5x7');

		board.on('ready', function(){
			console.log('connected board');

		var opts={
			width:128,
			height:64,
				slavePin:12
		};

		var oled = new Oled(board, five, opts);

		oled.clearDisplay();

		oled.setCursor(1,1);
		oled.writeString(font, 1, 'hello', 1, true);
		});
