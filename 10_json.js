//json

//1. object to json
//stringfy(obj)
let json = JSON.stringify(true);
// console.log(json);

json = JSON.stringify(['apple', 'banana']); //stringify 함수 문자화
//  console.log(json); //json규격 배열형태로 보여줌



//여기서 함수는 들어갈수없기 때문에 함수 jump는 안된다
const rabbit = {
    name: 'usagi',
    color: 'pink',
    size: null,
    birthDate: new Date(),
    jump: () => {
        // console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
// console.log(json);

json = JSON.stringify(rabbit, ['name']); //원하는 property만 문자화
// console.log(json);

json = JSON.stringify(rabbit, (key, value) => {      //replacer
    // console.log(`key: ${key}, value: ${value}`);
    //return  value; //기본값
    return key === 'name' ? 'ten' : value; //key의 name을 ten으로변경 아니면 value
});
// console.log(json);


//2. json to object
//parse(json)
// console.clear();
json = JSON.stringify(rabbit);
// console.log(json);
const obj = JSON.parse(json, (key, value) => {
    // console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
// console.log(obj);
// rabbit.jump();
//obj.jump();

// console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate());  //error //string이라서 에러나옴