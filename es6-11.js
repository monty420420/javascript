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
  const fruits1 = ['apple','strawberry']
  const fruits2 = ['banana','kiwi']
  const fruits = [...fruits1, ...fruits2];
  // console.log(fruits);

  //객체 합치기
  const dog1 = {dog1: '🐶'} 
  const dog2 = {dog2: '🐕'}
  const dogs = {...dog1 , ...dog2}  //dog1복사체에 dog2복사체를 덮어준다는 느낌
  // console.log(dogs)
}


//Default parameters //기본파라미터값설정
{
  {
    // 설정안했을때
    // function printMessage(message){ 
    //   console.log(message);
    // }
    
    //default 파라미터 설정
    function printMessage(message = 'default message'){ 
      // console.log(message);
    }

    printMessage('hello');
    printMessage(); //기본파라미터값설정하지 않으면 undefine
  }
}

//Ternary Operator
{
  const isCat = true;
  
  //사용안할때
  {
    let component;
    if (isCat) {
      component = 'cat'
    } else {
      component = 'dog'
    }
    console.log(component);
  }
  

  //ternary 사용
  {
    const component = isCat ? 'cat' : 'dog';
    console.log(component)
    console.log(isCat ? 'cat' : 'dog')
  }

}

//template literals

{
  const weather = 'sun';
  const temparature = '16*C'
  
  //+연산자조합 방법
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature
  )

  //template literals사용 
  console.log(
    `Today weather is ${weather} and temparature is ${temparature}`
  )
}





























//3. Spread Syntax

{
  const obg1 = {key: 'key1'}
  const obj2 = {key: 'key2'}
  const array = [obg1, obj2]
  // console.log(array)
}



