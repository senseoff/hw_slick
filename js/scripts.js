jQuery(document).ready(function($) {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: `<a href="#" class="arrow" id="arrowleft"></a>`,
        nextArrow: `<a href="#" class="arrow" id="arrowright"></a>`
    })

});
