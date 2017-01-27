/***@auther plastic.anne@gmail.com***/
////GA
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-83665709-2', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
    ////回到top
    var amountScrolled = 300;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    ////移除fc2浮動字
    $(".adingoFluctOverlay").html("").css("height", "0px");
    $("#unitedblades_div").html("").css("height", "0px");
    $("#ub_overlay").html("").css("height", "0px");
    ////
});
