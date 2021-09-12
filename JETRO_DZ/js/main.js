$(function () {
    $('.slider__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,

        asNavFor: '.slider__bottom',
        prevArrow: '<button class="slider-arrow arrow-prev" ><img src="images/slider/prev.svg" alt=""></button>',
        nextArrow: '<button class="slider-arrow arrow-next" ><img src="images/slider/next.svg" alt=""></button>',
    });
    $('.slider__bottom').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__top',
        focusOnSelect: true,
        arrows: false,
        draggable: true,


    });

});