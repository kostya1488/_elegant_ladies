var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    // initialSlide: 6,
    breakpoints: {
        576: {
            effect: false,
        },
    },
});

var swiperAdvantages = new Swiper('.swiper-advantages', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        1200: {
            pagination: false,
        }
    },

});

var swiperIntro = new Swiper('.swiper-intro', {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 3000,
});

if (window.innerWidth > 1200) {
    swiperAdvantages.destroy();
}