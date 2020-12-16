$(document).ready(function () {
    $('.performer__gallery-slider').slick({
        infinite: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
    });
});