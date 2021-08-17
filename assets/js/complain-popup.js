$(document).ready(function () {

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