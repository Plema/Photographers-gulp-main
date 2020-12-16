$(document).ready(function () {

    //ответить на отзыв
    $('.replyReview').on('click', function () {
        $(this).parent().next('.comment').addClass('active');
    });


});