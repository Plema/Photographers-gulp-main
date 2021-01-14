$(document).ready(function () {

    //ответить на отзыв
    $('.replyReview').on('click', function () {
        $(this).parent().next('.comment').addClass('active');
    });

    //Поп-ап avatar-menu

    $('.avatar-button').click(function() {
        $(this).siblings(".avatar-popup").toggle();
    });

});