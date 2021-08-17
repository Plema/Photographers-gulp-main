$(document).ready(function () {

    //show/hide contacts
    $('.switch-contacts').on('click', function () {
        $('.hiddenContacts').toggle();
        $(this).toggleClass('active');
    });

    //100vh с учетом строк состояния в моб устройствах

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // попап в проектах
    $('.open-projectsPopup').on("click", function () {
        $('.overlay-projectsPopup').addClass('active');
    });
    $('.overlay-projectsPopup .closeBtn, .overlay-projectsPopup .close').on("click", function () {
        $('.overlay-projectsPopup').removeClass('active');
    });

});
