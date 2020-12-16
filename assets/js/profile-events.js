$(document).ready(function () {
    //Tabs
    $('.filter-items').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //Попапы

    $('.add_event').on("click", function () {
        $('.overlay-createEvent').addClass('active');
    });
    $('.cancel').on("click", function () {
        $('overlay-createEvent').removeClass('active');
    });
    $('.overlayPopup .closeBtn, .overlayPopup .close, .cancel').on("click", function () {
        $(this).parents('.overlayPopup').removeClass('active');
    });
    $('.add_address').on("click", function () {
        $('.overlay-address').addClass('active');
    });
    $('.confirm').on("click", function () {
        $('.overlay-payment').addClass('active');
        $('overlay-createEvent').removeClass('active');
    });
});