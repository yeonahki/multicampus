/*
var intervalGT = setInterval(function(){
	console.log('hello world');
}, 3000);

clearInterval(intervalGT);
*/

var i = 0;
var intervalGT = setInterval(function(){
	console.log('hello world');

	i++;
	if(i == 10){
		clearInterval(intervalGT);
	}
}, 3000);

