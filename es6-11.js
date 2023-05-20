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
console.log(student.name)

//object
{
    // const name = student.name;
    // const level = student.level;
    console.log(name,level)
}









{
    const {name, level} = student;
    const [first, second] = animals;
}



