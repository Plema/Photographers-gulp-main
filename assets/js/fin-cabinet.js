$(document).ready(function () {

  //likeBtn
  $('.likeBtn').on('click', function () {
    $(this).toggleClass('active');
  });
  
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

  $('.filter-slider').slick({
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

    function AddSlider() {
      $('.performer__gallery-slider').slick({
          infinite: false,
          slidesToShow: 3,
          // adaptiveHeight: true,
          nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
          prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
      });
    }
    AddSlider();

  $('.js-item').on('click', function () {
    var dataTab = $(this).data('items');
    $('.js-item').removeClass('active');
    $('.js-content').removeClass('active');
    

    $(this).addClass('active');
    $('#content-' + dataTab).addClass('active');
    $('.projectsCard__documents-slider').get(0).slick.setPosition();
    $('.performer__gallery-slider').each(function(){
      $(this).get(0).slick.setPosition();    
    });
  });

  $('.description > h5').on('click', function () {
    $(this).parent().toggleClass('open-descriptiion')
  });

  $('.open-priceServ').on('click', function () {
    $(this).parent().find('.hiddenP').toggleClass('showp')
  });

  function windowSize(){
    if ($(window).width() >= '1024'){
        $('.description').addClass(' open-descriptiion')
        $('.hiddenP').removeClass('showp')
    } 
  }
  $(window).on('load resize',windowSize);

  $('.switch-btn').click(function(){

    $('.one-param > .switch-btn').removeClass('switch-on');

    $(this).toggleClass('switch-on');

    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
  });

  $('.delete-card').on('click', function () {
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.delete-card-p').addClass('open-popfiin')
  });

  $('.send-col').on('click', function () {
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.send-check-pop').addClass('open-popfiin')
  });

  $('.open-yes-pop').on('click', function (event) {
    event.preventDefault()
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.send-check-pop').removeClass('open-popfiin')
    $('.yes-pop').addClass('open-popfiin')
  });

  $('.close').on('click', function (event) {
    event.preventDefault()

    $('html').css('overflow','auto')
    $('.background-pop').removeClass('open-backg')
    $('.pop-up').removeClass('open-popfiin')
  });

  
  var customSelect45 = $('.price-Serv1');
  var customSelect46 = $('.price-Serv2');
  var customSelect47 = $('.price-Serv6');
  var customSelect48 = $('.price-Serv3');
  var customSelect49 = $('.price-Serv4');
  var customSelect50 = $('.price-Serv5');
  var customSelect51 = $('.price-Serv7');
  var customSelect52 = $('.price-Serv10');
  var customSelect53 = $('.price-Serv9');
  var customSelect54 = $('.price-Serv11');
  var customSelect55 = $('.price-Serv12');
  var customSelect56 = $('.price-Serv13');
  var customSelect57 = $('.price-Serv14');
  var customSelect58 = $('.price-Serv15');
  var customSelect59 = $('.price-Serv8');

  jcf.setOptions('customSelect45', {
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
    maxVisibleItems: 4
  });

  jcf.replace(customSelect45);
  jcf.replace(customSelect46);
  jcf.replace(customSelect47);
  jcf.replace(customSelect48);
  jcf.replace(customSelect49);
  jcf.replace(customSelect50);
  jcf.replace(customSelect51);
  jcf.replace(customSelect45);
  jcf.replace(customSelect52);
  jcf.replace(customSelect53);
  jcf.replace(customSelect54);
  jcf.replace(customSelect55);
  jcf.replace(customSelect56);
  jcf.replace(customSelect57);
  jcf.replace(customSelect59);
  jcf.replace(customSelect58);

})