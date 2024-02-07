const menuBox = document.querySelector('.nav');
const menuTogglerBtn = document.querySelector('.menu-toggler-btn');

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
  });
});