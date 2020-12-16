$(document).ready(function () {

    jcf.replaceAll();


    // Показать при ховере справку
    $('.show-reference').hover(
        function () {
            $(this).parent().addClass('show');
        },
        function () {
            $(this).parent().removeClass('show');
        }
    );
    //range slder
    var minValue = $("#range-value1").data('value');
    var maxValue = $("#range-value2").data('value');
    $("#slider-range").slider({
        range: true,
        min: minValue,
        max: maxValue,
        values: [minValue, maxValue],
        slide: function (event, ui) {
            $("#range-value1").val(ui.values[0]);
            $("#range-value2").val(ui.values[1]);
        }
    });
    $("#range-value1").val($("#slider-range").slider("values", 0));
    $("#range-value2").val($("#slider-range").slider("values", 1));

    //upload image 
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.imgSize').css('background-image', 'url(' + e.target.result + ')');
                $('#preview').hide();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#file").change(function () {
        readURL(this);
    });

});