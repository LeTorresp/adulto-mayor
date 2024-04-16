




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





    document.getElementById('cambiarASlide1').addEventListener('click', function () {
        swiper.slideTo(0);
        console.log("slide1");
    });


    document.getElementById('cambiarASlide2').addEventListener('click', function () {
        swiper.slideTo(1);
        console.log("texto2");
    });

    document.getElementById('cambiarASlide3').addEventListener('click', function () {
        console.log("texto3");
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
  