'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const flagsElement = document.getElementById("flags");

const textsToChange =document.querySelectorAll('[data-section]');

const changeLanguage = async language=>{
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();
  const tituloText = texts['slogan']['0'];
  const nuevaText = texts['nueva-titulo']['0'];

  document.querySelector('.h1.hero-title .slogan').textContent = tituloText;
  document.querySelector('.h1.hero-title .nueva-titulo').textContent = nuevaText;
  
  textos = texts['slogan'];
  nuevos = texts['nueva-titulo'];

  for ( let textToChange of textsToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e)=> {
  changeLanguage(e.target.parentElement.dataset.language)
});

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/*equipo*/

 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

// Selecciona el elemento span
const span = document.getElementById('oli');
const span2 = document.getElementById("nuevo")
// Define un arreglo de textos que quieres mostrar
let textos = [' Experiencias', ' Lugares', ' Amigos'];
let nuevos = ['Nuevos', 'Nuevos', 'Nuevas'];

let index = 0;

// Función que actualiza el texto del span

function cambiarTexto1() {
 span.textContent = textos[index];
 index++;
  
 if (index >= Object.keys(textos).length) {
  index = 0;
 }
}

function cambiarTexto() {
  span2.textContent = nuevos[index];
  index++;
  
  if (index >= Object.keys(nuevos).length) {
    index = 0;
  }
}

// Cambia el texto cada 2 segundos
setInterval(cambiarTexto, 2000);
setInterval(cambiarTexto1, 2000);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        let sectionId;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: true,
});

sr.reveal(`.hero-content, .hero-banner, 
  .container-2-text, .features-item,
  .blog-container, .blog-card, .footer-brand, .footer-list,.titulo-mision,
         .footer__content`, {
  origin: 'top',
  interval: 200,
})

sr.reveal(`.about-banner, .about-content-2, .app-content,.text-mision-1, .first.circle`, {
  origin: 'left'
})

sr.reveal(`.about-content, .about-banner-2, .app-banner, .text-mision-2, .second.circle `, {
  origin: 'right'
})
