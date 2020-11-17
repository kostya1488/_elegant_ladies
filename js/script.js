$(document).ready(function() {
    // if ($('body').hasClass('mobile')) {
    //     //добавляем inline стиль, в котором фиксируем высоту титульного блока
    //     $('.main').css({ height: window.innerHeight });
    // }

    $('.menu_toggle').click(function(e) {
        e.preventDefault();
        $('.menu_area').toggleClass('activated');
    });

    let h = window.innerHeight
    $('.swiper-container').css('height', h)

});

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// });