$(document).ready(function () {
    setTimeout(function() {
        $('.widget-activator').css({
            'display':'block'
        })
    }, 40000);
    var widget = $('.widget');
    $('.widget-activator').click(function () {
        widget.addClass('active');
        widget.removeClass('slide-out');
        widget.addClass('slide-in');
        $('body').addClass('js-no-scroll')
    })
    $('.widget-close').click(function () {
        widget.removeClass('slide-in');
        widget.addClass('slide-out');
        $('body').removeClass('js-no-scroll');
        setTimeout(function() {
            widget.removeClass('active');
        }, 500);
    })
})