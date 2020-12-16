$(document).ready(function () {

    jcf.replaceAll();

    $('.companies-nav').slick({
        responsive: [{
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                    prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
                }
            },
        ]
    });


    //Tabs
    $('.filter-items').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //добавить опции
    $('.add-options').on('click', function () {
        $(this).closest('.projects-item').find('.create-promotion').show();
    })
    $('.existing-promotion .extend-option, .adding-options').on('click', function () {
        $(this).closest('.projects-item').find('.existing-promotion').hide();
        $(this).closest('.projects-item').find('.create-promotion').show();
    })

    //продлить опцию
    $('.create-promotion .extend-option').on('click', function () {
        $(this).closest('.item').find('.hidden-blk').show();
    });

    //hover on mobile
    $('.create-promotion .item .title .tooltip').on('click', function () {
        $(this).parent().find('.tooltip-text').toggle();
        $(this).toggleClass('close');
    });
    var customSelect = $('.select select');

    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,

    });

    jcf.replace(customSelect);

    (function ($) {
        $(document).on("load", function () {
            $(".mainInfo").mCustomScrollbar();
        });
    })(jQuery);
})