$(document).ready(function () {

    //проверка на IOS Safari
    function iOSversion() {

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            $('.complaint__popup').addClass('ios');
        }
    }
    iOSversion();

    // попап Жалоба
    $('.open-complaint').on("click", function () {
        $('.overlay-complaint').addClass('active');
    });
    $('.overlay-complaint .closeBtn, .overlay-complaint .close').on("click", function () {
        $('.overlay-complaint').removeClass('active');
    });

   

    (function ($) {
        $(document).on("load", function () {
            $(".mainInfo").mCustomScrollbar();
        });
    })(jQuery);
});