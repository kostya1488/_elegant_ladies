$(document).ready(function() {
    if ($('body').hasClass('mobile')) {
        //добавляем inline стиль, в котором фиксируем высоту титульного блока
        $('.main').css({ height: window.innerHeight });
    }

    $('.menu_toggle').click(function(e) {
        e.preventDefault();
        $('.menu_area').toggleClass('activated');
    });

});