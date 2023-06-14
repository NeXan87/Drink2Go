import Swiper from './swiper-bundle.js';

const initSwiperActions = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper__pagination',
      bulletElement: 'button',
      bulletClass: 'swiper__bullet button',
      bulletActiveClass: 'swiper__bullet--active',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },

    grabCursor: true,
  });
}

export { initSwiperActions };
