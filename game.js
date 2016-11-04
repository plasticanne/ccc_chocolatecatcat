/***@auther plastic.anne@gmail.com***/
////machine info
var supportTouch = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
////main
function setPage() {
    $("#gamebox").css("background-image", "url(" + page_url + ")");
    $("#gameiframe").css({
        "width": game_o_w,
        "height": game_o_h
    });
    $("#toolbox").css("height", page_tool + "px");
}



function setSize() {
    var w = $(window).width();
    var h = $(window).height();
    var w_h_rate = game_o_w / game_o_h;
    var fullh = parseFloat(h) - page_tool;
    var scalew = "scale(" + parseFloat(w) / game_o_w + ")";
    var scaleh = "scale(" + fullh / game_o_h + ")";
    var fullrate = parseFloat(w) / fullh;
    if (fullrate <= w_h_rate) {
        $("#gameiframe").css("transform", scalew);
        $("#gamebox").css("width", w)
            .css("height", parseFloat(w) * (1 / w_h_rate) + "px")
            .css("left", "0")
            .css("margin-left", "0");
    } else {
        $("#gameiframe").css("transform", scaleh);
        $("#gamebox").css("width", fullh * w_h_rate + "px")
            .css("height", fullh + "px")
            .css("left", "50%")
            .css("margin-left", -1 * fullh * w_h_rate / 2 + "px");
    }
};

function ctrltoolbox() {
    var toolbox = $("#toolbox");
    if (toolbox.css("top") == "0px") {
        toolbox.animate({
            "height": page_tool + page_tool_move + "px",
            "top": -1 * page_tool_move + "px"
        });
        $("#keybtn,#postbtn").removeClass('closemenu');
    } else {
        toolbox.animate({
            "height": page_tool + "px",
            "top": "0px"
        });
        $("#keybtn,#postbtn").addClass("closemenu");
        $("#keybtn,#postbtn").removeClass("active");
    }
};

function actbtn(btn, msg) {
    $("#keybtn,#postbtn").removeClass('active');
    $(btn).addClass("active");
    $("#keymsg,#postmsg").css("display", "none");
    $(msg).css("display", "block");
};

function menubtn(btn, msg) {
    if ($(btn).attr("class").match("active") != null || $(btn).attr("class").match("closemenu") != null) {
        actbtn(btn, msg);
        ctrltoolbox();
    } else {
        actbtn(btn, msg);
    }
};


$(document).ready(function() {
    ////移除fc2浮動字
    $(".adingoFluctOverlay").html("").css("height", "0px");
    $("#unitedblades_div").html("").css("height", "0px");
    $("#ub_overlay").html("").css("height", "0px");
    ////遊戲視窗設定
    setPage();
    setSize();
    $(window).resize(function() {
        setSize();
    });
    ////菜單按鈕
    if (!supportTouch) {
        actbtn("#keybtn", "#keymsg");
        setTimeout(ctrltoolbox(), 500);
        $("#keybtn").click(function() {
            menubtn("#keybtn", "#keymsg");
        });
        $("#postbtn").click(function() {
            menubtn("#postbtn", "#postmsg");
        });
        $("#cltoolbtn").click(function() {
            ctrltoolbox();
        });
    } else {
        $("#keybtn,#postbtn").css("display", "none");
        $("#FB").css("left", "0px");
    };
    ////play按鈕
    $("#play").click(function() {
        $("#gameiframe").attr("src", game_url);
        $(this).css("display", "none");
        $("#gameiframe").css("display", "block");
        setTimeout(function() {
            $("#browser_warning").css("display", "block")
        }, 3000);
        var toolbox = $("#toolbox");
        if (toolbox.css("top") == -1 * page_tool_move + "px") {
            toolbox.animate({
                "height": page_tool + "px",
                "top": "0px"
            });
            ctrltoolbox();
        };
    });

    ////
});
