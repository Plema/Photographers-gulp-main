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

    // добавление описания фото
    $('.open-photoDescr').on("click", function () {
        $('.overlay-photoDescr').addClass('active');
    });
    $('.overlay-photoDescr .closeBtn, .overlay-photoDescr .close').on("click", function () {
        $('.overlay-photoDescr').removeClass('active');
    });

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

    //hover on mobile
    $('.create-promotion .item .title .tooltip').on('click', function () {
        $(this).parent().find('.tooltip-text').toggle();
        $(this).toggleClass('close');
    });

    $('.item-file .close').on('click', function () {
        $(this).parent().css('display', 'none');
    });

    $('#datepicker').on("click", function () {
        $('#calendar').toggleClass('active');
        $('a.ui-state-default').on("click", function () {
            $('#calendar').removeClass('active');
            console.log(this)
        });
        $(function () {
            $('#calendar').datepicker({
                altField: '#datepicker',
                altFormat: 'yy-mm-dd',
                inline: true,
                firstDay: 1,
                showOtherMonths: true,
            });
        });
    });

    $(function () {
        $('#calendar').datepicker({
            altField: '#datepicker',
            altFormat: 'yy-mm-dd',
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
        });
    });

    $('.title .form-select').on("click", function () {
        $(this).addClass('active');
    })

});