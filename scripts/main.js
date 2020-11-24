
//Hamburger
let hamburger=document.getElementById("hamburger");
let hamburgerCross=document.getElementById("hamburgerCross");
let menu=document.getElementById("main-menu");
hamburger.addEventListener("click",open);
menu.addEventListener("click",close);
hamburgerCross.addEventListener("click",close);

function open(){
    hamburgerCross.style.display="block";
    hamburger.style.display="none";
    menu.style.display="block";
    
}
function close(){
    menu.style.display="none";
    hamburgerCross.style.display="none";
    hamburger.style.display="block";
}