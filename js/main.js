$( function () {

    $(".silder_inner, .news_slider_inner").slick({
        nextArrow: '<button type="button" class="slick_btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick_btn slick-prev"></button>',
        infinite: false
    });

    $(".menu_icon").click( () => {
        $(".menu").slideToggle();
    });
});
