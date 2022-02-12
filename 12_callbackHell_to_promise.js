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