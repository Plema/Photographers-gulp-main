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
    $('.open-creatingAlbum').on("click", function () {
        $('.overlay-creatingAlbum').addClass('active');
    });
    $('.overlay-creatingAlbum .closeBtn, .overlay-creatingAlbum .close').on("click", function () {
        $('.overlay-creatingAlbum').removeClass('active');
    });

    //удаление альбома
    $('.delete-btn').on("click", function () {
        $('.question-delete-popup').addClass('active');
    });
    $('.delete-btn-yes').on("click", function () {
        $('.question-delete-popup').removeClass('active');
        $('.thanks').addClass('active');
    });
    $('.cancel-btn').on("click", function () {
        $('.question-delete-popup').removeClass('active');
    });
    $('.thanks-btn').on("click", function () {
        $('.thanks').removeClass('active');
        $('.overlay-editAlbum').removeClass('active');
    });



});