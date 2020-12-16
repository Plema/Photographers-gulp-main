$(document).ready(function () {

    $('.seo-links .title').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.text-overflow').readmore({
        moreLink: '<a href="javascript:void(0);" class="more">Подробнее</a>',
        lessLink: false,
        speed: 500,
        collapsedHeight: 140,
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

    jcf.replaceAll();

    if (navigator.userAgent.match(/iPhone/i)) {
        $('.upcoming-events').addClass('mobile');
        $('.filter').addClass('mobile');
        $('.search').addClass('mobile');
    }

    if (navigator.userAgent.match(/Android/i)) {
        $('.upcoming-events').addClass('mobile');
        $('.filter').addClass('mobile');
        $('.search').addClass('mobile');
    }

    var $frame = $('.sliderP');
    var $wrap = $frame.parent();

    var projects = {
        obj: {},
        el: '.sliderP',
        options: {
            horizontal: 1,
            itemNav: 'basic',
            activateOn: 'center',
            activateMiddle: 1,
            elasticBounds: 1,
            touchDragging: 1,
            startAt: 0,
            mouseDragging: 1,
            cycleBy: 1,
            cycleInterval: 1000,
            speed: 500,
            pauseOnHover: true,
            startPaused: true,
            scrollBar: $('.scrollbar'),
            dragHandle: true,
            clickBar: true,
            smart: 1,
            activateOn: 'click',
            prevPage: $wrap.find('.projects-prev'),
            nextPage: $wrap.find('.projects-next')
        },
    };

    projects.obj = new Sly($(projects.el), projects.options);
    projects.obj.init();

    $('.seo-text a').on('click', function () {
        $('.seo-text-content').toggleClass('active');
    });

    $('.filter-slider').slick({
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
                slidesToShow: 2,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, ]
    });

    $('.filter-items').on('click', function () {
        var dataFoto = $(this).data('foto');
        $('.filter-items').removeClass('active');
        $('.foto-item').removeClass('active');
        $(this).addClass('active');
        $('.' + dataFoto).addClass('active');
    });

    var headerHeight = $('header').height();

    if ($(window).width() >= 768) {
        $('.banner').height($(window).height() - headerHeight);
    }

});

$(window).resize(function () {

    var headerHeight = $('header').height();

    if ($(window).width() >= 768) {
        $('.banner').height($(window).height() - headerHeight);
    }

});
