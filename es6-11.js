//1. shorthand property names
{
  const ten1 = {
    name: 'ten',
    age: '18'
  }

  const name = 'ten';
  const age = '22';


  //key와 value가 같으면 생략가능
  const ten2 = {
    name: name,
    age: age
  }
  
  const ten3 = {
    name,
    age
  }

//   console.log(ten1,ten2,ten3)
}


//2. destructuring Assignment

//object
const student = {
   name: 'Anna',
   level: 1
};
// console.log(student.name) 

//object 오브젝트 destructuring {}
{
    const name = student.name;
    const level = student.level;
    // console.log(name,level)
}


//array 배열 destructuring []
const animals = ['🐶','🐱']

{
    const dog = animals[0];
    const cat = animals[1];
    // console.log(dog);
    // console.log(cat);    
}

{
  const [first, second] = animals;
  // console.log(first,second);
}


//spread syntax
//기존배열을 건드리지 않고 새로운 배열에 기존배열의 내용을 사용할수있음
{
  const obj1 = { key: 'key1'};
  const obj2 = { key: 'key2'};
  const array = [obj1, obj2];

  const arrayCopy = [...array];
  // console.log(array, arrayCopy);
  

  //배열에 추가하는법 복사한 ...array에 {key: key3}넣기
  const arrayCopy2 = [...array, { key: 'key3'}];
  
  //배열을 직접 건드리면 다 바뀌므로 주의
  obj1.key = 'newKey';  // key를 newKey로 변경하면 다른배열도 다 바뀜
  // console.log(array, arrayCopy, obj1);

  //배열 합치기
  
}





























//3. Spread Syntax

{
  const obg1 = {key: 'key1'}
  const obj2 = {key: 'key2'}
  const array = [obg1, obj2]
  // console.log(array)
}



