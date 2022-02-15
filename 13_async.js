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

async function getApple() {
    await delay(1000);
    return 'apple';
}

//아래코드 then 버전
// function getBanana() {
//     return delay(1000)
//     .then(() => 'banana' );
// }

async function getBanana() {
    await delay(1000);
    return 'banana'; 
}

//아래코드 then 버전
// function pickFruit(){
//     return getApple()
//     .then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruit(){
   const applePromise =  getApple();
   const bananaPromise = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
   return `${apple} + ${banana}`;
} 

pickFruit().then(console.log);

//4. useful Promise APIS
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);





