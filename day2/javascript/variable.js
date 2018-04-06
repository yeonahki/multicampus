var intNum = 10;
var floatNum = 10.1;
var singleString = 'single quotation mark string';
var doubleString = "double quotation mark string";
var singleChar = 's';
var boolVar = true;
var undef;
var nullVar = null;

var arr = [1,2,3,4,5];
var obj = {name:'yeonahki', age:20};

var f = function(){
	console.log('hello world');
};

//type
console.log('typeof');
console.log(typeof(intNUm), typeof(floatNum), typeof(singleString), typeof(doubleString), typeof(singleChar), typeof(boolVar), typeof(undef), typeof(nullVar), typeof(arr), typeof(obj), typeof(f));

var a = null;
console.log(typeof(a));
console.log('== : ', a==null);
console.log('=== : ', a===null);
var b;
console.log(typeof(b));
console.log('== : ', b==null);
console.log('=== : ', b===null);
