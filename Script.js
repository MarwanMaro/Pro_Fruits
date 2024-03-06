// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

window.scroll = ()=> {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* 
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

*/


