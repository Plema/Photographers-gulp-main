$(window).resize(function () {
    if ($(window).width() < 560) {
        $('.text-hiden').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Развернуть <i class="icon-icon28"></i></a>',
            lessLink: ' <a href="javascript:void(0);" class="more">Cвернуть <i class="icon-icon28"></i></a>',
            speed: 500,
            collapsedHeight: 337,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }
    if ($(window).width() < 560) {
        $('.links-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Развернуть <i class="icon-icon28"></i></a>',
            lessLink: ' <a href="javascript:void(0);" class="more">Cвернуть <i class="icon-icon28"></i></a>',
            speed: 500,
            collapsedHeight: 144,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }
    if ($(window).width() < 768) {
        $('.text-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Развернуть <i class="icon-icon28"></i></a>',
            lessLink: ' <a href="javascript:void(0);" class="more">Cвернуть <i class="icon-icon28"></i></a>',
            speed: 500,
            collapsedHeight: 219,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }
})

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

    //tabs slider
    $('.filter-slider').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
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

    //gallery slider
    function AddSlider() {
        $('.performer__gallery-slider').slick({
            infinite: false,
            slidesToShow: 3,
            adaptiveHeight: true,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        });
    }
    AddSlider();

    //Открытие внутреннего меню
    $('#leftToggle-menu').on('click', function () {
        $('.specialists_page-menu').toggleClass('open');
        $('.media_page-menu').toggleClass('open');
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

    //autocomplete
    $(function () {
        var setInfo = [
            "Анапа",
            "Ангарск",
            "Анжеро-Судженск",
            "Апатиты",
            "Арзамас",
            "Балаково",
            "Балахна",
            "Балашиха",
            "Владивосток",
            "Владикавказ",
            "Владимир",
            "Кемерово",
            "Керчь",
            "Кинешма",
            "Краснодар",
            "Краснокаменск",
            "Краснокамск",
            "Москва",
            "Мурманск",
            "Муром",
            "Сальск",
            "Самара",
            "Санкт-Петербург",
            "Саранск"
        ];

        $("#setCountry").autocomplete({
            source: setInfo
        });

        $("#setCity").autocomplete({
            source: setInfo
        });
    });

    //Tabs
    $('.js-item').on('click', function () {
        var dataTab = $(this).data('items');
        $('.js-item').removeClass('active');
        $('.js-content').removeClass('active');

        $(this).addClass('active');
        $('#content-' + dataTab).addClass('active');

        $('.performer__gallery-slider').slick('unslick');
        AddSlider();
    });


    //Media

    if ($(window).width() < 768) {
        $('.text-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Развернуть <i class="icon-icon28"></i></a>',
            lessLink: ' <a href="javascript:void(0);" class="more">Cвернуть <i class="icon-icon28"></i></a>',
            speed: 500,
            collapsedHeight: 219,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }
    if ($(window).width() < 560) {
        $('.text-hiden').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Развернуть <i class="icon-icon28"></i></a>',
            lessLink: ' <a href="javascript:void(0);" class="more">Cвернуть <i class="icon-icon28"></i></a>',
            speed: 500,
            collapsedHeight: 337,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }
    if ($(window).width() < 560) {
        $('.links-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Развернуть <i class="icon-icon28"></i></a>',
            lessLink: ' <a href="javascript:void(0);" class="more">Cвернуть <i class="icon-icon28"></i></a>',
            speed: 500,
            collapsedHeight: 144,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }

});
