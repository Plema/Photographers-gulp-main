$(document).ready(function () {
    // slider


    // просмотр фото
    $('.open-viewPhoto').on("click", function () {
        $('.overlay-viewPhoto').addClass('active');
        $.lockBody();
        $('.overlay-viewPhoto .image').slick({
            slidesToShow: 1,
            arrows: true,
            appendArrows: $('#holder-btn'),
            nextArrow: '<button class="nextArrow" id="prev01"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="prevArrow" id="next01"><i class="icon-icon28"></i></button>',
        });
    });
    $('.overlay-viewPhoto .closeBtn, .overlay-viewPhoto .close').on("click", function () {
        $('.overlay-viewPhoto').removeClass('active');
        $.unlockBody();
        $('.overlay-viewPhoto .image').slick('unslick');
    });

    $('.open-viewPhotoOne').on("click", function () {
        $('.overlay-viewPhotoOne').addClass('active');
        $.lockBody();
    });
    $('.overlay-viewPhotoOne .closeBtn, .overlay-viewPhotoOne .close').on("click", function () {
        $('.overlay-viewPhotoOne').removeClass('active');
        $.unlockBody();
    });

    //проверка на IOS Safari
    function iOSversion() {

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            $('.viewPhoto__popup').addClass('ios');
        }
    }
    iOSversion();



    //проверка на пустой инпут при добавлении комментария
    $(".viewPhoto__popup .addComment textarea").keyup(function () {
        if ($(this).val() != '') {
            $('.viewPhoto__popup .form__button button').removeClass('disable');
        } else {
            $('.viewPhoto__popup .form__button button').addClass('disable');
        }
    });

    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
        $wrap = $('body'),
        scrollTop;

    $.lockBody = function () {
        if (window.pageYOffset) {
            scrollTop = window.pageYOffset;

            $wrap.css({
                top: -(scrollTop)
            });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function () {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

    $(".editBtn").on('click', function () {
        var parent = $(this).closest('.comment');
        var height = parent.find('.text').height(); //узнаем высоту блока с текстом
        var divHtml = parent.find('.text').html(); //выбираем содержимое текстового блока
        var editableText = $("<textarea class='textarea-change' />");
        $(editableText).css('min-height', height); //устанавливаем высоту textarea
        editableText.val(divHtml); //записываем содержимое текстового блока в textarea
        parent.find('.text').replaceWith(editableText); //заменяем текстовый блок textarea
        editableText.focus();
    });

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".textarea-change");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                var html = $('.textarea-change').val();
                var viewableText = $("<div class='text'>");
                viewableText.html(html); //записываем содержимое textarea в текстовый блок
                $('.textarea-change').replaceWith(viewableText); //заменяем textarea текстовым блоком
            }
        });
    });

});