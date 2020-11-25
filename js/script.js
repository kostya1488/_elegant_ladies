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
$('.button').click(function(e) {
    e.preventDefault();
    setTimeout(() => {
        $('.feedback').delay(1000).addClass('form_sended');
    }, 500)
    return false;

});