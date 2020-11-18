var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});