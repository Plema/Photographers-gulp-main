$(document).ready(function () {
    // slider


    // просмотр фото
    $('.open-viewPhoto').on("click", function () {
        $('.viewPhoto_popup').addClass('active');        
    });
    $('.viewPhoto_popup .closeBtn, .viewPhoto_popup .close').on("click", function () {
        $('.viewPhoto_popup').removeClass('active');
    });

    //100vh с учетом строк состояния в моб устройствах

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)


    //проверка на пустой инпут при добавлении комментария
    $(".viewPhoto_popup .addComment textarea").keyup(function () {
        if ($(this).val() != '') {
            $('.viewPhoto_popup .form__button button').removeClass('disable');
        } else {
            $('.viewPhoto_popup .form__button button').addClass('disable');
        }
    });

    $(".editBtn").on('click', function () {
        var parent = $(this).closest('.comment');
        var height = parent.find('.text').height(); //узнаем высоту блока с текстом
        var divHtml = parent.find('.text').html(); //выбираем содержимое текстового блока
        var editableText = $("<textarea class='textarea-change' />");
        $(editableText).css('min-height', height); //устанавливаем высоту textarea
        editableText.val(divHtml); //записываем содержимое текстового блока в textarea
        parent.find('.text').replaceWith(editableText); //заменяем текстовый блок textarea
        editableText.focus();
    });

    // jQuery(function ($) {
    //     $(document).mouseup(function (e) {
    //         var div = $(".textarea-change");
    //         if (!div.is(e.target) &&
    //             div.has(e.target).length === 0) {
    //             var html = $('.textarea-change').val();
    //             var viewableText = $("<div class='text'>");
    //             viewableText.html(html); //записываем содержимое textarea в текстовый блок
    //             $('.textarea-change').replaceWith(viewableText); //заменяем textarea текстовым блоком
    //         }
    //     });
    // });

    // показать все комментарии
    $('.show-all-comments').on("click", function(){
        $(this).parent().find('.comment').addClass('active');

        $(this).hide()
    })
    $('.show-all-subcomments').on("click", function(){
        $(this).parent().find('.subcomment').addClass('active');
        $(this).hide()
    })

});