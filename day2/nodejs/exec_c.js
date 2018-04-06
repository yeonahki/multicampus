var exec = require('child_process').exec;

var num = 123;
var cmd = './test '+num;
exec(cmd, function(err, stdout, stderr){
	console.log(stdout);
});
