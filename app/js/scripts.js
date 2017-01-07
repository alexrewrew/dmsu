/*$(document).ready(function () {
 //

 //

 //anchor navigation

 });*/


$(document).ready(function () {

    $(window).on('load resize', function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.navbar-default').addClass('navbar-fixed-top');
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
                dots: true
            });
        };
        if (window.matchMedia('(min-width: 768px)').matches) {
            $("select").chosen({disable_search: true, width: "100%", scroll_to_highlighted: false});


            // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
            $('.dropdown').on('show.bs.dropdown', function (e) {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
            });

            // ADD SLIDEUP ANIMATION TO DROPDOWN //
            $('.dropdown').on('hide.bs.dropdown', function (e) {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            });
            $('.navbar-default').removeClass('navbar-fixed-top');
           /* $('#news-slider').slick('unslick');*/
           /* $('#event-slider').slick('unslick');*/
        };
    });


    $('.tab-div').click(function () {
        $('.tab-div').parent('div').removeClass('active');
        $(this).parent('div').toggleClass('active');
    })

    $('button.navbar-toggle').click(function () {
        $('body').toggleClass('overflow-body');
    });

    $('.smooth').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $(window).on('load resize', function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $(".button-up").fadeIn('slow');
            } else {
                $(".button-up").fadeOut('fast');
            }
        });
    });

    /* */
    $('#search-icon').click(function () {
        $('.search-container').show('fast');
    });


    /*$('.chosen-container').on('chosen:showing_dropdown', function () {
     $(this).next('.chosen-container').children('.chosen-drop').slideDown(400);
     }).on('chosen:hiding_dropdown', function () {
     $(this).next('.chosen-container').children('.chosen-drop').slideUp(400);
     });*/



    $('.select-connect').click(function () {
        $('.blue-arrow').toggle('normal');
    });

    $('.active-result').click(function (e) {
        $(this).trigger('blur');
    })

});

