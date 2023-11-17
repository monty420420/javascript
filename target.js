const green = document.querySelector('.green');
green.addEventListener('click',function(e){
    console.log("currentTarget : ",e.currentTarget);
    console.log("Target : ",e.target);
})