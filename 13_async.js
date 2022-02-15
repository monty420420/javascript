// async & await

//1. promise //resolve와 reject 따로 만들어줘야함
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         return 'ten';
//     });
// }

// const user = fetchUser();
// console.log(user);

//2. async
async function fetchUser() {
        return 'ten';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//3.await
function delay(ms) {
    return new Promise(reslove => setTimeout(reslove, ms));
}




