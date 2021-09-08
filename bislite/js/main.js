$(function () {
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-arrow arrow-prev" ><img src="images/slider/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider-arrow arrow-next" ><img src="images/slider/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 911,
                settings: {
                    slidesToShow: 3,
                }

            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }

            },
            {
                breakpoint: 476,
                settings: {
                    slidesToShow: 1,
                }

            },


        ]
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });

    $('.header__drop-down.drop-down').on('click', function () {
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });

});