var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    effect: 'coverflow',
    initialSlide: 6,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});

var swiperAdvantages = new Swiper('.swiper-advantages', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
})