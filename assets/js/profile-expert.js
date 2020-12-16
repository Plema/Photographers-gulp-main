$(document).ready(function () {

    jcf.replaceAll();

    // Резиновый textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    //textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    //adding photos slider
    $('.addingPhotos__slider').slick({
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
    });

    //open "adding photo"
    $('.profile__addingPost textarea').focus(function () {
        $('.profile__adding-photos').addClass('open');
    });


    //Попап поделиться 
    $('.shareBtn').on("click", function () {
        $('.share_popup-overlay').addClass('active');
        $(document).mouseup(function (e) {
            $('.write-file').on('click', function () {
                $(this).find('.dropdown-list').toggleClass('active');
            });
            var item = $('.dropdown-list.active');
            if (!item.is(e.target) && item.has(e.target).length === 0) {
                item.removeClass('active');
            }
        });

        //Выбор отправителя
        $('.recipient').on("click", function () {
            $(this).find('.content').toggleClass('active');
            $(".recipient").find('.checkbox-item').click(function (event) {
                event.stopPropagation();
            });
        })

        //Добавление кнопки с именем пользователя
        $('.add-name').on("click", function () {
            $('.name').addClass('active');
            $('.remove').on("click", function () {
                $('.name').removeClass('active');
            })
        })

        //если выбран другой чек отключить поле выбора пользователя
        $(function () {
            $('#message').on('change', function () {
                if ($('#message').prop('checked')) {
                    $('#dropdown').css('display', 'block');
                } else {
                    $('#dropdown').css('display', 'none');
                    $('.content').removeClass('active');
                }
            });
        });


    });
    $('.share_popup .closeBtn, .share_popup-overlay .close').on("click", function () {
        $('.share_popup-overlay').removeClass('active');
    });

    $('.button-send').on("click", function () {
        $('.overlayPopupThanks').addClass('active');
        $('.share_popup-overlay').removeClass('active');
    });
    $('.popup-thanks .closeBtn, .overlayPopupThanks .close').on("click", function () {
        $('.overlayPopupThanks').removeClass('active');
    });

    //Конец


    $(document).mouseup(function (e) {
        $('.paperclip').on('click', function () {
            $('.dropdown-list').toggleClass('active');
        });
        var item = $('.dropdown-list.active');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('active');
        }
    });

    //попап подгрузки медиа из галереи
    $('.open-uploadPopup').on("click", function () {
        $('.overlay-uploadPopup').addClass('active');
        uploadPopup();
    });
    $('.overlay-uploadPopup .closeBtn, .overlay-uploadPopup .close').on("click", function () {
        $('.overlay-uploadPopup').removeClass('active');
    });


    //слайдеры в загрузке медиа с галереи
    function uploadPopup() {
        $('.albums-slider').slick({
            infinite: false,
            slidesToShow: 3,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
                }
            }, ]
        });
        $('.videoPopup-slider').slick({
            infinite: false,
            slidesToShow: 3,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
                }
            }, ]
        });

    }

    //выбор фото/видео в попапе подгрузки с гелереи
    $('.images-wrap .item').on('click', function () {
        $(this).toggleClass('selected');
    });
    $('.videoPopup-slider').on('click touch', function () {
        $(event.target).toggleClass('selected');
    });


});
