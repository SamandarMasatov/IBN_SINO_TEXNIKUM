

window.addEventListener('scroll', () =>{
const header =document.querySelector(".header");
const header_menu = document.querySelector('.header_menu');
const header_search =document.querySelector(".header_search");
header.classList.toggle('active_bg' , window.scrollY > 50)

header_menu.classList.toggle('active_li' , window.scrollY > 50)
header_search.classList.toggle('search' ,window.scrollY > 50)

});

const telefon_menu = document.querySelectorAll('.telefon_menu');
const telefon_select = document.querySelectorAll('.telefon_select');
const telefon_cust = document.querySelectorAll('.telefon_cust');

telefon_menu.forEach(item , () =>{
    telefon_cust.classList.remov('telefon_active');
    telefon_select.addEventListener('click' , () =>{
        telefon_cust.classList.toggle('telefon_active');
    })
})

// ================burger===========

const burger = document.querySelector('.burger');

const telefon = document.querySelector('.telefon')

burger.addEventListener('click', () =>{
    telefon.classList.toggle('active');
})