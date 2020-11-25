$(document).ready(function() {

    $('.menu_toggle').click(function(e) {
        e.preventDefault();
        $('.menu_area').toggleClass('activated');
    });

    $('.nav_link').click(function(e) {
        e.preventDefault();
        $ind = $(this).attr('slideTo');
        swiper.slideTo($ind);
    });

    $('.swiper_button').click(function(e) {
        e.preventDefault();
        $imgPath = $('.swiper-slide-active>img').attr('src');
        $('.intro>.container').css('background-image', `url(${$imgPath})`)
    });

});
// --------------------------------------------
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// --------------------------------------------
// input range slider
const bubble = document.getElementById("bubble");
const range = document.getElementById("range");

setBubble();
range.addEventListener("input", setBubble)

function setBubble() {
    const val = range.value
    const min = range.min;
    const max = range.max;

    const newVal = Number(((val - min) * 100) / (max - min));

    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
// --------------------------------------------
swiper.on('slideChangeTransitionStart', function() {
    $('.section_title').removeClass('activated');
});
swiper.on('slideChangeTransitionEnd', function() {
    $('.section_title').addClass('activated');
});