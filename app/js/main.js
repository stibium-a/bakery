const menuBox = document.querySelector('.nav');
const menuTogglerBtn = document.querySelector('.menu-toggler-btn');

menuTogglerBtn.addEventListener('click', ()=>{
menuTogglerBtn.classList.toggle('active');
menuBox.classList.toggle('active');
});

menuTogglerBtn.addEventListener('keyup', (e)=>{
  if(e.key === 'Enter' && !menuTogglerBtn.classList.contains('active')){
    menuTogglerBtn.classList.toggle('active');
    menuBox.classList.toggle('active');
  }
  if(e.key === 'Escape' && menuTogglerBtn.classList.contains('active')){
    menuTogglerBtn.classList.remove('active');
    menuBox.classList.remove('active');
  }
});

$(document).ready(function () {
  $('.pancakes-big-slider').slick({
    infinite: true,
  });
  
  $('.small-alider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.pancakes-big-slider',
  });
});