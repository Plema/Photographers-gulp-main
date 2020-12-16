$(document).ready(function () {

    //show/hide contacts
    $('.switch-contacts').on('click', function () {
        $('.hiddenContacts').toggle();
        $(this).toggleClass('active');
    });

    //проверка на IOS Safari
    function iOSversion() {

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            $('.projectsPopup__popup').addClass('ios');
        }
    }
    iOSversion();

    // попап в проектах
    $('.open-projectsPopup').on("click", function () {
        $('.overlay-projectsPopup').addClass('active');
    });
    $('.overlay-projectsPopup .closeBtn, .overlay-projectsPopup .close').on("click", function () {
        $('.overlay-projectsPopup').removeClass('active');
    });

});