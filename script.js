console.log('hello this is js');

var toggleBtn = document.querySelector('.togglebtn');
var navMenu = document.querySelector('.navMenu');
var removeBtn = document.querySelector('.removeBtn');
console.log(toggleBtn);
console.log(navMenu)

toggleBtn.onclick=()=>{
    navMenu.style.top="100px"
} 


removeBtn.onclick=()=>{
    navMenu.style.top="-900px"
} 

