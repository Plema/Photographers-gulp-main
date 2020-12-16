$(document).ready(function () {

    var customSelect = $('.photoDescr__popup select');

    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 5
    });

    jcf.replace(customSelect);

    //проверка на IOS Safari
    function iOSversion() {

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            $('.photoDescr__popup').addClass('ios');
        }
    }
    iOSversion();

    // добавление описания фото
    $('.open-photoDescr').on("click", function () {
        $('.overlay-photoDescr').addClass('active');
    });
    $('.overlay-photoDescr .closeBtn, .overlay-photoDescr .close').on("click", function () {
        $('.overlay-photoDescr').removeClass('active');
    });

    // //Scroll
    // jQuery(document).ready(function () {
    //     jQuery('.scrollbar-inner').scrollbar();
    // });

    (function ($) {
        $(document).on("load", function () {
            $(".mainInfo").mCustomScrollbar();
        });
    })(jQuery);
});