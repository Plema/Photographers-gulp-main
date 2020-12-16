$(document).ready(function () {

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
  //Tabs
  $('.tabs-items').on('click', function () {
    var dataTab = $(this).data('tab');
    $('.tabs-items').removeClass('active');
    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('#' + dataTab).addClass('active');
    $('.' + dataTab).addClass('active');
  });

  //попапы выбора исполнителя
  $('.open-prjPopup').on("click", function () {
    $('.overlay-prjPopup').addClass('active');
  });
  $('.overlay-prjPopup .closeBtn, .overlay-prjPopup .close').on("click", function () {
    $('.overlay-prjPopup').removeClass('active');
  });

  $('.open-prjPopup2').on("click", function () {
    $('.overlay-prjPopup2').addClass('active');
  });
  $('.overlay-prjPopup2 .closeBtn, .overlay-prjPopup2 .close').on("click", function () {
    $('.overlay-prjPopup2').removeClass('active');
  });

});
