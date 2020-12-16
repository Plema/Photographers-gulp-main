$(document).ready(function () {

    jcf.replaceAll();

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [575, 7000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0]);
            $("#amount2").val(ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount2").val($("#slider-range").slider("values", 1));


    //gallery slider
    function AddSlider() {
        $('.performer__gallery-slider').slick({
            infinite: false,
            slidesToShow: 3,
            adaptiveHeight: true,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        });
    }
    AddSlider();


    //Открытие внутреннего меню
    $('#leftToggle-menu').on('click', function () {
        $('.organizations_page-menu').toggleClass('open');
    });

    //js для сайдбара с фильтрами
    $('.openBtn').on('click', function () {
        $(this).parent().addClass('active');
    });
    $('.open-close').on('click', function () {
        $(this).parent().removeClass('active');
    });

    //Отурытие/Закрытие категории фильтра при клике
    $('.drop-item_heading').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    //autocomplete
    $(function () {
        var setInfo = [
            "Анапа",
            "Ангарск",
            "Анжеро-Судженск",
            "Апатиты",
            "Арзамас",
            "Балаково",
            "Балахна",
            "Балашиха",
            "Владивосток",
            "Владикавказ",
            "Владимир",
            "Кемерово",
            "Керчь",
            "Кинешма",
            "Краснодар",
            "Краснокаменск",
            "Краснокамск",
            "Москва",
            "Мурманск",
            "Муром",
            "Сальск",
            "Самара",
            "Санкт-Петербург",
            "Саранск"
        ];

        $("#setCountry").autocomplete({
            source: setInfo
        });

        $("#setCity").autocomplete({
            source: setInfo
        });
    });

});
