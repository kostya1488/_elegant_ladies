$(document).ready(function() {

    $('.menu_toggle').click(function(e) {
        e.preventDefault();
        $('.menu_area').toggleClass('activated');
    });
});
// --------------------------------------------
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});

// --------------------------------------------
// --------------------------------------------

const range = document.querySelector(".range");
const bubble = document.querySelector(".bubble");


range.addEventListener("input", setBubble(range, bubble));

function setBubble(range, bubble) {
    const val = range.value;

    const min = range.min;
    const max = range.max;

    const newVal = Number(((val - min) * 100) / (max - min));

    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}