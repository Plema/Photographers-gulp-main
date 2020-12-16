$(document).ready(function () {

  $('.open-recovery-step1').on('click', function (event) {
    event.preventDefault();
    $('body').css('overflow','hidden');
    $('.back-dark').addClass('open-dark');
    $('.pop-rec-step1').addClass('open-pop');
    $('html').css('overflow-y','hidden')
  });

  $('.open-step2').on('click', function (event) {
    event.preventDefault();
    $('body').css('overflow','hidden');
    $('.back-dark').addClass('open-dark');
    $('.pop-rec-step1').removeClass('open-pop');
    $('.pop-rec-step2').addClass('open-pop');
    $('html').css('overflow-y','hidden')
  });

  $('.open-step3').on('click', function (event) {
    event.preventDefault();
    $('body').css('overflow','hidden');
    $('.back-dark').addClass('open-dark');
    $('.pop-rec-step1').removeClass('open-pop');
    $('.pop-rec-step2').removeClass('open-pop');
    $('.pop-rec-step3').addClass('open-pop');
    $('html').css('overflow-y','hidden')
  });

  $('.open-step4').on('click', function (event) {
    event.preventDefault();
    $('body').css('overflow','hidden');
    $('.back-dark').addClass('open-dark');
    $('.pop-rec-step1').removeClass('open-pop');
    $('.pop-rec-step2').removeClass('open-pop');
    $('.pop-rec-step3').removeClass('open-pop');
    $('.pop-rec-step4').addClass('open-pop');
    $('html').css('overflow-y','hidden')
  });

  $('.close-pop').on('click', function () {
    $('body').css('overflow','auto')
    $('.back-dark').removeClass('open-dark');
    $('.pop-up-del').removeClass('open-pop');
    $('html').css('overflow-y','auto')

  });

  $('.close-pop2').on('click', function () {
    $('body').css('overflow','auto')
    $('.back-dark').removeClass('open-dark');
    $('.pop-up-del').removeClass('open-pop');
    $('html').css('overflow-y','auto')

  });

  $('.back-dark').on('click', function () {
    $('body').css('overflow','auto')
    $('.back-dark').removeClass('open-dark');
    $('.pop-up-del').removeClass('open-pop');
    $('html').css('overflow-y','auto')

  });

});
