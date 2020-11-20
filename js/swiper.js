var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    effect: 'coverflow',
    hashNavigation: {
        replaceState: true,
    }
});

var swiperAdvantages = new Swiper('.swiper-advantages', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        // dynamicBullets: true,
    },
})