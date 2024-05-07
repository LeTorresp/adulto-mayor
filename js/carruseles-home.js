




var swiper = new Swiper(".Banner-slide", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  autoplay: true,
  freeMode: true,
  speed: 1000,
  rewind: true,
  effect: 'fade',

});



$("#cambiarASlide1").click(function(){
  swiper.slideTo(0);

});

$("#cambiarASlide2").click(function(){
  swiper.slideTo(1);
 

});

$("#cambiarASlide3").click(function(){
  swiper.slideTo(2);

});

var swiper2 = new Swiper(".Interes", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: true,
  freeMode: true,
  speed: 1000,
  rewind: true,
  breakpoints: {
    900: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper2 = new Swiper(".portafolio-slide", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  autoplay: true,
  freeMode: true,
  speed: 1000,
  rewind: true,
  breakpoints: {
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});



var swiper3 = new Swiper(".Sedes", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: true,
  freeMode: true,
  speed: 1000,
  rewind: true,
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
