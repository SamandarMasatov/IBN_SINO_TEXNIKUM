

window.addEventListener('scroll', () =>{
const header =document.querySelector(".header")


header.classList.toggle('active_bg' , window.scrollY > 50)
});