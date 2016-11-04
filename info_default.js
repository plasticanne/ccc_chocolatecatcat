/***@auther plastic.anne@gmail.com***/
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
