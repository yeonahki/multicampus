var module = require('./greeting');

module();


var calc = require('./calculation');
console.log(calc.sum(2,4));
console.log(calc.sub(10,5));
console.log(calc.avg(10,20));

