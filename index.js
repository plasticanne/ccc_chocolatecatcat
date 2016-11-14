/***@auther plastic.anne@gmail.com***/
////test browser and video format
var supportTouch = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
var ie6 = false /*@cc_on || @_jscript_version < 5.7 @*/
var ie7 = (document.all && !window.opera && window.XMLHttpRequest && navigator.userAgent.toString().toLowerCase().indexOf('trident/4.0') == -1) ? true : false;
var ie8 = (navigator.userAgent.toString().toLowerCase().indexOf('trident/4.0') != -1);
var ie9 = navigator.userAgent.toString().toLowerCase().indexOf("trident/5") > -1;
var ie10 = navigator.userAgent.toString().toLowerCase().indexOf("trident/6") > -1;
var ie11 = navigator.userAgent.toString().toLowerCase().indexOf("trident/7") > -1;
var iexplorer = navigator.userAgent.indexOf('MSIE') > -1;
var chrome = (navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.indexOf("op") == -1) ? true : false;
var firefox = navigator.userAgent.indexOf('Firefox') > -1;
var safari = (navigator.userAgent.indexOf("Safari") > -1) && (navigator.userAgent.indexOf('Chrome') == -1) ? true : false;
var camino = navigator.userAgent.indexOf("Camino") > -1;
var opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
var mobile_safari = ((navigator.userAgent.toString().toLowerCase().indexOf("iphone") != -1) || (navigator.userAgent.toString().toLowerCase().indexOf("ipod") != -1) || (navigator.userAgent.toString().toLowerCase().indexOf("ipad") != -1)) ? true : false;
var android = navigator.userAgent.indexOf("Android") > -1;
var androidnative = (navigator.userAgent.indexOf("AppleWebKit") > -1) && (navigator.userAgent.indexOf("Android") > -1);

function videoFormatCheck() {
    var testEl = document.createElement("video"),
        mpeg4, h264, ogg, webm;
    if (testEl.canPlayType) {
        // Check for MPEG-4 support
        mpeg4 = "" !== testEl.canPlayType('video/mp4; codecs="mp4v.20.8"');

        // Check for h264 support
        h264 = "" !== (testEl.canPlayType('video/mp4; codecs="avc1.42E01E"') || testEl.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));

        // Check for Ogg support
        ogg = "" !== testEl.canPlayType('video/ogg; codecs="theora"');

        // Check for Webm support
        webm = "" !== testEl.canPlayType('video/webm; codecs="vp8, vorbis"');
    }
    return {
        "mpeg4": mpeg4,
        "h264": h264,
        "ogg": ogg,
        "webm": webm
    }
};
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



////main
$(window).load(function() {
    ////網頁完整載入才出現
    $('#loading').delay(1200).animate({
        opacity: "0"
    }, 200).css("display", "none");
    ////禁用部分瀏覽器影片以圖片取代
    if ((videoFormatCheck()["webm"] != true) ||
        (iexplorer == true) ||
        //       videoFormatCheck()["h264"] != true &&
        //       videoFormatCheck()["ogg"] != true) ||
        (androidnative == true)) {
        $("#video>video,#gamepostvideo>video").remove();
        $("#video").append('<img src="Templates/Bg_01.png" style="z-index: 1; position: fixed;"/>');
        $("#gamepostvideo").append('<img src="Templates/back.png" style="z-index: 2; position: fixed ;opacity: 0.5"/>');
    };
    ////移除fc2浮動字
    $(".adingoFluctOverlay").html("").css("height", "0px");
    $("#unitedblades_div").html("").css("height", "0px");
    $("#ub_overlay").html("").css("height", "0px");
    ////首頁景深
    function scollspeed(st) {
        $('#video>video,#video>img').velocity({
            top: -1 * st / 8
        }, 0);
    };
    ////影片縮放
    function pageSize() {
        var page_tool = 150
        var w = $(window).width();
        var h = $(window).height();
        var fullh = parseFloat(h) - page_tool;
        var w_h_rate = 1200 / 530;
        var r_w_h_rate = parseFloat(w) / fullh;
        var video = $("#video>video,#video>img");
        if (r_w_h_rate > w_h_rate) {
            $("#video").css("height", fullh + "px");
            video.css("width", w).css("height", parseFloat(w) / w_h_rate + "px");
            if (parseFloat(w) < 450) {
                video.css("right", "0%");
            } else {
                video.css("margin-left", -1 * w / 2 + "px").css("left", "50%");
            }
        } else {
            $("#video").css("height", fullh + "px");
            video.css("width", "auto").css("height", fullh + "px");
            if (parseFloat(w) < 450) {
                video.css("right", "0%");
            } else {
                vw = parseFloat(video.css("width"));
                video.css("margin-left", -1 * vw / 2 + "px").css("left", "50%");
            }
        };
        $("#gamepostvideo>video,#gamepostvideo>img").css("height", parseFloat(h) * 1.5 + "px");
        scollspeed($(window).scrollTop());
        $("#gamepost>div>div>div>p").fitText(2.4);
        $("#gamepost>div>div>div>h1").fitText(0.8);
        $("#gamepost>div>div>div>h2").fitText(1);
    };
    pageSize();
    $(window).resize(function() {
        pageSize();
    });
    ////首頁菜單
    setTimeout(function() {
        $("#footbtn").velocity({
            "top": "50px"
        }, 1000);
        $("#videofoot>span>a").velocity({
            "opacity": "1",
            "margin-left": "2%",
            "margin-right": "2%"
        }, 1000);
    }, 500);
    ////團隊說明頁
    $('#toStory,#footbtn').click(function() {
        $("#catStory").css("height", "100%");
        $("body").css("overflow-y", "hidden");
    });
    $('#no,#exit').click(function() {
        $("#catStory").css("height", "0%");
        $("body").css("overflow-y", "auto");
    });
    $('#yes').click(function() {
        $("#catStoryBox").css("display", "none");
        $("#catStoryiframe").css("height", "100%");
    });
    ////U2撥放按鈕
    $('#audio').click(function() {
        $('#audiomsg').slideToggle();
    });
    ////回到top
    $("#top").click(function() {
        $('html, body').animate({
            scrollTop: "0",
        }, 600);
    });
    ////遊戲大圖特效
    function imgHoverIn(sele) {
        sele.next("div").velocity("stop", true).velocity({
            scale: "1",
            opacity: "1",
            textShadowBlur: "20",
        }, 400);
        sele.children("img").velocity("stop", true).velocity({
            opacity: "0.4",
        }, 400);
    };

    function imgHoverOut(sele) {
        sele.next("div").velocity("stop", true).velocity({
            scale: "0.9",
            opacity: "0",
            textShadowBlur: "0",
        }, 400);
        sele.children("img").velocity("stop", true).velocity({
            "opacity": "1"
        }, 400);
    };

    function timeImgHoverOut(sele) {
        setTimeout(function() { imgHoverOut(sele) }, 2000);
    }

    function imgShow(winh, st) {
        for (var i = 0; i < gamepost_a.length; i++) {
            var aeq = gamepost_a.eq(i)
            if (!aeq.attr("class").match("active")) {
                if (aeq.offset().top - winh <= st) {
                    aeq.addClass('active');
                    imgHoverIn(aeq);
                    timeImgHoverOut(aeq);
                };
            };
        };
    };
    var gamepost_a = $("#gamepost>div>div>a");
    $("#gamepost>div>div>div").velocity({
        scale: "0.9"
    }, 0);
    imgShow($(window).height(), $(window).scrollTop());
    gamepost_a.hover(function() { imgHoverIn($(this)) }, function() { imgHoverOut($(this)) });
    ////左上菜單
    var onmenu

    function ctrlmenu(ini, st, winh) {
        if (st >= winh) {
            if (onmenu == 0 || ini == 1) {
                onmenu = 1
                $("#toStory,#top").velocity("stop", true).velocity({
                    "opacity": "1",
                    "margin-left": "20px"
                }, {
                    duration: 1000,
                    begin: function() {
                        $("#toStory,#top").css("display", "inline");
                    }
                });
                $("#video>video,#video>img").css("display", "none");
            }
        } else {
            if (onmenu == 1 || ini == 1) {
                onmenu = 0
                $("#toStory,#top").velocity("stop", true).velocity({
                    "opacity": "0",
                    "margin-left": "0px"
                }, {
                    duration: 500,
                    complete: function() {
                        $("#toStory,#top").css("display", "none");
                    }
                });
                $("#video>video,#video>img").css("display", "block");
            }
        };
    }
    ctrlmenu(1, $(window).scrollTop(), $(window).height());
    ////滾輪事件

    $(window).scroll(function(event) {
        var bh = $("body").height();
        var st = $(window).scrollTop();
        var winh = $(window).height();
        scollspeed(st);
        ////左上菜單
        ctrlmenu(0, st, winh);
        ////遊戲大圖特效
        imgShow(winh, st);

        ////滾到底載入FB
        if ((Math.abs(st + winh - bh) <= 10) && ($("#postmsg").length == 0)) {
            var FBcommentsplgin =
                '<div id="postmsg" class="text-center col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1" style="background-color: white; color:black ;border: white 0px solid;border-radius: 5px; position: relative;z-index:5;padding-bottom:50px; ">' +
                '<h1 style="overflow:hidden;">' +
                '<div class="fb-like" style=" background-color: white; position: relative;z-index:10;" data-href="https://www.facebook.com/ChocolateMacaronCatCat/" data-width="300" data-layout="standard" data-action="recommend" data-size="large" data-show-faces="true" data-share="true">' +
                '</div>' +
                '</h1>' +
                '<div style="background-color: white;position: relative;z-index:10;" class="fb-comments" data-href="http://chocolatecatcat.web.fc2.com/board.html" data-numposts="10" data-width="100%">' +
                '</div>' +
                '</div>';
            $("#FBCom").append(FBcommentsplgin);
            var FBs = document.createElement("script");
            FBs.type = "text/javascript";
            FBs.innerHTML = 'window.fbAsyncInit = function() {FB.init({appId: "745098148964766",xfbml: true,version: "v2.8"});};(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s);js.id = id;js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8&appId=745098148964766";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));'
            $("#FBCom").append(FBs);
        };
    });



});
