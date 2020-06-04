window.onscroll = function () {
    myFunction()
}

    ;

var header = document.getElementById("myMenu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        $(".header__menu").addClass("header__menu_bgcolor");

    }

    else {
        header.classList.remove("sticky");
        header.classList.remove("header__menu_bgcolor");
    }
}


// стилизация инпутов формы name

$('input.focused2').on('click', function () {
    $('span.label2').removeClass('labelStart');
    $('span.label2').addClass('labelSlide');
});

$('input.focused2').blur(function () {
    if (!$.trim(this.value).length) {
        $('span.label2').removeClass('labelSlide');
        $('span.label2').addClass('labelStart');
    }
});

// стилизация инпутов формы email

$('input.emailFocused').on('click', function () {
    $('spanlabelSecond').removeClass('labelFirst');
    $('span.labelSecond').addClass('labelMoove');
});

$('input.emailFocused').blur(function () {
    if (!$.trim(this.value).length) {
        $('span.labelSecond').removeClass('labelMoove');
        $('span.labelSecond').addClass('labelFirst');
    }
});

