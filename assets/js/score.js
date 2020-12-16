$(document).ready(function () {

    jcf.replaceAll();

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [575, 7000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0]);
            $("#amount2").val(ui.values[1]);
        }
    });

    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount2").val($("#slider-range").slider("values", 1));

    if ($(window).width() >= 768) {

        $('.product-text h3').matchHeight({
            byRow: false
        });

        $('.product-height').matchHeight({
            byRow: false
        });

    }

    $('.similar-slider').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, ]
    });

    //js для сайдбара с фильтрами
    $('.openBtn').on('click', function () {
        $(this).parent().addClass('active');
    });
    $('.open-close').on('click', function () {
        $(this).parent().removeClass('active');
    });

    //Отурытие/Закрытие категории фильтра при клике
    $('.drop-item_heading').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    //По клику перекрашивает серце
    $('.heart').on('click', function () {
        $(this).find('.icon-icon3').toggleClass('color');
    });

});
