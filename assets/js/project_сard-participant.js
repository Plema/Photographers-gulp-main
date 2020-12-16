$(document).ready(function () {
  $('.icon span').on('click', function () {
    $(this).toggleClass('active');
    if ($('.pen').hasClass('active')) {
      $(this).parents('.row-item').addClass('highlight')
    }
    else{
      $(this).parents('.row-item').removeClass('highlight')
    }
  });

  jcf.replaceAll();

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

  //likeBtn
  $('.likeBtn').on('click', function () {
    $(this).toggleClass('active');
  });

  //подтвердить/отклонить участие
  $('.refuse-btn').on('click', function () {
    $(this).parent().hide();
    if ($(window).width() >= 768) {
      $('.refuse-msg.desktop-blk').show();
    } else {
      $('.refuse-msg.mobile-blk').show();
    }

  })
  $('.confirm-btn').on('click', function () {
    $(this).parent().hide();
    if ($(window).width() >= 768) {
      $('.confirm-msg.desktop-blk').show();
    } else {
      $('.confirm-msg.mobile-blk').show();
    }
  })

  $('.offer-btn').on('click', function () {
    $('.projectsCard__offerService').show();
    $(window).scrollTop($('.projectsCard').height() - $('.projectsCard__offerService').height());
  });

  $("#file-1").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
  });

  $('.add-image#files2, .add-video#files3, .add-files#files4').on('click', function () {
    $('#file-1').trigger('click');
  });

  //изменение поста
  $('.editBlock').on('click', function () {
    $(this).closest('.row-item').find('.editBtn').css('display', 'inline');
    $(this).closest('.row-item').find('.saveBtn').css('display', 'inline-block');
    $(this).closest('.row-item').find('.removeDoc').css('display', 'block');
    $(this).closest('.row-item').find('.addingDocs').css('display', 'block');

  });

  $(".editBtn").on('click', function () {
    var height = $(this).closest('.row-item_content').find('.text').height(); //узнаем высоту блока с текстом
    $(this).hide(); //скрываем кнопку редактировать
    var divHtml = $(this).closest('.row-item_content').find('.text').html(); //выбираем содержимое текстового блока
    var editableText = $("<textarea />");
    $(editableText).css('height', height + 30); //устанавливаем высоту textarea
    editableText.val(divHtml); //записываем содержимое текстового блока в textarea
    $(this).closest('.row-item_content').find('.text').replaceWith(editableText); //заменяем текстовый блок textarea
    editableText.focus();
  });
  $('.saveBtn').on('click', function () {
    $(this).hide();
    $(this).closest('.row-item').find('.editBtn').css('display', 'none');
    $(this).closest('.row-item').find('.removeDoc').css('display', 'none');
    $(this).closest('.row-item').find('.addingDocs').css('display', 'none');
    var html = $(this).closest('.row-item').find('textarea').val();
    var viewableText = $("<div class='text'>");
    viewableText.html(html); //записываем содержимое textarea в текстовый блок
    $(this).closest('.row-item').find('textarea').replaceWith(viewableText); //заменяем textarea текстовым блоком
  });

  //upload files
  $("#file-1").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
  });
});
