$(function () {
    $(".p1-header .nal-tag a").mouseover(function () {
        var moveIndex = $(this).index();
        $(this).addClass("adcss").siblings("a").removeClass("adcss");
        $(".p1-header .nal-list li:eq(" + moveIndex + ") div").stop().slideDown();
        $(".p1-header .nal-list li:eq(" + moveIndex + ")").siblings("li").find("div").stop().slideUp();
    });
    $(".p1-header").mouseleave(function () {
        $(".p1-header .nal-list li div").stop().slideUp();
        $(".p1-header .nal-tag a").removeClass("adcss");
    });
    // $(".header .nal-tag a").mouseover(function () {
    //     var moveIndex = $(this).index();
    //     $(this).addClass("adcss").siblings("a").removeClass("adcss");
    //     $(".header .nal-list li:eq(" + moveIndex + ") div").slideDown();
    //     $(".header .nal-list li:eq(" + moveIndex + ")").siblings("li").find("div").slideUp();
    // });
    // $(".header .nal-list").mouseleave(function () {
    //     $(".header .nal-list li div").slideUp();
    //     $(".header .nal-tag a").removeClass("adcss");
    // });
});

$(function () {
    $(".p2-cpbox").mouseover(function () {
        $(this).find("div").stop().animate({ "left": "-273px" }, 200);
    }),
        $(".p2-cpbox").mouseleave(function () {
            $(this).find("div").stop().animate({ "left": "0" }, 200);
        })
});

// 房间选择
$(function () {
    // function rmLeft() {
    //     $(".romm-scroll").css("left", "-276px");
    //     $(".romm-scroll").prepend($(".romm-scroll .p2-pbox:last").clone());
    //     $(".romm-scroll .p2-pbox:last").remove();
    //     $(".romm-scroll").animate({ "left": "0" }, 1000);
    // }
    // var interRoom = setInterval(rmLeft, 3000);

    function abLeft() {
        $(".abt-scroll").css("left", "-100%");
        $(".abt-scroll").prepend($(".abt-scroll .abt-bsimg:last").clone());
        $(".abt-scroll .abt-bsimg:last").remove();
        $(".abt-scroll").animate({ "left": "0" }, 1000);
    }
    var interRoom = setInterval(abLeft, 4000);
});

$(function () {
    try {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.463147, 31.364163);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 鍒涘缓鏍囨敞
        map.addOverlay(marker);
        map.enableScrollWheelZoom(true);
    }
    catch (Ex) { }
});

$(function () {
    var n = 0;
    $(".arrow img").click(function () {
        n = n >= 3 ? 0 : ++n;
        sw = n * 100;
        $(".scroll").animate({ "top": "-" + sw + "%" }, 900);
        $(".senPart span:eq(" + n + ")").addClass("sencss").siblings("span").removeClass("sencss");
        if (n == 3) {
            $(".p4-ctact").animate({ "left": "0" }, 600);
            $(".p4-map").animate({ "right": "0" }, 600);
        }
        else {
            $(".p4-ctact").animate({ "left": "-1000px" }, 600);
            $(".p4-map").animate({ "right": "-1000px" }, 600);
        }
        if (n == 0) {
            $(".header").hide();
            $(".p1-wimg0").animate({ "top": "0px" }, 1000);
            $(".p1-wimg1").show();
        }
        else {
            $(".header").show();
            $(".p1-wimg0").animate({ "top": "-700px" });
            $(".p1-wimg1").hide();
        }
    });
});

$(".senPart span").click(function () {
    var spanIndex = $(this).index();
    n = spanIndex;
    sw = n * 100;
    $(".scroll").animate({ "top": "-" + sw + "%" }, 900);
    $(this).addClass("sencss").siblings("span").removeClass("sencss");
    if (n == 3) {
        $(".p4-ctact").animate({ "left": "0" }, 600);
        $(".p4-map").animate({ "right": "0" }, 600);
    }
    else {
        $(".p4-ctact").animate({ "left": "-1000px" }, 600);
        $(".p4-map").animate({ "right": "-1000px" }, 600);
    }
    if (n == 0) {
        $(".header").hide();
        $(".p1-wimg0").animate({ "top": "0px" }, 1000);
        $(".p1-wimg1").show();
    }
    else {
        $(".header").show();
        $(".p1-wimg0").animate({ "top": "-700px" });
        $(".p1-wimg1").hide();
    }
});

function scrollEvent(n) {
    sw = n * 100;
    $(".scroll").animate({ "top": "-" + sw + "%" }, 900);
    $(".senPart span:eq(" + n + ")").addClass("sencss").siblings("span").removeClass("sencss");
    if (n == 3) {
        $(".p4-ctact").animate({ "left": "0" }, 600);
        $(".p4-map").animate({ "right": "0" }, 600);
    }
    else {
        $(".p4-ctact").animate({ "left": "-1000px" }, 600);
        $(".p4-map").animate({ "right": "-1000px" }, 600);
    }
    if (n == 0) {
        $(".header").hide();
        $(".p1-wimg0").animate({ "top": "0px" }, 1000);
        $(".p1-wimg1").show();
    }
    else {
        $(".header").show();
        $(".p1-wimg0").animate({ "top": "-700px" });
        $(".p1-wimg1").hide();
    }
};

$(".contain").bind('mousewheel', function (event, delta) {
    if ($(event.target).closest(".p4-map").length == 0) {
        var $this = $(this),
            timeoutId = $this.data('timeoutId');
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        $this.data('timeoutId', setTimeout(function () {
            //do something
            if (delta > 0) {
                if (n > 0) {
                    n--;
                    scrollEvent(n);
                }
            }
            else if (delta < 0) {
                if (n < 4) {
                    if (n == 3) {
                        var winHeight = $(window).height();
                        var prop = 196 / winHeight;
                        sw = (3 + prop) * 100;
                        $(".scroll").animate({ "top": "-" + sw + "%" }, 500);
                        n = 4;
                    }
                    if (n < 3) {
                        n++;
                        scrollEvent(n);
                    }
                }
            }
            $this.removeData('timeoutId');
            $this = null;
        }, 120));
        return false;
    }
    /*else{
        return;
        }*/
});

// 侧边栏动画
//var ieindex=parseInt($.browser.version);
$(function () {

    $("div  .weixin").mouseover(function () {
        $("img.wx-img").stop().fadeIn(50);
        $("img.wx-img").stop().animate({ "opacity": "1", "left": "-150px" }, 500);
        $(".order-box").stop().animate({ "opacity": "0", "left": "-270px" }, 100);
        $(".order-box").stop().fadeOut(1);
        calendar.stop().hide();
    }).mouseleave(function () {
        $("img.wx-img").stop().animate({ "opacity": "0", "left": "-180px" }, 100);
        $("img.wx-img").stop().fadeOut(1);
    });
    $("div  .sina").mouseover(function () {
        $(this).find("img").stop().fadeIn(50);
        $(this).find("img").stop().animate({ "opacity": "1", "left": "-150px" }, 500);
        $(".order-box").stop().animate({ "opacity": "0", "left": "-270px" }, 100);
        $(".order-box").stop().fadeOut(1);
        calendar.stop().hide();
    }).mouseleave(function () {
        $(this).find("img").stop().animate({ "opacity": "0", "left": "-180px" }, 100);
        $(this).find("img").stop().fadeOut(1);
    })
    $("div  .tel").mouseover(function () {
        $(this).find("img").stop().fadeIn(50);
        $(this).find("img").stop().animate({ "opacity": "1", "left": "-240px" }, 500);
        $(".order-box").stop().animate({ "opacity": "0", "left": "-270px" }, 100);
        $(".order-box").stop().fadeOut(1);
        calendar.stop().hide();
    }).mouseleave(function () {
        $(this).find("img").stop().animate({ "opacity": "0", "left": "-270px" }, 100);
        $(this).find("img").stop().fadeOut(1);
    });
    $("div  .res-order").mouseover(function () {
        $(".order-box").stop().show();
        $(".order-box").stop().animate({ "opacity": "1", "left": "-210px" }, 500)
    }).mouseleave(function () {
        $(".order-box").stop().animate({ "opacity": "0", "left": "0" }, 500, function () {
            $(".order-box").stop().hide();
        });

    });



});

$(function () {
    $(".reserve .weixin img").css("left", "-200px");
    $(".reserve .sina img").css("left", "-200px");
    $(".reserve .tel img").css("left", "-290px")
    $(".reserve .weixin").mouseover(function () {
        $(this).find("img").animate({ "left": "-150px" }, 800);
        $(this).find("img").fadeIn();
    }).mouseleave(function () {
        $(this).find("img").hide();
        $(this).find("img").animate({ "left": "-200px" });

    })
    $(".reserve .sina").mouseover(function () {
        $(this).find("img").animate({ "left": "-150px" }, 800);
        $(this).find("img").fadeIn();
    }).mouseleave(function () {
        $(this).find("img").hide();
        $(this).find("img").animate({ "left": "-200px" });

    })
    $(".reserve .tel").mouseover(function () {
        $(this).find("img").animate({ "left": "-240px" }, 800);
        $(this).find("img").fadeIn();
    }).mouseleave(function () {
        $(this).find("img").hide();
        $(this).find("img").animate({ "left": "-290px" });

    })
});
