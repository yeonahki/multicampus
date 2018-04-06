var spawn = require('child_process').spawn;
//var sp = spawn('touch', ['new_file2']);
//var sp = spawn('date');
//var sp = spawn('ping', ['127.0.0.1', '-c', '5']);
var sp = spawn('mplayer', ['test.mp3']);

sp.stdout.on('data', function(data){
	console.log('stdout:', data.toString());
});

sp.stderr.on('data', function(data){
	console.log('stderr:', data.toString());
});

sp.on('exit', function(data){
	console.log('exit');
});
