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

let text = document.querySelector('.promo_text');
let image = document.querySelector('.image_wrap');

image.style.height = window.innerHeight - text.offsetHeight + "px";
// --------------------------------------------
// --------------------------------------------