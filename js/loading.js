$(function () {
    $('#post_load').hide();
    $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
    })
});

$(window).load(function () {
    setInterval(function () {
        $("#post_load").fadeIn(1000);
        $("#pre_load").fadeOut(1000);
        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto'
        });
    }, 3000);
});