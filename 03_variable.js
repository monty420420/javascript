//1. Use strict
//added in ES5 
'use strict';  /*usestrict 선언하면 정의된 변수만 이용가능*/

//2. Variable, 메모리에 읽고 쓰기 가능
//다른 문자열 넣어도 오류가 발생하지않는 매우 쿨한언어!!
//변수 선언 방식에 var, let, const가 있는데 
//var는 {}블록사용불가, 같은변수에 다른 변수타입을 넣어도, 변수선언하기 전에 값넣어도 오류발생X
//let은 (added in ES6)에 추가되었고 var의 여러 문제점 보완
//const는 변수 재선언, 재할당 불가 그 결과로 보안성향상 메모리에서 읽기만가능
let globalName = 'global name';
{
let name = 'ten';
// console.log(name);
name = 'hello';
// console.log(name);
}
// console.log(name);
// console.log(globalName);

const daysInWeek = 7;
const maxNumber = 5;

//호이스팅(hoisting): 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. 
//var 로 선언한 변수의 경우 호이스팅 시 undefined 로 변수를 초기화합니다.  
//변수를 선언하기전에 출력을 해도 가능함 하지만 선언한 결과가아닌 undefined가 나옴
console.log(aaa)  //출력을 먼저
var aaa = 'da';  //선언을 나중에


//3. Variable types
//변수타입 설정안해도됨 
const count = 18;
const size = 12.1;
//console.log(`value: ${count}, type: ${typeof count}`); //``백틱사용시 ${}사용해서 문자타입사이에 변수넣어줄수있음
//console.log(`value: ${size}, size: ${typeof size}`);

//number
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2
// console.log(infinity);
// console.log(negativeInfinity);
// console.log(nAn);

//string
const char = 'c';
const brendan ='brendan';
const greeting = 'hello' + brendan;
// console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob =`h1 ${brendan}!`;
// console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN,''
//true: any other value
const canRead = true;
const test = 3<1; //false
// console.log(`value: ${canRead}, type: ${typeof canRead}`);
// console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
// console.log(`value: ${nothing}, type: ${typeof nothing}`);
//undefined
let x = undefined; //둘다 undefined
//let x; //둘다 undefined
// console.log(`value: ${x}, type: ${typeof x}`);

//symbol 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
// console.log(gSymbol1 === gSymbol2);
// console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);
/*symbol은 바로 출력하려면 .decription으로 형변환해주어야함 */

//object 
const ten = {name: 'ten', age: 27};
ten.age = 22; //나이변경
// console.log(ten.age);
// 5. Dynamic typing 서로 다른 값 계산시 문제가 생길수 있음
let text = 'hello'; //문자로 선언
// console.log(`value: ${text}, type: ${typeof text}`);
text = 1;  //number로 변환
// console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
// console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
// console.log(`value: ${text}, type: ${typeof text}`);
text = '3' / '1';
// console.log(`value: ${text}, type: ${typeof text}`);
text = '3' / '1';
// console.log(`value: ${text}, type: ${typeof text}`);
text = '3' / '1';
// console.log(`value: ${text}, type: ${typeof text}`);
text = '3' / '1';
// console.log(`value: ${text}, type: ${typeof text}`);