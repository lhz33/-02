$(function() {
    // 头部导航栏显示隐藏
    $(".top2 li").mouseover(function() {
        $(this).find(".x_nav").stop().slideDown(600);
    })
    $(".top2 li").mouseout(function() {
        $(this).find(".x_nav").stop().slideUp(600);
    })



    // banner轮播图的按钮
    $(".bleft").mouseover(function() {
        $(this).css("backgroundPosition", "0 -80px")
        $(this).siblings(".lbg").fadeIn()
    })
    $(".bleft").mouseout(function() {
        $(this).css("backgroundPosition", "0 0px")
        $(".lbg").fadeOut()
    })
    $(".bright").mouseover(function() {
        $(this).css("backgroundPosition", "0 -80px")
        $(this).siblings(".rbg").fadeIn()
    })
    $(".bright").mouseout(function() {
        $(this).css("backgroundPosition", "0 0px")
        $(this).siblings(".rbg").fadeOut()
    })


    // 精彩主题
    $(".jczt ul").on("mouseover", "li", function() {
        $(this).children("span").stop().fadeIn(700)
    });
    $(".jczt ul").on("mouseout", "li", function() {
        $(this).children("span").stop().fadeOut(700)
    });


    //背景固定
    $(document).scroll(function() {
        // 精彩主题距离文档顶部的距离
        var mainHdTop = $(".main_hd").offset().top;
        //文档卷入的距离
        var docTop = $("body,html").scrollTop();

        // 让ball滚动事件

        var ballTop = $(".rows .row:last").offset().top + 200;
        if (docTop > mainHdTop) {
            $(".main_bg").css({
                "position": "fixed",
                "top": 0,
            })

        } else {
            $(".main_bg").css({
                "position": "relative",
                "top": 0,
            })
        }
        // ball滚出事件
        if (docTop > ballTop) {
            $(".ball").css({
                "transform": "rotate(720deg)",
                "right": 0
            }).animate({

            });
        }
        //滚回去事件
        var gunback = ballTop + 700;
        if (docTop > gunback) {
            $(".ball").css({
                "transform": "rotate(-720deg)",
                "right": "-300px"
            }).animate({

            });
        }
        // 解除固定定位
        var jcdw = $(".rows .row:last").offset().top;
        if (docTop > jcdw) {
            $(".main_bg").css({
                "position": "relative",
                "top": "3210px"
            })
        }
    })


    // 第一个大图片显示
    // $(".sfq ul li").eq(0).css({
    //         "width": "545px"
    //     }).find(".small").css("display", "none").siblings(".big").css("display", "block")
    // 手风琴
    $(".sfq ul li .small").mouseover(function() {
            // $(this).stop().fadeOut().siblings(".big").stop().fadeIn().parents("li").stop().animate({
            //     width: 545
            //         // paddingTop: 20
            // }). .stop().animate({
            //     width: 150
            // }).find(".small").stop().fadeIn().siblings().stop().fadeOut()
            $(this).stop().fadeOut().siblings().stop().fadeIn().parents('li').stop().animate({ width: 545 }).siblings().stop().animate({ width: 150 }).find('.small').stop().fadeIn().siblings().stop().fadeOut()
        })
        // $(".sfq ul li")


    // function() {
    //         $(this).stop().animate({
    //             width: 150,
    //             // paddingTop: 20
    //         }).find(".small").stop().fadeIn().siblings(".big").fadeOut()
    //     }



    // main
    $(".main_hd .right").click(function() {
        $(this).find(".dd").stop().animate({
                left: 420
            }, 1500)
            // $(this).find(".bb").css({
            //     "left": 420
            // })
    });
    $(".main_hd .right").mouseout(function() {
        $(this).find(".dd").css({
                "left": -55
            })
            // $("this").find(".bb").stop().animate({
            //     left: -55
            // }, 2000)
    })

    $(".con_4").mouseover(function() {
        $(this).find(".con_4_b").stop().animate({
            width: 295
        }, 1000);
    });
    $(".con_4").mouseout(function() {
        $(this).find(".con_4_b").stop().animate({
            width: 240
        }, 1000);
    });
    // 主题乐园
    // var xz = 0;
    $(".ball a").mouseover(function() {
        $(this).css({
            "box-shadow": "0px 0px 10px 10px rgba(219, 219, 219,.5)"
        }).find("span").stop().fadeIn(500)
    })
    $(".ball a").mouseout(function() {
        $(this).css({
            "box-shadow": ""
        }).find("span").stop().fadeOut(500)
    });
    // 让ball旋转




    // 往期精彩活动
    // var index;
    var inx = 0;
    var tm = setInterval(function() {
        $(".jchd_f>ul>li").eq(inx).stop().fadeIn().siblings("li").stop().fadeOut()
        inx++;
        if (inx == 3) {
            inx = 0
        }
    }, 2000);




    $(".jchd_f .imgs").hover(function(e) {
        clearInterval(tm)
            // e.stopPropagation();
        $(this).find(".be").stop().animate({
            "left": "0px"
        }, 1500)
        $(this).find(".af").stop().animate({
            "left": "-0px"
        }, 1500).siblings(".nr").stop().fadeIn(2000);
    }, function() {

        $(this).find(".be").stop().animate({
            "left": "360px"
        }, 1500)
        $(this).find(".af").stop().animate({
            "left": "-360px"
        }, 1500).siblings(".nr").stop().fadeOut(1000);


        var inx = 0;
        tm = setInterval(function() {
            $(".jchd_f>ul>li").eq(inx).stop().fadeIn().siblings("li").stop().fadeOut()
            inx++;
            if (inx == 3) {
                inx = 0
            }
            console.log(1111);
        }, 2000);
    });
})


// 轮播图
// var cs = 0;
// var tim = setInterval(function() {
//     cs++;
//     var indx = $('.jchd_f >ul>li').length
//     if (cs == indx) {
//         cs = 0;
//     }
//     $(".jchd_f>ul").animate({
//         left: -cs * 1200
//     });
// }, 2000)



// var inx = 0;
// var tm = setInterval(function() {
//     $(".jchd_f>ul>li").eq(inx).animate({
//         "opacity": 1
//     }, 500, function() {
//         inx++

//     })
//     if (inx == 3) {
//         inx = 0
//     }
// }, 1000);
// var inx = 0;
// var tm = setInterval(function() {
//     $(".jchd_f>ul>li").eq(inx).stop().fadeIn().siblings("li").stop().fadeOut()
//     inx++;
//     if (inx == 3) {
//         inx = 0
//     }
// }, 3000);



// $(".jchd_f>ul").mouseover(function() {
//     // clearInterval(tm)
//     alert(111)
//     console.log(111111);
//     // $(".jchd_f>ul>li").animate().stop()
// });

// $(".jchd_f").on("mouseover", "li", function() {
//     console.log(1111111);
// });
// $(".jchd_f>ul").mouseout(function() {
//     var tm = setInterval(function() {
//         $(".jchd_f>ul>li").eq(inx).stop().fadeIn().siblings("li").stop().fadeOut()
//         inx++;
//         if (inx == 3) {
//             inx = 0
//         }
//     }, 3000);
// });