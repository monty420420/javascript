//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); //2에 3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x +y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//무거운값을 뒤로 보내자 value1 value2  check를 뒤로
// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`or: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
// if(nullableObject != null) {
//   nullableObject.something;}


function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('XXX');
    }
    return true;
}

//7. Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality 타입달라도 ok 값만똑같으면 ok
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality 타입 값 다똑같아야함
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


//object equality by reference
const ten1 = {name: 'ten'};
const ten2 = {name: 'ten'};
const ten3 = ten1;
console.log(ten1 == ten2);
console.log(ten1 === ten2);
console.log(ten1 === ten3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log(''=== false);
console.log(null == undefined);
console.log(null === undefined);

//8. Conditional operators: if
//if, else if, else
const named = 'df';
if (named === 'teni') {
    console.log('hi teni');
} else if (named === 'coder'){
    console.log('good coder');
} else {
    console.log('unkwnon');
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(named === 'teni' ? 'yes' : 'no');

//10. switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox' :
       console.log('good');
       break;
    default:
        console.log('same all!');
        break;
    }

//11. Loops
let i = 3;
while (i>0){
    console.log('while: ${i}');
    i--
}  while (i > 0);

//for loo, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log('for: ${i}');
}

for (let i = 3; i > 0; i = i-2){
    console.log(`inline variable fo: ${i}`);
}

//nested loops
for(let i = 0; i< 10; i++){
    for(let j = 0; j<10; j++){
        console.log(`i: ${i} j:${j}`);
    }
}

//continue, break
for (let i = 0; i < 11; i++){
    if(i%2 !== 0) {
       continue;
    }
    console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++){
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

for (let i = 0; i < 12; i++){
    if(i >8) {
           break;
    }
    console.log(`q2. ${i}`);
}

for (let i = 0; i < 9; i++){
    if(i >8) {
           break;
    }
    console.log(`q2. ${i}`);
}


