'use strict';

//state: pending -> fulfilled or rejected
//producer, consumer

//1. producer
//새로운 promise가 생성될때 정의한 executer가 자동적으로 실행됨
const promise = new Promise((resolve, reject) => {
     //network, read files
     console.log('doing something');
     setTimeout(() => {
        //resolve('ten');  //성공시
        reject(new Error('no network')); //오류 발생시
     }, 2000);
});


//2. consumers: then(성공시), catch(오류시), finally(성공 오류 상관없이)
promise.then(value => {
    console.log(value);
})
  .catch(error =>{
      console.log(error);
  })
  .finally(() => {
      console.log('finally')
  });


//3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});

fetchNumber.then(num => num*2)
           .then(num => num*3)
           .then(num => {
               return new Promise((resolve, reject) => {
                   setTimeout(() => resolve(num- 1), 1000);
               });
           })
           .then(num => console.log(num));
              