$(document).ready(function () {
 //попапы добавления отзыва
 $('.open-leaveFeedback').on("click", function () {
    $('.overlay-leaveFeedback').addClass('active');
});
$('.overlay-leaveFeedback .closeBtn, .overlay-leaveFeedback .close').on("click", function () {
    $('.overlay-leaveFeedback').removeClass('active');
});
$('.open-leaveFeedbackNext').on("click", function () {
    $('.overlay-leaveFeedbackNext').addClass('active');
});
$('.overlay-leaveFeedbackNext .closeBtn, .overlay-leaveFeedbackNext .close').on("click", function () {
    $('.overlay-leaveFeedbackNext').removeClass('active');
});
$('.open-publishedPopup').on("click", function () {
    $('.overlay-publishedPopup').addClass('active');
});
$('.overlay-publishedPopup .closeBtn, .overlay-publishedPopup .close').on("click", function () {
    $('.overlay-publishedPopup').removeClass('active');
});

$('.list-smile .item').on('click', function () {
    $('.list-smile .item').removeClass('active');
    $(this).addClass('active');
});

//рейтинг в отзыве
$('.leaveFeedback__popup input[name=stars]').on('change', function () {
    if ($('input[name=stars]:checked').val() == 1) {
        console.log('1');
    }
    var a = Number($('input[name=stars]:checked').val());
    $('.rating-label span').hide();
    switch (a) {
        case 1:
            $('.rating-label span.value1').show();
            break;
        case 2:
            $('.rating-label span.value2').show();
            break;
        case 3:
            $('.rating-label span.value3').show();
            break;
        case 4:
            $('.rating-label span.value4').show();
            break;
        case 5:
            $('.rating-label span.value5').show();
            break;
    }
});

//ошибка, если нельзя оставить отзыв
$('.leaveFeedback-btn .disable').on('click', function () {
    $(this).parent().find('.error-msg').show();
});

})