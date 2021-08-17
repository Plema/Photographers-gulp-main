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

    //100vh с учетом строк состояния в моб устройствах

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // создание альбома
    $('.open-editAlbum').on("click", function () {
        $('.overlay-editAlbum').addClass('active');
    });
    $('.overlay-editAlbum .closeBtn, .overlay-editAlbum .close').on("click", function () {
        $('.overlay-editAlbum').removeClass('active');
    });


});