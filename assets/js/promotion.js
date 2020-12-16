$(document).ready(function () {

    jcf.replaceAll();


    if ($(window).width() >= 1188) {
        //auto height 


        $('.topItems .item__text ul').matchHeight({
            byRow: false
        });
        $('.bottomItems .item__text ul').matchHeight({
            byRow: false
        });

    }
    $('.item__img, .item__text h4').on('click', function () {
        if ($(window).width() >= 1024 && $(window).width() < 1188) {
            $(this).parent().find('ul').toggle();
        }
    });



});