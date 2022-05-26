let cl=console.log;

const navigation = document.getElementById("navigation");
const navtoggle = document.getElementById("nav-toggle");

navtoggle.addEventListener("click",function(){
    navigation.classList.toggle("active")
})