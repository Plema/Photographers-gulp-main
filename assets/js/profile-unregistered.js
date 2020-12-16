$(document).ready(function () {

    jcf.replaceAll();
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
                slidesToShow: 3,
                adaptiveHeight: true,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, ]
    });

    //Tabs
    $('.filter-items').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.profile__tab-item').removeClass('active');

        $(this).addClass('active');
        $('#' + dataTab).addClass('active');
        $('.' + dataTab).addClass('active');

        if (dataTab === 'tab-item3') {
            $('.albums__tabs-item').removeClass('hide');
            $('.albums__tabs-content').removeClass('show');
        }
    });

    //Albums Tabs
    $('.albums__tabs-item').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.albums__tabs-item').addClass('hide');
        $('.' + dataTab).addClass('show');
    });

    //Актив при клике на кнопки like, сообщения и share
    $('.likeBtn, .commentBtn, .shareBtn').on('click', function () {
        $(this).toggleClass('active');
    });


    $(function () {
        var holder = $('.phone_number'),
            button = $('.show_number'),
            number = holder.text(),
            symbolsForHide = 5,
            show = function () {
                holder.text(number)
                button.removeClass('show')
            },
            hide = function () {
                holder.text(number.replace(new RegExp('(.+).{' + symbolsForHide + '}$'), "$1" + ' ' + 'XX XX' + ' '.repeat(symbolsForHide)))
                button.addClass('show')
            }
        button.click(function () {
            if ($(this).hasClass('show')) show()
            else hide()
        })
        hide()
    })


});