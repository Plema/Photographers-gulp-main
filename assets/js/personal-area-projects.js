$(document).ready(function () {

    jcf.replaceAll();

    //Tabs
    $('.filter-items').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //show/hide contacts
    $('.switch').on('click', function () {
        $('.hiddenInfo').toggle();
        $(this).toggleClass('active');
    });

});