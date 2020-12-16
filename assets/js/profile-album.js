$(document).ready(function () {


  function windowSize(){
    if ($(window).width() < '1024'){
      var imgWidth = $('.gallery__img').width();
      $('.gallery__img').css({
        'height' : imgWidth
      });
    } else if ($(window).width() >= '768'){

    }
  }

    $(window).on('load resize',windowSize);

});

  






