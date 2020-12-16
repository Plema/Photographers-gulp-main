$(document).ready(function () {

    var custSelect = $('.creatingAlbum__popup select');

    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 5
    });

    jcf.replace(custSelect);

    //проверка на IOS Safari
    function iOSversion() {

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            $('.creatingAlbum__popup').addClass('ios');
        }
    }
    iOSversion();

    // создание альбома
    $('.open-creatingAlbum').on("click", function () {
        $('.overlay-creatingAlbum').addClass('active');
    });
    $('.overlay-creatingAlbum .closeBtn, .overlay-creatingAlbum .close').on("click", function () {
        $('.overlay-creatingAlbum').removeClass('active');
    });


});