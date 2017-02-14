$(document).ready(function () {


    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');

    if (msie > 0) {
        $('body').addClass('ie-icon');
    }

    if (trident > 0) {
        $('body').addClass('ie-icon');
    }

    if (edge > 0) {
        $('body').addClass('ie-icon');
    }

    $("select").on('selection:showing_dropdown', function () {
        $(this).next('.selection-container').addClass("selection-container-active");
        $(this).next('.selection-container').children('.selection-drop').slideDown(300);
    }).on('selection:hiding_dropdown', function () {
        $(this).next('.selection-container').removeClass("selection-container-active");
        $(this).next('.selection-container').children('.selection-drop').slideUp(300);
    });

    $(".footer-slide-item").click(function () {
        $(".footer-slide-item").removeClass("active");
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.item-width > .clearfix').remove();
        $('.slider').slider({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true
        });
        $('#footer-slider').slider({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true,
            slide: '.footer-slide-item',
            swipeToSlide: true
        });

        $('#filter-slider').slider({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true,
            slide: 'li',
            swipeToSlide: true
        });


        $("body").append($("#navigation"));
    }

    if (window.matchMedia('(max-width: 1200px)').matches) {
        $('.display-nav').remove();
    }

    if (window.matchMedia('(min-width: 768px)').matches) {
        $("select").selection({disable_search: true, width: "100%", scroll_to_highlighted: false});
        $(".back-blue").append($("#navigation"));
    }


    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".button-up").fadeIn('slow');
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                $(".button-up").css("bottom", "94px");
            } else {
                $(".button-up").css("bottom", "46px");
            }
        } else {
            $(".button-up").fadeOut('fast');
        }
    });

    $('.tab-div').click(function () {
        $('.tab-div').parent('div').removeClass('active');
        $(this).parent('div').toggleClass('active');
    });

    $('.smooth').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $('.active-result').click(function (e) {
        $(this).trigger('blur');
    });

    var count = 0;

    $('#size-minus').click(function () {
        if (count === 0) {
            $('article > .row').css('font-size', '1em');
        } else if (count === 1) {
            $('article > .row').css('font-size', '1em');
            $('#size-minus').addClass('size-disabled');
            $('#size-default').addClass('size-disabled');
            count--;
        } else if (count === 2) {
            $('article > .row').css('font-size', '1.125em');
            count--;
        } else if (count === 3) {
            $('article > .row').css('font-size', '1.25em');
            $('#size-plus').removeClass('size-disabled');
            count--;
        }
    });
    $('#size-plus').click(function () {
        console.log(count);
        if (count === 0) {
            $('article > .row').css('font-size', '1.125em');
            $('#size-minus').removeClass('size-disabled');
            $('#size-default').removeClass('size-disabled');
            count++;

        } else if (count === 1) {
            $('article > .row').css('font-size', '1.25em');
            count++;

        } else if (count === 2) {
            $('article > .row').css('font-size', '1.375em');
            $('#size-plus').addClass('size-disabled');
            count++
        } else if (count === 3) {
            $('article > .row').css('font-size', '1.375em');
        }
    });
    $('#size-default').click(function () {
        count = 0;
        $('article > .row').css('font-size', '1em');
        $('#size-minus').addClass('size-disabled');
        $('#size-default').addClass('size-disabled');
        $('#size-plus').removeClass('size-disabled');
    });
    $('.gallery > a').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    /**/

    $('.authorities a').hover(function () {
        var reg1 = $(this).attr('data-region');
        $(this).toggleClass('region-authority');
        $('#ukraine-map g[data-region=' + reg1 + '] .st0').toggleClass('region-map');
    })

    $('#ukraine-map g').hover(function () {
        var reg2 = $(this).attr('data-region');
        $(this).toggleClass('region-map');
        $('.authorities a[data-region=' + reg2 + ']').toggleClass('region-authority');
    })

    $('#ukraine-map g').click(function () {
        var reg3 = $(this).attr('data-region');
        var reg4 = $('.authorities a[data-region=' + reg3 + ']').attr('href');
        window.location = reg4;
    })
});



