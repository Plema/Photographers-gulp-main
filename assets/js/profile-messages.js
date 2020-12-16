$(document).ready(function () {

    //показать поле поиска в сообщениях
    $(document).mouseup(function (e) {
        $('.show-search').on('click', function () {
            $(this).parent().addClass('show');
            $(this).parent().find('.search input').focus();
        });
        var item = $('.heading-top .form.show');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('show');
        }
    });

    //показать параметры 
    $(document).mouseup(function (e) {
        $('.options .openBtn').on('click', function () {
            $(this).parent().toggleClass('show');
        });
        var item = $('.options.show');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('show');
        }
    });

    $('.options a').on('click', function () {
        $('.options').removeClass('show');
    });

    // Резиновый textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    //попап удаления диалога
    $('.open-deleteDialogue').on("click", function () {
        $('.overlay-deleteDialogue').addClass('active');
    });
    $('.overlay-deleteDialogue .closeBtn, .overlay-deleteDialogue .close').on("click", function () {
        $('.overlay-deleteDialogue').removeClass('active');
    });

    $('.open-successfulDel').on("click", function () {
        $('.overlay-successfulDel').addClass('active');
    });
    $('.overlay-successfulDel .closeBtn, .overlay-successfulDel .close').on("click", function () {
        $('.overlay-successfulDel').removeClass('active');
    });

    //попап удаления сообщения
    $('.open-deleteMsg').on("click", function () {
        $('.overlay-deleteMsg').addClass('active');
    });

    $('.overlay-deleteMsg .closeBtn, .overlay-deleteMsg .close').on("click", function () {
        $('.overlay-deleteMsg').removeClass('active');
    });

    //создание беседы
    $('.creationChat_popup .closeBtn').on('click', function () {
        $(this).parent().removeClass('open');
    });

    $('.creationChat').on('click', function (ev) {
        $(".creationChat_popup").toggleClass('open');
        console.log('click');
        if (screen.width > 1024) {
            var x = ev.clientX;
            var y = ev.clientY;
            $(".creationChat_popup").css({
                "top": y + 20,
                // "right": 'inherit',
                "left": x - 396,
            });
        } else {
            var y = ev.clientY;
            $(".creationChat_popup").css({
                "top": y + 20,
            });
        }
    });

    //Выбрать файлы

    $(document).mouseup(function (e) {
        $('.paperclip').on('click', function () {
            $('.dropdown-list').toggleClass('active');
        });
        var item = $('.dropdown-list.active');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('active');
        }
    });


    //Tabs
    $('.filter-item').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.filter-item').removeClass('active');
        $('.tab-items').removeClass('active');
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //попап показать вложения
    $('.attachments-on').on('click', function () {
        $('.profile-attachments').addClass('active');
        $('.body').addClass('showing-modal');
    });
    $('.closeBtn, .close').on('click', function () {
        $('.profile-attachments').removeClass('active');
        $('.body').removeClass('showing-modal');
    });
    
    // Превью загружаемых файлов
    $(".file-add").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.btn-brows-foto').on('click', function () {
        $(this).parents('.files').find('input').trigger('click')
    })

    $('.add-citat').on("click", function () {
        $('.messages-item').addClass('with-citat');
        $('.all-vn-citat > .messages-item').removeClass('with-citat');
        $(this).parent().parent().parent().parent().parent().addClass('with-citat-active');
        $('.delete').removeClass('with-citat');
        $('.remove-citat').css('display','block')
        $('.li-add-citat').css('display','none')
        $('.text-file').addClass('open-text-file')
    });
  
  
    $('.messages-item').on("click", function () {
        $(this).toggleClass('with-citat-active');
    });
  
    $('.stop-citat').on("click", function () {
        $('.messages-item').removeClass('with-citat');
        $('.messages-item').removeClass('with-citat-active');
        $('.remove-citat').css('display','none')
        $('.li-add-citat').css('display','block')
        $('.text-file').removeClass('open-text-file')
    });
});