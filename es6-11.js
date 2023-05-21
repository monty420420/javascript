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
  console.log(first,second);
}





























//3. Spread Syntax

{
  const obg1 = {key: 'key1'}
  const obj2 = {key: 'key2'}
  const array = [obg1, obj2]
  // console.log(array)
}



