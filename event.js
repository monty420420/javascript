//target
const green = document.querySelector('.green');
green.addEventListener('click',function(e){
    console.log("currentTarget : ",e.currentTarget);
    console.log("Target : ",e.target);
})


//closest
// 현재 엘리멘트에서 가장 가까운 조상을 반환합니다.
// 만약 조상이 없다면 null값을 반환 합니다.
const el = document.getElementById("div-03");

// ID가 "div-02"인 가장 가까운 조상
console.log(el.closest("#div-02")); // <div id="div-02">

// div 안에 놓인 div인 가장 가까운 조상
console.log(el.closest("div div")); // <div id="div-03">

// div면서 article을 부모로 둔 가장 가까운 조상
console.log(el.closest("article > div")); // <div id="div-01">

// div가 아닌 가장 가까운 조상
console.log(el.closest(":not(div)")); // <article>