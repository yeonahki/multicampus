var exec = require('child_process').exec;

/*
exec('touch new_file');

exec('date', function(err, stdout, stderr){
	console.log('date command');
	console.log('err: ', err, '\n stdout: ', stdout, '\n stderr: ', stderr);
});

exec('node fs.js', function(err, stdout, stderr){
	console.log('node fs.js');
	console.log(stdout);
});
*/

/*
exec('ping 127.0.0.1 -c 5', function(err, stdout, stderr){
	console.log('err:', err);
	console.log('stdout:', stdout);
	console.log('stderr:', stderr);
});
*/

exec('mplayer test.mp3', function(err, stdout, stderr){
	console.log('err:', err);
	console.log('stdout:', stdout);
	console.log('stderr:', stderr);
});
