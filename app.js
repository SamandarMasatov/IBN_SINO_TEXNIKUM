

window.addEventListener('scroll', () =>{
const header =document.querySelector(".header");
const header_menu = document.querySelector('.header_menu');
header.classList.toggle('active_bg' , window.scrollY > 50)

header_menu.classList.toggle('active_li' , window.scrollY > 50)

});