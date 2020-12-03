$(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.21839 1L1 9L9.21839 17" />\n' +
            '</svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.78161 17L9 9L0.78161 1" />\n' +
            '</svg></button>',
        infinite: false

    });

    $(function() {
        $.scrollify({
            section : ".page-section",
        });
    });

    $('.questions__item-title').on('click', function(){

        //работает
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent('.questions__item').addClass('questions__item--active');


        // if(!$(this).parent().hasClass('questions__item--active')) {
        //     $('.questions__item-text').each(function() {
        //         $(this).slideUp();
        //     })
        //     $(this).parent().addClass('questions__item--active');
        //     $(this).next().slideDown();
        //
        // }

        // $('.questions__item-title').each(function() {
        //     if(!$('.questions__item-title').next().hasClass('questions__item--active')) {
        //         $(this).next().slideUp();
        //         $(this).next().addClass('questions__item--active').slideDown();
        //     }

        // });

        // $('.questions__item-title').each(function() {
        //     if(!$('.questions__item-title').next().hasClass('questions__item--active')) {
        //         $(this).next().slideUp();
        //         $(this).next().addClass('questions__item--active').slideDown();
        //     }
        //
        // });
    })
});