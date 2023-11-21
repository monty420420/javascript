/*arrow function*/

//{}괄호와 return이 겹치면 둘다생략가능
// const add = (a,b) => {
//     return a+b;
// }

//생략버전
// const add = (a,b) =>  a+b;

// console.log(add(1,2));

/*객체접근*/
//객체접근방법에 .을사용하는데 []도 가능
//첫예시
const a = {};
a.b = 'hello';
a['b'] = 'hello';
// console.log(a.b);
// console.log(a['b']);

//두번쨰예시
const person = {};
person.name = 'zerocho';
person['name'];
// console.log(person['name']);
//''빼먹으면 undefined
person[name];
// console.log(person[name]);




