$(document).ready(function () {

    //ответить на отзыв
    $('.replyReview').on('click', function () {
        $(this).parent().next('.comment').addClass('active');
    });

    //Поп-ап avatar-menu

    $('.avatar-button').click(function () {
        $('.avatar-button').find('.dot').removeClass('dot-active');
        $('.avatar-button').find('.avatar-popup').removeClass('show');
        $('.avatar-button').find('.avatar-popup').addClass('hide');
        $(this).find('.dot').addClass('dot-active');
        $(this).find('.avatar-popup').addClass('show');
        $(this).find('.avatar-popup').removeClass('hide');
    });



    $(document).mouseup(function (e) {
        var btn = $('.avatar-button');
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            $('.avatar-button .dot').removeClass('dot-active');
            $('.avatar-button').find('.avatar-popup').removeClass('show');
            $('.avatar-button').find('.avatar-popup').addClass('hide');
        }
    })
    /* $('.avatar-button').click(function() {
        $(this).siblings(".avatar-popup").toggle();
    });
 */
});