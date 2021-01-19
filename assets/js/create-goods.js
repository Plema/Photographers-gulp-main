$(document).ready(function () {
    jcf.replaceAll();

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
    });

    //hover on mobile
    $('.create-promotion .item .title .tooltip').on('click', function () {
        $(this).parent().find('.tooltip-text').toggle();
        $(this).toggleClass('close');
    });

    //Remove added photo and textarea
    $('.item-file .close').on('click', function () {
        $(this).parents(".item-file").css('display', 'none');
    });

    // switcher
    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {
            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
        }
    });

    //modal
    function openModal () {
        $('.explain-text').addClass('show');
        $('.explain-text').removeClass('hide');
    }
    $('.explain-img').on('click', openModal);

    function closeModal () {
        $('.explain-text').addClass('hide');
        $('.explain-text').removeClass('show');
    }
    $('.explain-close').on('click', closeModal);

    //Попапы

    $('.remove').on("click", function () {
        $('.overlay-remove').addClass('active');
    });
    $('.overlayPopup .closeBtn, .overlayPopup .close, .cancel').on("click", function () {
        $('.overlayPopup').removeClass('active');
    });

    $('.overlay-remove .remove').on("click", function () {
        $('.overlay-deleted').addClass('active');
        $('.overlay-remove').removeClass('active');
    });

    // Count of symbols
    $('.form-textarea').click(function () {
        $('.form-textarea').find('span').removeClass('counter');
        $(this).find('span').addClass('counter');
    });

    $('.main-description').keyup( function () {
        var symbolsCount = $(this).val().length;
        $('.counter').text(symbolsCount);
    });

});