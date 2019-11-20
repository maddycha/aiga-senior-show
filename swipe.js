var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

});