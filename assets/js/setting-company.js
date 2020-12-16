$(document).ready(function () {

   jcf.replaceAll();

   //tabs slider
   $('.filter-slider').slick({
      mobileFirst: true,
      infinite: false,
      slidesToShow: 2,
      adaptiveHeight: true,
      variableWidth: true,
      nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
      responsive: [
         {
            breakpoint: 767,
            settings: "unslick"
         }
      ]
   });

   //Tabs
   $('.js-item').on('click', function () {
      var dataTab = $(this).data('items');
      $('.js-item').removeClass('active');
      $('.js-content').removeClass('active');

      $(this).addClass('active');
      $('#content-' + dataTab).addClass('active');

      // $('.performer__gallery-slider').slick('unslick');
      // AddSlider();
   });


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
         };
         reader.readAsDataURL(input.files[0]);
      }
   }

   $("#file").change(function () {
      readURL(this);
   });


   // сортировка
   function sortable(rootEl, onUpdate) {
      var dragEl, nextEl;

      // Делаем всех детей перетаскиваемыми
      [].slice.call(rootEl.children).forEach(function (itemEl) {
         itemEl.draggable = true;
      });

      // Фнукция отвечающая за сортировку
      function _onDragOver(evt) {
         evt.preventDefault();
         evt.dataTransfer.dropEffect = 'move';

         var target = evt.target;
         if (target && target !== dragEl && target.nodeName == 'LI') {
            // Сортируем
            var rect = target.getBoundingClientRect();
            var next = (evt.clientY - rect.top) / (rect.bottom - rect.top) > .5;
            rootEl.insertBefore(dragEl, next && target.nextSibling || target);
         }
      }

      // Окончание сортировки
      function _onDragEnd(evt) {
         evt.preventDefault();

         dragEl.classList.remove('ghost');
         rootEl.removeEventListener('dragover', _onDragOver, false);
         rootEl.removeEventListener('dragend', _onDragEnd, false);

         if (nextEl !== dragEl.nextSibling) {
            // Сообщаем об окончании сортировки
            onUpdate(dragEl);
         }
      }

      // Начало сортировки
      rootEl.addEventListener('dragstart', function (evt) {
         dragEl = evt.target; // Запоминаем элемент который будет перемещать
         nextEl = dragEl.nextSibling;

         // Ограничиваем тип перетаскивания
         evt.dataTransfer.effectAllowed = 'move';
         evt.dataTransfer.setData('Text', dragEl.textContent);

         // Пописываемся на события при dnd
         rootEl.addEventListener('dragover', _onDragOver, false);
         rootEl.addEventListener('dragend', _onDragEnd, false);

         setTimeout(function () {
            // Если выполнить данное действие без setTimeout, то
            // перетаскиваемый объект, будет иметь этот класс.
            dragEl.classList.add('ghost');
         }, 0)
      }, false);
   }

   // Используем
   sortable(document.getElementById('list'), function (item) {
      console.log(item);
   });


   var seconds = 5*60+1, h,m,s,t;
   function countDown() {
      if (seconds > 0) {
         seconds --;
         h = seconds/3600 ^ 0,
            m = (seconds-h*3600)/60 ^ 0,
            s = seconds-h*3600-m*60,
            time = (m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
         $(".control__timer span").text(time);
      }
      setTimeout(function() {
         countDown();
      }, 1000);
   }

   $('#start-timer').on('click', function () {
      countDown()
   });

   // $('#start-timer').on('click', function () {
   //    countDown()
   // })

  $(document).on("load", function () {
    $(".mainInfo").mCustomScrollbar();
  });

});

// модальные окна
document.addEventListener('DOMContentLoaded', function () {

   var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.close');
   modalWrapp = document.querySelector('.modal');



   modalButtons.forEach(function (item) {

      item.addEventListener('click', function (e) {

         e.preventDefault();

         var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');

         modalElem.classList.add('popup--opened');
         overlay.classList.add('modal__overlay--opened');
         modalWrapp.classList.add('modal--opened');
         document.querySelector('body').classList.add('hidden');
      });
   });

  // закрытие модального окна
  var btnBan = document.querySelectorAll('button[data-modal="block-user"]');

  btnBan.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var modalBan = document.querySelector('.popup[data-modal="add-list"]');
      modalBan.classList.remove('popup--opened');
    });
  });

  // закрытие модального окна
  var btnAppointment = document.querySelectorAll('button[data-modal="head-appointment"]');

  btnAppointment.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var modalAppointment = document.querySelector('.popup[data-modal="appoint"]');
      modalAppointment.classList.remove('popup--opened');
    });
  });

  // закрытие модального окна
  var btnAttention = document.querySelectorAll('button[data-modal="attention"]');

  btnAttention.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var modalAttention = document.querySelector('.popup[data-modal="head-appointment"]');
      modalAttention.classList.remove('popup--opened');
    });
  });


   closeButtons.forEach(function (item) {

      item.addEventListener('click', function (e) {
         var parentModal = this.closest('.popup');

         parentModal.classList.remove('popup--opened');
         overlay.classList.remove('modal__overlay--opened');
         modalWrapp.classList.remove('modal--opened');
         document.querySelector('.hidden').classList.remove('hidden');
      });

   }); // end foreach


   document.body.addEventListener('keyup', function (e) {
      var key = e.keyCode;

      if (key == 27) {

         document.querySelector('.modal--opened').classList.remove('modal--opened');
         document.querySelector('.modal__overlay--opened').classList.remove('modal__overlay--opened');
         document.querySelector('.popup--opened').classList.remove('popup--opened');
         document.querySelector('.hidden').classList.remove('hidden');
      }
      ;
   }, false);


   overlay.addEventListener('click', function () {
      document.querySelector('.modal--opened').classList.remove('modal--opened');
      document.querySelector('.popup--opened').classList.remove('popup--opened');
      document.querySelector('.hidden').classList.remove('hidden');
      this.classList.remove('.modal__overlay--opened');
   });
}); // end ready