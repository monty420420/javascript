//Callback Hell example
class UserStorage {
    logUser(id, password) {

        return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(
                (id === 'ten' && password === 'dream') ||
                (id === 'coder' && password === 'coding')
            ){
                resolve(id);
            } else {
                reject(new Error('not found'));
            }
        }, 2000);
    });
}

    getRoles(user){
       return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(user === 'ten') {
                resolve({name: 'ten', role: 'admin'});
            } else {
                reject(new Error('no access'));
            }
         }, 1000);
       });
    }
}


//promise와 async로 바꿔보기
const UserStorage1 = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage
  .loginUser(id, password)
  .then(UserStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);