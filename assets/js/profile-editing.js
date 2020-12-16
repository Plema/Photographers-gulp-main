$(document).ready(function () {

    jcf.replaceAll();

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