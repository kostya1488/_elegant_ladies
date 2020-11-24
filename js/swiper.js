var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    // effect: 'coverflow',
    // initialSlide: 1,
    breakpoints: {
        576: {
            effect: false,
        },
    }
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
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,
    speed: 1000,
});

if (window.innerWidth > 1200) {
    swiperAdvantages.destroy();
}