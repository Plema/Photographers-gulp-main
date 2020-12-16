$(document).ready(function () {

    //Слайдер документов
    $('.projectsCard__documents-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        responsive: [{
                breakpoint: 1360,
                settings: {
                    slidesToShow: 5,
                    infinite: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                }
            },
            {
                breakpoint: 768,
                infinite: false,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                infinite: false,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Комментарии

    $('.writeComment').on('click', function () {
        $('.comment').removeClass('active');

        var otherInput = $(this).closest('.postItem').find('.messages-item');
        $(otherInput).css('display', 'block');

    });

    //Актив при клике на кнопку like
    $('.likeBtn').on('click', function () {
        $(this).toggleClass('active');
    });

    jcf.replaceAll();

    $('select').change(function () {
        if ($("option[value='other']")) {
            $('.form-textarea').css('opacity', '1');
        } else {
            $('.form-textarea').css('opacity', '0');
        }
    });

    //Попап

    $('.reject').on("click", function () {
        $('.overlay-reject').addClass('active');
    });
    $('.overlayPopup .closeBtn, .overlayPopup .close, .cancel').on("click", function () {
        $('.overlayPopup').removeClass('active');
    });


});