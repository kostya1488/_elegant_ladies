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
});
// --------------------------------------------
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// --------------------------------------------
swiper.on('slideChangeTransitionStart', () => {
    let activeSlideIndex = swiper.activeIndex;
    let activeSlide = swiper.slides[activeSlideIndex];
    activeSlide.classList.add('animated_title');
});
// --------------------------------------------
// --------------------------------------------
// input range slider
const bubble = document.getElementById("bubble");
const range = document.getElementById("range");

setBubble();
range.addEventListener("input", setBubble)
var min = range.min;
var max = range.max;

function setBubble() {
    var val = range.value

    var newVal = Number(((val - min) * 100) / (max - min));

    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
// --------------------------------------------
$('.button').click(function(e) {
    e.preventDefault();
    setTimeout(() => {
        $('.form_response').addClass('visible')
    }, 500);
    return false;
});
$('.close_button').click(function(e) {
    e.preventDefault();
    $(this).parent().removeClass('visible');

});