$(document).ready(function () {

    jcf.replaceAll();

    //show/hide contacts
    $('.switch-contacts').on('click', function () {
        $('.hiddenContacts').toggle();
        $(this).toggleClass('active');
    });

    //---popups
    // попап в проектах
    $('.open-projectsPopup').on("click", function () {
        $('.overlay-projectsPopup').addClass('active');
    });
    $('.overlay-projectsPopup .closeBtn, .overlay-projectsPopup .close').on("click", function () {
        $('.overlay-projectsPopup').removeClass('active');
    });

    // создание альбома
    $('.open-creatingAlbum').on("click", function () {
        $('.overlay-creatingAlbum').addClass('active');
    });
    $('.overlay-creatingAlbum .closeBtn, .overlay-creatingAlbum .close').on("click", function () {
        $('.overlay-creatingAlbum').removeClass('active');
    });

    // добавление описания фото
    $('.open-photoDescr').on("click", function () {
        $('.overlay-photoDescr').addClass('active');
    });
    $('.overlay-photoDescr .closeBtn, .overlay-photoDescr .close').on("click", function () {
        $('.overlay-photoDescr').removeClass('active');
    });

    // просмотр фото
    $('.open-viewPhoto').on("click", function () {
        $('.overlay-viewPhoto').addClass('active');
    });
    $('.overlay-viewPhoto .closeBtn, .overlay-viewPhoto .close').on("click", function () {
        $('.overlay-viewPhoto').removeClass('active');
    });

    // просмотр video
    $('.open-viewVideo').on("click", function () {
        $('.overlay-viewVideo').addClass('active');
    });
    $('.overlay-viewVideo .closeBtn, .overlay-viewVideo .close').on("click", function () {
        $('.overlay-viewVideo').removeClass('active');
        $(".video-js")[0].player.pause();
    });




    (function ($) {
        $(document).on("load", function () {
            $(".photoDescr__popup").mCustomScrollbar({
                autoDraggerLength: true,
            });
        });
    })(jQuery);
});