/*반복문*/
let names = [
  { name: "a", age: 23, height: 170 },
  { name: "b", age: 13, height: 150 },
  { name: "c", age: 62, height: 130 },
  { name: "d", age: 36, height: 120 },
];
// console.log(names);

/*for*/
// for(let i=0; i<names.length; i++){
//    console.log("for:",names[i]);
// }

/*forEach*/
// names.forEach(function(item){
//   console.log("forEach:",item);
// })
//forEach arrow
// names.forEach((item)=>{console.log("forEach arrow:",item)});
//index도 가능
// names.forEach((item,index)=>{console.log("forEach arrow,index:",item,index)});

/*map*/
//forEach와 다르게 배열로 반환해줌 반드시 리턴해줘야함
// let data = names.map((item)=>{
// return item;
// // return item.age;
// })
// console.log("map:",data);

/*filter*/
//조건 찾기 배열로 전부반환
// let data2 = names.filter((item)=>{
//     return item.age==23;
//   })
// console.log("filter:",data2);

/*some*/
//해당조건이 있으면 true 아니면 false
// let data3 = names.some((item)=>{
//     return item.age==23;
//   })
// console.log("some:",data3);

/*every*/
//모두가 조건에 부합하는지 맞으면 true 아니면 false
// let data4 = names.every((item)=>{
//     return item.age==23;
//   })
// console.log("every:",data4);

/*find*/
//조건찾기 filter와 다른점은 첫번째로 찾은 조건결과 찾아줌
// let data5 = names.find((item)=>{
//     return item.age=="23";
//   })
// console.log("find:",data5);

/*findIndex*/
//조건에 부합하는 index번호를 찾아줌
// let data6 = names.findIndex((item)=>{
//     return item.age=="23";
//   })
// console.log("find:",data6);




