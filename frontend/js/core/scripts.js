$(document).ready(function () {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        , BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        , iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        , Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        , Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        , any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (!isMobile.any()) {
        $(".").show();
    }
    else {
        $(".").show();
    }
    /* icheck */
    $('.icheck_input').iCheck({
        checkboxClass: 'icheckbox_square'
        , radioClass: 'iradio_square'
        , increaseArea: '20%' // optional
    });
    /* WOW.JS */
    new WOW().init();
    /* SLICK */
    $('.your-class').slick({});
    /* select2 */
    $('.select2').select2({});
});