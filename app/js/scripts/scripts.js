$(document).ready(function () {
    /*alert('velosiped4');*/
    $(".footer-slide-item").click(function () {
        $(".footer-slide-item").removeClass("active");
    });

    //  $(window).on('load resize', function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('#news-slider').slider({
            arrows: false,
            variableWidth: true,
            infinite: false,
            slide: '.important-item',
            dots: true
        });
        $('#event-slider').slider({
            arrows: false,
            variableWidth: true,
            infinite: false,
            slide: '.event-item',
            dots: true
        });
        $('#accordion-slider').slider({
            arrows: false,
            variableWidth: true,
            infinite: false,
            dots: true,
            slide: '.item-tab',
            swipeToSlide: true
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
        $(".head-row").append($("#filter-slider"));
    }

    if (window.matchMedia('(min-width: 768px)').matches) {
        $("select").chosen({disable_search: true, width: "100%", scroll_to_highlighted: false});
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

    $('.select-connect').click(function () {
        $('.blue-arrow').toggle('normal');
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
});

