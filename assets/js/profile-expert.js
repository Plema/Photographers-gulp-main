function windowSize1(){
    var imgWidth = $('.profile-expert .gallery__img').width();
      $('.profile-expert .gallery__img').css({
        'height' : imgWidth
    });
}
function windowSize2(){
    var imgWidth = $('.profile-albums .gallery__img').width();
      $('.profile-albums .gallery__img').css({
        'height' : imgWidth
    });
}
$(window).on('load', windowSize1);
$(window).on('resize', windowSize1);
$(window).on('load', windowSize2);
$(window).on('resize', windowSize2);

$(document).ready(function () {

    jcf.replaceAll();

    //Filter slider
    $('.filter-slider').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: false,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, {
            breakpoint: 768,
            settings: {
                infinite: false,
                slidesToShow: 2,
                adaptiveHeight: true,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, ]
    });



    $('.filter-items').on('click', function () {
		var dataTab = $(this).data('tab');
		$('.js-item').removeClass('active');
		$('.js-content').removeClass('active');
			

		$(this).addClass('active');
        $('#content-' + dataTab).addClass('active');

        windowSize1();
        windowSize2();

        
    });

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
