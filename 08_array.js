'use strict';

//Array

//1. 선언
const arr1 = new Array();
const arr2 = [1,2];

//2. index positon
const fruits = ['apple','banana'];
//console.log(fruits);
//console.log(fruits.length);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits([fruits.length - 1])); //배열의 마지막

//for
for(let i= 0; i < fruits.length; i++){
//   console.log(fruits[i]);
}

//for of
for (let fruit of fruits) {
//    console.log(fruit);
}

//forEach
fruits.forEach(function(fruit){
 //   console.log(fruit)
})
//forEach ArrowFunction
fruits.forEach((fruit) => console.log(fruit));

//3. add delete of array
//제일뒤에 넣기
fruits.push('peach');
//console.log(fruits);
//제일뒤에 빼기
fruits.pop();
//console.log(fruits);

//제일앞에 넣기
fruits.unshift('lemon');
console.log(fruits);
//제일앞에 빼기
//fruits.shift();

//지정된 포지션에서 지우기
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1,'banana','candy');
console.log(fruits);

//배열합치기
const fruits2 = ['pear','pencil'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//인덱스 검색
//indexof
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('banana'));

//includes
console.log(fruits.includes('peach'));
console.log(fruits.includes('apple'));

//lastIndexOf 몇번째인지
console.clear();
fruits.push('apple');
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));