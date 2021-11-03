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
const ten3 = ten;
console.log(ten1 == ten2);
console.log(ten1 === ten2);
console.log(ten1 === ten3);

