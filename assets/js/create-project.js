$(document).ready(function(){
    
    jcf.replaceAll();

    $("#file-1").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });
   
    $('.add-image#files2, .add-video#files3, .add-files#files4').on('click', function(){
        $('#file-1').trigger('click');
    })

    // Count of symbols
    $('.textarea-description').keyup( function () {
        $('.counter').text(this.value.replace(/{.*}/g, '').length);
    });

    //Remove added photo and textarea
    $('.item-file .close').on('click', function () {
        $(this).parents(".item-file").css('display', 'none');
    });

    //hover on mobile
    $('.create-promotion .item .title .tooltip').on('click', function(){
        $(this).parent().find('.tooltip-text').toggle();
        $(this).toggleClass('close');
    });

    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {
            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
        }
    });

    //modal
    function openModal () {
        $('.explain-text').addClass('show');
        $('.explain-text').removeClass('hide');
    }
    $('.explain-img').on('click', openModal);

    function closeModal () {
        $('.explain-text').addClass('hide');
        $('.explain-text').removeClass('show');
    }
    $('.explain-close').on('click', closeModal);
});