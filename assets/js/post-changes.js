$(document).ready(function () {


    $('.likeBtn').on('click', function () {
        $(this).toggleClass('color');
    });
    $('.commentBtn').on('click', function () {
        $(this).toggleClass('color');
        $(this).parents('.postItem').toggleClass('show-form').find('.comment').toggleClass('active')
        $(this).parents('.postItem').find('.show-comments').toggleClass('active');
    });

    $('.shareBtn').on('click', function () {
        $(this).toggleClass('color');
    });

    //Попап поделиться 
    $('.shareBtn').on("click", function () {
        $('.share_popup-overlay').addClass('active');
        $(document).mouseup(function (e) {
            $('.write-file').on('click', function () {
                $(this).find('.dropdown-list').toggleClass('active');
            });
            var item = $('.dropdown-list.active');
            if (!item.is(e.target) && item.has(e.target).length === 0) {
                item.removeClass('active');
            }
        });

        //Выбор отправителя
        $('.recipient').on("click", function () {
            $(this).find('.content').toggleClass('active');
            $(".recipient").find('.checkbox-item').click(function (event) {
                event.stopPropagation();
            });
        })

        //Добавление кнопки с именем пользователя
        $('.add-name').on("click", function () {
            $('.name').addClass('active');
            $('.remove').on("click", function () {
                $('.name').removeClass('active');
            })
        })

        //если выбран другой чек отключить поле выбора пользователя
        $(function () {
            $('#message').on('change', function () {
                if ($('#message').prop('checked')) {
                    $('#dropdown').css('display', 'block');
                } else {
                    $('#dropdown').css('display', 'none');
                    $('.content').removeClass('active');
                }
            });
        });


    });
    $('.share_popup .closeBtn, .share_popup-overlay .close').on("click", function () {
        $('.share_popup-overlay').removeClass('active');
    });

    $('.button-send').on("click", function () {
        $('.overlayPopupThanks').addClass('active');
        $('.share_popup-overlay').removeClass('active');
    });
    $('.popup-thanks .closeBtn, .overlayPopupThanks .close').on("click", function () {
        $('.overlayPopupThanks').removeClass('active');
    });

    //Конец

    // Комментарии

    $('.writeComment').on('click', function () {
        $('.comment').removeClass('active');

        var otherInput = $(this).closest('.postItem_content').find('.messages-item');
        $(otherInput).css('display', 'block');
    });

    $('.addcomment').on('click', function () {
        $(this).parents('.messages-item').find('.comment2').addClass('active');
    })


    //изменение поста
    $('.edit').on('click', function () {
        var parent = $(this).closest('.postItem');
        parent.find('.editBtn').css('display', 'inline');
        parent.find('.saveBtn').css('display', 'inline-block');
        parent.find('.close').css('display', 'flex');
        parent.find('.editing').css('display', 'flex');
    });

    $(".editBtn").on('click', function () {
        var parent = $(this).closest('.postItem');
        var height = parent.find('.text').height(); //узнаем высоту блока с текстом
        $(this).hide(); //скрываем кнопку редактировать
        var divHtml = parent.find('.text').html(); //выбираем содержимое текстового блока
        var editableText = $("<textarea class='textarea-change' />");
        $(editableText).css('height', height + 60); //устанавливаем высоту textarea
        editableText.val(divHtml); //записываем содержимое текстового блока в textarea
        parent.find('.text').replaceWith(editableText); //заменяем текстовый блок textarea
        editableText.focus();
    });
    $('.saveBtn').on('click', function () {
        var parent = $(this).closest('.postItem');
        $(this).hide();
        parent.find('.editBtn').css('display', 'none');
        parent.find('.close').css('display', 'none');
        parent.find('.editing').css('display', 'none');
        var html = parent.find('.textarea-change').val();
        var viewableText = $("<div class='text'>");
        viewableText.html(html); //записываем содержимое textarea в текстовый блок
        parent.find('.textarea-change').replaceWith(viewableText); //заменяем textarea текстовым блоком
    });

    //Определяем количество блоков для отображения сетки картинок


    var gallery = $('.postItem_content-gallery').has('.gallery__image')
    $(gallery).each(function (i) {
        if (this.children.length == 1) {
            $(this).addClass('single')
        }
        if (this.children.length == 2) {
            $(this).addClass('two-column')
        }
        if (this.children.length == 3) {
            $(this).addClass('three-column')
        }
        if (this.children.length == 4) {
            $(this).addClass('four-column')
        }
        if (this.children.length == 5) {
            $(this).addClass('five-column')
        }
        if (this.children.length == 6) {
            $(this).addClass('six-column')
        }
        if (this.children.length == 7) {
            $(this).addClass('seven-column')
        }
        if (this.children.length == 8) {
            $(this).addClass('eight-column')
        }
        if (this.children.length == 9) {
            $(this).addClass('nine-column')
        }
        if (this.children.length == 10) {
            $(this).addClass('ten-column')
        }
    })
});