//json

//1. object to json
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);



//여기서 함수는 들어갈수없기 때문에 함수 jump는 안된다
const rabbit = {
    name: 'usagi',
    color: 'pink',
    size: null,
    birthDate: new Date(),
    jump: () => {                          
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON .stringify(rabbit, ['name']);
console.log(json);

json = JSON .stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ten' : value;
});
console.log(json);


//2. json to object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());  //error