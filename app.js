

window.addEventListener('scroll', () =>{
const header =document.querySelector(".header");
const header_menu = document.querySelector('.header_menu');
const header_search =document.querySelector(".header_search");
header.classList.toggle('active_bg' , window.scrollY > 50)

header_menu.classList.toggle('active_li' , window.scrollY > 50)
header_search.classList.toggle('search' ,window.scrollY > 50)

});


const burger = document.querySelector('.burger');

const telefon = document.querySelector('.telefon')

burger.addEventListener('click', () =>{
<<<<<<< HEAD
    telefon.classList.toggle('active');
})

=======
    telefon.classList.add('active');
    cover.classList.add('cover_active');
})


const telefon_close = document.querySelector('.telefon_close');
const  cover = document.querySelector('.cover')
telefon_close.addEventListener('click', () => {
    telefon.classList.remove('active');
    cover.classList.remove('cover_active');
    
})



// ================burger===========
>>>>>>> c96c48ccb4366c5098519f66a39a2f4bbf3b8046
