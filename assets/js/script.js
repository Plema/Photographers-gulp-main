document.addEventListener("touchstart", function () {}, true);
$(document).ready(function () {

    //open mobile menu
    $('.open-menu').on('click', function () {
        $('#mobile-mainMenu').addClass('show');
    });
    $('#mobile-mainMenu .closeBtn').on('click', function () {
        $('#mobile-mainMenu').removeClass('show');
    });

    //open header popup
    $('.userName').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    $('.profile-menu .dropdown-list .dropdown-item').on('click', function () {
        $('.dropdown-item').removeClass('show');
        $(this).toggleClass('show');
    });

    $('.mobile-content .dropdown-list .dropdown-item').on('click', function () {
        $('.dropdown-item').removeClass('show');
        $(this).toggleClass('show');
    });


    //header search
    $('header form input').on('click', function () {
        $('#mobile-mainMenu').removeClass('show');
    });

    //full width search
    $('header form input').focus(function () {
        $(this).parent().addClass('full');
    });
    $('header form input').focusout(function () {
        $(this).parent().removeClass('full');
    });


    //close notifications
    $('.notification .closeBtn').on('click', function () {
        $(this).parent().removeClass('show');
    });

    //Cookies close
    $('.cookies-holder button').on('click', function () {
        $(this).parent().css('display', 'none');
    });

    //close/open header notifications
    $('.notifications_popup-open').on('click', function () {
        $(".notifications_popup").toggleClass('open');
    });
    $('.notifications_popup .closeBtn').on('click', function () {
        $(this).parent().removeClass('open');
    });

    $('.notifications_popup-open').on('click', function (ev) {
        if (screen.width > 1023) {
            var x = ev.clientX;
            $(".notifications_popup").css('left', x - 177);
        }
    });

    $('.add_address').on("click", function () {
        $('.overlay-address').addClass('active');
    });

    $('.add_company').on("click", function () {
        $('.overlay-createCompany').addClass('active');
    });

    $('.btn-contacts').on("click", function () {
        $('.overlay-contacts').addClass('active');
    });
   
    $('.overlayPopup .closeBtn, .overlayPopup .close, .cancel').on("click", function () {
        $(this).parents('.overlayPopup').removeClass('active');
    });

    $('.addPassword input').on("click", function () {
        $('.password').toggleClass('hide')
    })

});


