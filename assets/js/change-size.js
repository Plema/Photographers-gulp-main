$(document).ready(function () {

  var imgWidth = $('.gallery__img').width();
  $('.gallery__img').css({
    'height' : imgWidth
  });
  
});

$(window).resize(function () {

  var imgWidth = $('.gallery__img').width();
  $('.gallery__img').css({
    'height' : imgWidth
  });
  
});




