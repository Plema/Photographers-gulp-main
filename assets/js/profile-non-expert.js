function windowSize1(){
    var imgWidth = $('.profile .gallery .gallery__img').width();
      $('.profile .gallery .gallery__img').css({
        'height' : imgWidth
    });
}
function windowSize2(){
    var imgWidth = $('.profile-albums .album__img').width();
      $('.profile-albums .album__img').css({
        'height' : imgWidth
    });
}
$(window).on('load', windowSize1);
$(window).on('resize', windowSize1);
$(window).on('load', windowSize2);
$(window).on('resize', windowSize2);

$(document).ready(function () {

    jcf.replaceAll();

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

    // gallery slider
    // $('.gallery').slick({
    //     responsive: [{
    //             breakpoint: 99999,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 dots: false,
    //                 slidesPerRow: 3,
    //                 rows: 6,
    //                 nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
    //                 prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
    //             }
    //         },
    //         {
    //             breakpoint: 478,
    //             settings: {
    //                 dots: false,
    //                 slidesPerRow: 3,
    //                 rows: 6,
    //                 infinite: false,
    //                 nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
    //                 prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
    //             }
    //         }
    //     ]
    // });
});