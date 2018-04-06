var rsj = require('rsj');

rsj.r2j('http://www.weather.go.kr/wid/queryDFSRSS.jsp?zone=1114060500', function(json){
	var data = JSON.parse(json);
/*
	console.log(data[0]['rss:description'].body.data[0].temp['#']);
	console.log(data[0]['rss:description'].body.data[0].wfen['#']);
	*/

	console.log(data);
});
