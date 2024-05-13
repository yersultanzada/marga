$(document).ready(function () {
    setTimeout(function() {
        $('.widget-activator').css({
            'display':'block'
        })
    }, 1000);
    var widget = $('.widget');
    $('.widget-activator').click(function () {
        widget.css({
            'display':'block'
        });
        widget.removeClass('slide-out');
        widget.addClass('slide-in');
        $('body').addClass('js-no-scroll')
    })
    $('.widget-close').click(function () {
        widget.removeClass('slide-in');
        widget.addClass('slide-out');
        $('body').removeClass('js-no-scroll')
        setTimeout(function() {
            widget.css({
                'display':'none'
            })
        }, 500);
    })
})