window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const header_menu = document.querySelector('.header_menu');
  const header_search = document.querySelector('.header_search');
  header.classList.toggle('active_bg', window.scrollY > 50);
  header_menu.classList.toggle('active_li', window.scrollY > 50);
  header_search.classList.toggle('search', window.scrollY > 50);
  burger.classList.toggle('burger_active', window.scrollY >50);
});
// ================burger===========

const burger = document.querySelector('.burger');

const telefon = document.querySelector('.telefon');

burger.addEventListener('click', () => {
  telefon.classList.add('active');
  cover.classList.add('cover_active');  
});

const telefon_close = document.querySelector('.telefon_close');
const cover = document.querySelector('.cover');
telefon_close.addEventListener('click', () => {
  telefon.classList.remove('active');
  cover.classList.remove('cover_active');
});

// ================owl carusel================
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true, 
  margin: 10,
  center: true,
  nav: false,
 dots:false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024:{
    item:1,
    },
    1000: {
      items: 3,
    },
  },
  
});

