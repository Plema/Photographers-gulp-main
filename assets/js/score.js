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

    //Слайдер для карточек 
    $('.product-item-slider').slick({
        arrow: true,
        infinite: true,
        dots: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    swipe: false,
                    speed: 150,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    swipe: true
                }
            }
        ]
    });

    $('.slick-dots li').on('mouseover', function() {
        $(this).parents('.product-item-slider').slick('goTo', $(this).index());
    });

    $('.product-item').on('mouseenter', function(){
        var href = $(this).find('.product-item-btn-desktop a').attr('href');

        $('.link-item').remove();
        $('.slick-dots li').append("<a href='' class='link-item'></a>");
        $('.link-item').attr('href', href);

        $('.photo-item').attr('href', href);

        $(this).find('.slick-dots li:nth-child(4)').on('mouseover', function() {
            $(this).addClass('last-item');
            $('.slider-item').find('.photo-info').remove();
            $(this).parents('.product-item-slider').find('.slick-current .slider-item').append('<div class="photo-info"><p>Ещё <br><span>2</span> фото</p></div>');
        });
        $(this).find('.slick-dots li:nth-child(4)').on('mouseleave', function() {
            $('.slick-dots li:nth-child(4)').removeClass('last-item');
            $('.photo-info').remove();
        });
    });
    

    // $('.slick-dots li').on('mouseleave', function() {
    //     $('.slick-dots li').removeClass('slick-active');
    //     $('.slick-dots li:first-child').addClass('slick-active');
    //     $('.product-item-slider').slick('slickGoTo', 0);
    // });

    //Cut string
    $(".product-item-text p").text(function(i, text) {
        if($(window).width() < 1000){

            if (text.length >= 70) {
                text = text.substring(0, 70);
                var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);

        }else if($(window).width() > 1000){

            if (text.length >= 200) {
                text = text.substring(0, 200);
                var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);

        }
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

    //выпадашка для settings
    $('.settings').on('click', function(e){
        $('.settings-inner').toggle();
        $('.dot').addClass('active-dot');

        if($('.settings-inner').css('display') == 'none'){
            $('.dot').removeClass('active-dot');
        }
    });
    $('body').on('click', function(e){
        if (!$('.settings').is(e.target) && $('.settings').has(e.target).length === 0){
            $('.settings-inner').css({'display': 'none'});
            $('.dot').removeClass('active-dot');
        }
    });


});
