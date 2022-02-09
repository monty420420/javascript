'use strict';

//JavaScript is synchronous
//hosting: var, function declaration
console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);
console.log('3');

//Synchronous callback 동기콜백
function printImmedately(print){
    print();
}
printImmedately(() => console.log('hello'));

//Asychonous callback 비동기콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('aCallback'), 2000);


//Callback Hell example
class UserStorage {
    logUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'ten' && password === 'dream') ||
                (id === 'coder' && password === 'coding')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
       setTimeout(() => {
          if(user === 'ten') {
              onSuccess({name: 'ten', role: 'admin'});
          } else {
              onError(new Error('no access'));
          }
       }, 1000);
    }
}