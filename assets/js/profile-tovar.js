$(document).ready(function () {


  $('.filter-slider2').slick({
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

  $('.js-item').on('click', function () {
    var dataTab = $(this).data('items');
    $('.js-item').removeClass('active');
    $('.js-content').removeClass('active');

    $(this).addClass('active');
    $('#content-' + dataTab).addClass('active');
  });

  $('.sett').on('click', function () {
    $(this).parent().parent().parent().parent().find('.open-sett').toggleClass('block')
  });

})