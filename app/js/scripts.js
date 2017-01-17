$(document).ready(function () {
    $(".footer-slide-item").click(function () {
        $(".footer-slide-item").removeClass("active");
    });

    //  $(window).on('load resize', function () {
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('#news-slider').slick({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true
        });
        $('#event-slider').slick({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true
        });
        $('#accordion-slider').slick({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true,
            slide: '.item-tab',
            swipeToSlide: true
        });
        $('#footer-slider').slick({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true,
            slide: '.footer-slide-item',
            swipeToSlide: true
        });
        $("body").append($("#navigation"));
    }
    ;
    if (window.matchMedia('(min-width: 768px)').matches) {
        $("select").chosen({disable_search: true, width: "100%", scroll_to_highlighted: false});
        $(".back-blue").append($("#navigation"));
    };

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".button-up").fadeIn('slow');
            if($(window).scrollTop()+$(window).height()>=$(document).height()){
                $(".button-up").css("bottom", "94px");
            } else {
                $(".button-up").css("bottom", "46px");
            }
        } else {
            $(".button-up").fadeOut('fast');
        }
    });


    // });


    $('.tab-div').click(function () {
        $('.tab-div').parent('div').removeClass('active');
        $(this).parent('div').toggleClass('active');
    });

    $('.navbar-toggle').click(function () {
        $('body').toggleClass('overflow-body');
    });

    $('.smooth').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $('.select-connect').click(function () {
        $('.blue-arrow').toggle('normal');
    });

    $('.active-result').click(function (e) {
        $(this).trigger('blur');
    });
});

