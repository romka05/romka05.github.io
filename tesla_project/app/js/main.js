$(function () {
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
  });

  $('.header-btn').on('click', function () {
    $('.menu').addClass('menu-act');
  });

  $('.close-btn').on('click', function () {
    $('.menu').removeClass('menu-act');
  });

});
