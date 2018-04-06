- 문자열
===============================================
var num1 = 1;
var num2 = 2;
var str = 'ABC';

console.log(str + num1 + num2);
console.log(num1 + str + num2);
console.log(num1 + num2 + str);

// 문자와 숫자가 더해지면 문자로 변환됨.
// ABC12
// 1ABC2
// 3ABC --> 숫자 먼저 더하면 숫자계산

===============================================

var str = 'AAA,BBB,CCC,DDD,EEE';
var array = str.split(',');

console.log(array);

for(var index in array)
  console.log(index + ': ' + array[index]);

/*
split(기준 문자) --> 해당 문자열을 배열로 변환
[ 'AAA', 'BBB', 'CCC', 'DDD', 'EEE' ]
0: AAA
1: BBB
2: CCC
3: DDD
4: EEE
*/
================================================

var str = 'ABCDEFG';

console.log(str);
console.log('replace: ' + str.replace('ABC', 'New_Word'));
console.log('length: ' + str.length);
console.log('slice(2-5): ' + str.slice(2,5));
console.log('indexOf(true): ' + str.indexOf('CDE'));
console.log('indexOf(false): ' + str.indexOf('GGG'));

var lower = str.toLowerCase();
console.log('Lower: ' + lower);
console.log('Upper: ' + lower.toUpperCase());
console.log('concat: ' + str.concat(lower));
console.log('plus: ' + str + lower);

/*
ABCDEFG // 문자열
replace: New_WordDEFG // ABC를 New_Word로 변경
length: 7 // 문자 길이
slice(2-5): CDE // 2번째 부터 5번째까지 문자 추출, 시작은 0
indexOf(true): 2 // CDE 문자열이 있으면 시작 위치
indexOf(false): -1 // 없으면 -1 반환
Lower: abcdefg  // 소문자
Upper: ABCDEFG  // 대문자
concat: ABCDEFGabcdefg // 문자열 합
plus: ABCDEFGabcdefg // 문자열 합
*/
~

================================================`

- 숫자
================================================
var a = 5;
var b = 2;

console.log(a / b);
console.log((a / b).toFixed(2));

console.log('round');
console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.round(1.6));

console.log('ceil');
console.log(Math.ceil(1.4));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.6));

console.log('floor');
console.log(Math.floor(1.4));
console.log(Math.floor(1.5));
console.log(Math.floor(1.6));

/*
2.5
2.50 // 소수점 2번째 자리까지 (반올림)
round // 반올림
1
2
2
ceil // 올림
2
2
2
floor // 버림
1
1
1
*/
================================================

- 엄격한 비교
================================================
var a = 10;
var b = '10';
var c = 10;

console.log(a == b);
console.log(a === b);
console.log(a === c);

/*
true // == 타입은 고려X (값만)
false // === 엄격하게 비교 (값과 타입 모두)
true
*/
================================================

- 파일 실행
================================================

var exec = require('child_process').exec;
exec('touch test_file');

// 명령어를 자바스크립트 소스 상에서 실행1
// touch 빈파일 만들기, ls로 확인해보면 나옴
================================================

var exec = require('child_process').exec;

exec('date', function(err, stdout, stderr){
  console.log(stdout);

  exec('echo ' + stdout.split("\n")[0] + ' > test_file');
});

// 명령어를 자바스크립트 소스 상에서 실행2
// 명령어를 실행했을때 출력되는 값도 얻을 수 있음.
// 아래 echo 명령어를 통해 출력된 결과를 다른 파일에 넣을 수 있음
================================================