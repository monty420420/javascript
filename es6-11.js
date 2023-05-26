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
    // console.log(component);
  }
  

  //ternary 사용
  {
    const component = isCat ? 'cat' : 'dog';
    // console.log(component)
    // console.log(isCat ? 'cat' : 'dog')
  }

}

//template literals

{
  const weather = 'sun';
  const temparature = '16*C'
  
  //+연산자조합 방법
  // console.log(
  //   'Today weather is ' + weather + ' and temparature is ' + temparature
  // )

  //template literals사용 
  // console.log(
  //   `Today weather is ${weather} and temparature is ${temparature}`
  // )
}

//ES11
//Optional Chaining 

{  
  //예시에 사용될데이터
  const person1 = {
    name: 'ten',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };

  const person2 = {
    name: 'Bob',
  }
  

  //1.나쁜예
  {
    function printManager(person) {
      console.log(person.job.manager.name);  //person파라미터전달하고 job안에manager안에name출력
    }
    //printManager(person1); //person1은 위에 내용들이 있어 출력되지만
    //printManager(person2);  //person2는 name이라는 내용만있어 출력되지 않음
  }
  
  //2.나쁜예
  {
    function printManager(person) {
     console.log(person.job && person.job.manager && person.job.name); //3개의 조건충족 출력
    }
    // printManager(person1);
    // printManager(person2);
  }

  {
    function printManager(person){
    console.log(person.job?.manager?.name); //person파라미터전달 job안에 manager이고 name인것출력
   }
    // printManager(person1);
    // printManager(person2);
  }
}

// Nullish Coalescing Operator 
{
  // Local OR operator
  //false: false,'',0,null,undefined
  
  {
    const name = 'ten';
    const userName = name || 'Guest';  //name에 ten이라는 문자가있으므로 true 없다면 false로 Guest문자 
    //console.log(userName); //name에 ten이 있으므로 ten문자 출력
  }

  {
    const name = null;
    const userName = name || 'Guest';  
    //console.log(userName);  //null이므로 Guest출력
  }

  {
    const name = '';
    const userName = name || 'Guest';  
    //console.log(userName);  //빈문자여도 Guest출력하는 문제가 있음
  }

  {
    const name = 0;
    const userName = name || 'Guest';  
    //console.log(userName);  //0이어도 Guest출력하는 문제가 있음
  }
  

  //해결법
  //OR operator(||)말고 ??사용
  // ??를 사용하면 그자체를 출력하게 해줄수있다
  
  {
    const name = 'ten';
    const userName = name ?? 'Guest'; 
    console.log(userName);  
  }

  {
    const name = null;
    const userName = name ?? 'Guest';  
    console.log(userName);  
  }

  {
    const name = '';
    const userName = name ?? 'Guest';  
    console.log(userName);  
  }

  {
    const name = 0;
    const userName = name ?? 'Guest';  
    console.log(userName); 
  }
  
}

































