/*$(document).ready(function () {
    //

    //

    //anchor navigation

});*/

$(document).ready(function() {
    $("select").chosen({disable_search: true,width:"100%", scroll_to_highlighted: false});
    //
   /* $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });*/

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

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


    $('.chosen-container').on('chosen:showing_dropdown', function() {
        $(this).next('.chosen-container').children('.chosen-drop').slideDown(400);
    }).on('chosen:hiding_dropdown', function () {
        $(this).next('.chosen-container').children('.chosen-drop').slideUp(400);
    });

});

