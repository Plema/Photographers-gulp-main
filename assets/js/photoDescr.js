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

    //100vh с учетом строк состояния в моб устройствах

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // добавление описания фото
    $('.open-photoDescr').on("click", function () {
        $('.overlay-photoDescr').addClass('active');
    });
    $('.overlay-photoDescr .closeBtn, .overlay-photoDescr .close').on("click", function () {
        $('.overlay-photoDescr').removeClass('active');
    });

    // добавление описания видео
    $('.open-videoDescr').on("click", function () {
        $('.overlay-videoDescr').addClass('active');
    });
    $('.overlay-videoDescr .closeBtn, .overlay-videoDescr .close').on("click", function () {
        $('.overlay-videoDescr').removeClass('active');
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

    $("#file-1").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $("#file-image").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.add-image#files2, .add-video#files3, .add-files#files4').on('click', function () {
        $('#file-1').trigger('click');
    })
});