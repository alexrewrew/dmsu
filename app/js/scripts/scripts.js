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

    /*$('.authorities a').hover(function () {
     var reg1 = $(this).attr('data-region');
     /!*$(this).toggleClass('region-authority');*!/
     $('#ukraine-map g[data-region=' + reg1 + '] .st0').toggleClass('region-map');
     })*/
    /*$('.right-map').click(function () {
     $('.right-map').removeClass('region-authority');
     $('#ukraine-map g .st0').removeClass('region-map');
     $(this).toggleClass('region-authority');
     var reg1 = $(this).attr('data-region');
     $('#ukraine-map g[data-region=' + reg1 + '] .st0').toggleClass('region-map');
     })*/
    //
    // $('#ukraine-map g').hover(function () {
    //     var reg2 = $(this).attr('data-region');
    //     $(this).toggleClass('region-map');
    //     $('.authorities a[data-region=' + reg2 + ']').toggleClass('region-authority');
    // })
    //


    /**/
    $('#help').click(function () {
        $('#help-panel').slideToggle();
    });

    /**/
    $('.right-map').click(function () {
        var reg = $(this).attr('data-region');

        $('#ukraine-map .st0').removeClass('region-map');
        $('.right-map').removeClass('region-authority');

        $('#ukraine-map g[data-region=' + reg + '] .st0').addClass('region-map');
        $(this).addClass('region-authority');
    });


    jQuery.fn.scrollTo = function (elem, speed) {
        $(this).animate({
            scrollTop: $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
        }, speed == undefined ? 1000 : speed);
        return this;
    };

    $('#ukraine-map g').click(function () {
        var reg = $(this).attr('data-region');

        $('#ukraine-map .st0').removeClass('region-map');
        $('.right-map').removeClass('region-authority');

        $('.right-map[data-region=' + reg + ']').addClass('region-authority');
        $('#ukraine-map g[data-region=' + reg + '] .st0').addClass('region-map');
        $('.authorities > ul').scrollTo('.right-map[data-region=' + reg + ']', 500);
    });

    /**/
    $('.right-map[data-region="38"]').click(function () {
        $('#ukraine-map .st0').removeClass('region-map');
        $('.right-map').removeClass('region-authority');
        $('#ukraine-map g[data-region="38"] .st0').removeClass('region-map');
        $(this).removeClass('region-authority');
    });

    $('.right-map[data-region="37"]').click(function () {
        $('#ukraine-map .st0').removeClass('region-map');
        $('.right-map').removeClass('region-authority');
        $('#ukraine-map g[data-region="37"] .st0').removeClass('region-map');
        $(this).removeClass('region-authority');
    });

    $('#ukraine-map g[data-region="37"]').click(function () {

        $('#ukraine-map .st0').removeClass('region-map');
        $('.right-map').removeClass('region-authority');
        $('.right-map[data-region="37"]').removeClass('region-authority');
        $('#ukraine-map g[data-region="37"] .st0').removeClass('region-map');
    });

    $('#ukraine-map g[data-region="38"]').click(function () {

        $('#ukraine-map .st0').removeClass('region-map');
        $('.right-map').removeClass('region-authority');
        $('.right-map[data-region="38"]').removeClass('region-authority');
        $('#ukraine-map g[data-region="38"] .st0').removeClass('region-map');
    });

    /**/
    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    /**/
    $('.radio, .check').iCheck({
        checkboxClass: 'icheckbox_square-orange',
        radioClass: 'iradio_square-orange',
        increaseArea: '20%' // optional
    });

    /* transliterate validation */

    $(".trans-form input").on('input', function () {
        if ($(this).val() != "") {
            var regexp = /^([А-Яа-яЇїІіЄєҐґ\s\-`']+)$/;
            if (!regexp.test($(this).val())) {
                $(this).addClass("error-validation");
                $(".text-servise-error").addClass("error-validation-text");
            } else {
                $(this).removeClass("error-validation");
                $(".text-servise-error").removeClass("error-validation-text");
            }
        } else {
            $(this).removeClass("error-validation");
            $(".text-servise-error").removeClass("error-validation-text");
        }

        if ($(".trans-form input[name='surname']").val() != "" && $(".trans-form input[name='name']").val() != "" && $(".error-validation").length == 0) {
            $(".form-step").removeClass("disabled-step");
        } else {
            $(".form-step").addClass("disabled-step");
        }
    });

    $(".trans-form").submit(function (e) {
        if ($(".disabled-step").length == 0) {
            var name = $(".trans-form input[name='name']").val();
            var surname = $(".trans-form input[name='surname']").val();
            var data = transliterate(name, surname);

            $(".name-surname").html(data[3] + " " + data[2]);

            $("#firstNameUkr").html(data[3]);
            $("#firstNameEng").html(data[1]);
            $("#lastNameUkr").html(data[2]);
            $("#lastNameEng").html(data[0]);

            $("#firstNameUkr2").html(data[3]);
            $("#firstNameEng2").html(data[1]);
            $("#lastNameUk2r").html(data[2]);
            $("#lastNameEng2").html(data[0]);

            $(".service-section-hide").show();
        }
        e.preventDefault();
    });

    var transliterate = function (name, surname) {
        var t = new Array(
            ["зг", "zgh"],
            ["Зг", "Zgh"],
            ["А", "A"],
            ["а", "a"],
            ["Б", "B"],
            ["б", "b"],
            ["В", "V"],
            ["в", "v"],
            ["Г", "H"],
            ["г", "h"],
            ["Ґ", "G"],
            ["ґ", "g"],
            ["Д", "D"],
            ["д", "d"],
            ["Е", "E"],
            ["е", "e"],
            ["Є", "Ye"],
            ["є", "ie"],
            ["Ж", "Zh"],
            ["ж", "zh"],
            ["З", "Z"],
            ["з", "z"],
            ["И", "Y"],
            ["и", "y"],
            ["І", "I"],
            ["і", "i"],
            ["Ї", "Yi"],
            ["ї", "i"],
            ["Й", "Y"],
            ["й", "i"],
            ["К", "K"],
            ["к", "k"],
            ["Л", "L"],
            ["л", "l"],
            ["М", "M"],
            ["м", "m"],
            ["Н", "N"],
            ["н", "n"],
            ["О", "O"],
            ["о", "o"],
            ["П", "P"],
            ["п", "p"],
            ["Р", "R"],
            ["р", "r"],
            ["С", "S"],
            ["с", "s"],
            ["Т", "T"],
            ["т", "t"],
            ["У", "U"],
            ["у", "u"],
            ["Ф", "F"],
            ["ф", "f"],
            ["Х", "Kh"],
            ["х", "kh"],
            ["Ц", "Ts"],
            ["ц", "ts"],
            ["Ч", "Ch"],
            ["ч", "ch"],
            ["Ш", "Sh"],
            ["ш", "sh"],
            ["Щ", "Shch"],
            ["щ", "shch"],
            ["Ю", "Yu"],
            ["ю", "iu"],
            ["Я", "Ya"],
            ["я", "ia"],
            [" ", " "],
            ["-", "-"],
            ["'", ""]
        );

        name = name.trim().replace(/\s+/g, ' ');
        surname = surname.trim().replace(/\s+/g, ' ');

        var arr = name.split(' ');
        var result = [];
        $.each(arr, function (i) {
            var text = arr[i][0].toUpperCase() + arr[i].slice(1);
            result.push(text);
        });
        name = result.join(" ");

        arr = surname.split(' ');
        result = [];
        $.each(arr, function (i) {
            var text = arr[i][0].toUpperCase() + arr[i].slice(1);
            result.push(text);
        });
        surname = result.join(" ");

        var newName = "";
        for (i = 0; i < name.length; i++) {
            for (j = 0; j < t.length; j++) {
                if (name[i] == t[j][0]) {
                    newName += t[j][1];
                }
            }
        }

        var newSurmame = "";
        for (var i = 0; i < surname.length; i++) {
            for (var j = 0; j < t.length; j++) {
                if (surname[i] == t[j][0]) {
                    newSurmame += t[j][1];
                }
            }
        }

        newName = newName.toUpperCase();
        newSurmame = newSurmame.toUpperCase();

        return [newName, newSurmame, name, surname];
    };

    /* registrations validation */

    $(".region").change(function () {
        if ($(this).val() != "") {
            $(".form-step1").removeClass("disabled-step");
            $(".form-step2").addClass("disabled-step");
            $(".city").removeAttr("disabled");
            $('.city').val("");
            $('.city').trigger('selection:updated');
        } else {
            $(".form-step1").addClass("disabled-step");
            $(".form-step2").addClass("disabled-step");
            $(".city").attr("disabled", true);
            $('.city').val("");
            $('.city').trigger('selection:updated');
        }
    });

    $(".city").change(function () {
        if ($(this).val() != "") {
            $(".form-step2").removeClass("disabled-step");
        } else {
            $(".form-step2").addClass("disabled-step");
        }
    });

    /* check passport validation */

    $(".passport-choise-block").mouseout(function () {
        $(this).find(".passport-choise").addClass("checked-passport");
    });

    $(".passport-choise-block").mouseleave(function () {
        if (!$(this).hasClass("active-first-step")) {
            $(this).find(".passport-choise").removeClass("checked-passport");
        }
    });

    $(".passport-choise-block").click(function () {
        $(".active-first-step").removeClass("active-first-step");
        $(".checked-passport").removeClass("checked-passport");
        $(this).addClass("active-first-step");
        $(this).find(".passport-choise").removeClass("checked-passport");

        if ($(this).attr("data-step") == 1) {
            $(".row[data-show='1']").show();
            $(".row[data-show='1'] input").iCheck('uncheck');
            $(".step-check-3").show();
            $(".step-check-3").addClass("disabled-step");
            $(".step-check-3 input[name='book-id']").iCheck('uncheck');
            $(".step-check-3-pass").addClass("disabled-step");
            $(".step-check-3-pass input").val("");
            $(".step-check-4").show();
            $(".step-check-4").addClass("disabled-step");
            $(".step-check-5").show();
            $(".step-check-5").addClass("disabled-step");
            $(".step-check-3-pass input").attr("disabled", true);
            $(".row[data-show='2']").hide();
            $(".error-validation").removeClass("error-validation");
            $(".step-check-33-pass").addClass("disabled-step");
            $(".step-check-33-pass input").attr("disabled", true);
            $(".step-check-33-pass input").val("");
            $(".row[data-show='2'] input").iCheck('uncheck');
        } else {
            $(".row[data-show='2']").show();
            $(".row[data-show='1'] input").iCheck('uncheck');
            $(".step-check-3").show();
            $(".step-check-3").addClass("disabled-step");
            $(".step-check-3 input[name='book-id']").iCheck('uncheck');
            $(".step-check-3-pass").addClass("disabled-step");
            $(".step-check-3-pass input").val("");
            $(".step-check-4").show();
            $(".step-check-4").addClass("disabled-step");
            $(".step-check-5").show();
            $(".step-check-5").addClass("disabled-step");
            $(".step-check-3-pass input").attr("disabled", true);
            $(".row[data-show='1']").hide();
            $(".error-validation").removeClass("error-validation");
            $(".step-check-33-pass").addClass("disabled-step");
            $(".step-check-33-pass input").attr("disabled", true);
            $(".step-check-33-pass input").val("");
            $(".row[data-show='2'] input").iCheck('uncheck');
        }
    });

    $(document).on("ifChanged", ".row[data-show='1'] input", function () {
        $(".step-check-3").removeClass("disabled-step");
        $(".step-check-3 input[name='book-id']").removeAttr("disabled");
        $('.radio').iCheck({
            checkboxClass: 'icheckbox_square-orange',
            radioClass: 'iradio_square-orange',
            increaseArea: '20%' // optional
        });
    });

    $(document).on("ifChanged", ".row[data-show='2'] input", function () {
        $(".step-check-33-pass").removeClass("disabled-step");
        $(".step-check-33-pass input").removeAttr("disabled");
    });

    $(".step-check-33-pass input[name='number-step']").on('input', function () {
        this.value = this.value.replace(/[^\d,]/g, '');
        if ($(this).val() != "") {
            if ($(this).val().length != 6) {
                $(this).addClass("error-validation");
            } else {
                $(this).removeClass("error-validation");
            }
        }
    });

    $(".step-check-33-pass input").on('input', function () {
        if ($(".step-check-33-pass input[name='set-step']").val() != "" && $(".step-check-33-pass input[name='number-step']").val() != "" && $(".error-validation").length == 0) {
            $(".step-check-3").removeClass("disabled-step");
            $(".step-check-3 input[name='book-id']").removeAttr("disabled");
            $('.radio').iCheck({
                checkboxClass: 'icheckbox_square-orange',
                radioClass: 'iradio_square-orange',
                increaseArea: '20%' // optional
            });
        }
    });

    $(document).on("ifChanged", ".step-check-3 input[name='book-id']", function () {
        $(".step-check-3-pass").removeClass("disabled-step");
        $(".step-check-3-pass input").removeAttr("disabled");
    });

    $(".step-check-3-pass input[name='number']").on('input', function () {
        this.value = this.value.replace(/[^\d,]/g, '');
        if ($(this).val() != "") {
            if ($(this).val().length != 6) {
                $(this).addClass("error-validation");
            } else {
                $(this).removeClass("error-validation");
            }
        }
    });

    $(".step-check-3-pass input[name='set']").on('input', function () {
        this.value = this.value.replace(/[^А-ЯЇІЄҐ,]/g, '');
        if ($(this).val() != "") {
            if ($(this).val().length != 2) {
                $(this).addClass("error-validation");
            } else {
                $(this).removeClass("error-validation");
            }
        }
    });

    $(".step-check-3-pass input").on('input', function () {
        if ($(".step-check-3-pass input[name='set']").val() != "" && $(".step-check-3-pass input[name='number']").val() != "" && $(".error-validation").length == 0) {
            $(".step-check-4").removeClass("disabled-step");
            //if captcha is true
            $(".step-check-5").removeClass("disabled-step");
        } else {
            $(".step-check-4").addClass("disabled-step");
            $(".step-check-5").addClass("disabled-step");
        }
    });
});



