const menuBox = document.querySelector('.nav');
const menuTogglerBtn = document.querySelector('.menu-toggler-btn');

const breakfastSliderWrap = document.querySelector('.dp-wrap');


window.addEventListener('DOMContentLoaded', setBreakfastSliderWrapHeight);

window.addEventListener('resize', setBreakfastSliderWrapHeight);

function setBreakfastSliderWrapHeight() {
  let breakfastBiggestItem = document.querySelector('.menu-card[data-position="1"');
  let currentWidth = window.innerWidth;
  
  if (currentWidth < 929){
    let currentMaxHeight = breakfastBiggestItem.getBoundingClientRect().height;
     
    currentWidth < 480 ? breakfastSliderWrap.style.height = currentMaxHeight + 80 + 'px' : breakfastSliderWrap.style.height = currentMaxHeight + 100 + 'px';
  }
  if(currentWidth == 929 || currentWidth > 929) breakfastSliderWrap.style.height = 'auto';
};

menuTogglerBtn.addEventListener('click', () => {
  menuTogglerBtn.classList.toggle('active');
  menuBox.classList.toggle('active');
});

menuTogglerBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && !menuTogglerBtn.classList.contains('active')) {
    menuTogglerBtn.classList.toggle('active');
    menuBox.classList.toggle('active');
  }
  if (e.key === 'Escape' && menuTogglerBtn.classList.contains('active')) {
    menuTogglerBtn.classList.remove('active');
    menuBox.classList.remove('active');
  }
});

$(document).ready(function () {
  $('.pancakes-big-slider').slick({
    infinite: true,
    arrows: false,
  });

  $('.small-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button class="small-slider-arrow small-alider-prev" aria-label="prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="small-slider-arrow small-slider-next" aria-label="next"><i class="fa-solid fa-chevron-right"></i></button>',
    asNavFor: '.pancakes-big-slider',
    responsive: [
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  /*------ breakfast slider ---------*/

  function detect_active() {
    // get active
    var get_active = $("#dp-slider .dp_item:first-child").data("class");
    $("#dp-dots li").removeClass("active");
    $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
  }
  /*$("#dp-next").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
    detect_active();

  });

  $("#dp-prev").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });

    detect_active();
  });
*/
  $("#dp-dots li").click(function () {
    $("#dp-dots li").removeClass("active");
    $(this).addClass("active");
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
  });


  $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });

    detect_active();
  });

});