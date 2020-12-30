$(function() {
    // 1.头部导航栏模块
    $('.Y_hnav1_r1 , .menu').hover(function() {
        $(this).children('ul').stop().fadeToggle();

    })
    $('.Y_hnav2_list li').hover(function() {
        $(this).children('ul').stop().slideToggle();

    })
    $('.Y_hnav2_list li').mouseover(function() {
        $(this).find('.Y_xian').stop().animate({
            left: 0
        }, 500)
    })
    $('.Y_hnav2_list li').mouseout(function() {
            $(this).find('.Y_xian').stop().animate({
                left: '-100%'
            }, 500)
        })
        // 2.头部轮播图模块
        // 设置节流阀
    var flag = true;
    // 1.根据图片数量创建li小圆点
    var hlb = $('.Y_hlb_img');
    // alert(hlb.length)
    for (var i = 0; i < hlb.length; i++) {
        var li = `<li></li>`;
        $('.Y_circle').append(li);
    }
    // 获取一下轮播图的宽度
    var hlb_outerWidth = $('.Y_hlb').outerWidth();
    // console.log(hlb_outerWidth);
    var index = 0;
    $('.Y_circle').on('click', 'li', function() {
            index = $(this).index();
            // console.log(index);
            // 排他加类名
            $(this).addClass('Y_current').siblings().removeClass('Y_current')
                // 让轮播图移动

            $('.Y_hlb_box').stop().animate({
                left: -index * hlb_outerWidth
            }, 500)
        })
        // 页面加载给第一个小圆点背景色
    $('.Y_circle li').eq(0).addClass('Y_current');
    // 让轮播图无缝衔接,克隆第一张轮播图放在最后面
    $('.Y_hlb_img').eq(0).clone(true).appendTo('.Y_hlb_box');
    $('.arrow_prev').addClass('arrow');
    // 给左右按钮点击事件
    var num = 0; //控制轮播图移动
    //控制小圆点样式
    var circle = 0;
    $('.arrow_next').click(function() {

        if (flag) {
            flag = false;
            if (num == $('.Y_hlb_img').length - 1) {
                num = 0;

                $('.Y_hlb_box').offset({
                    left: 0
                })
            }
            num++;

            $('.Y_hlb_box').animate({
                left: -num * hlb_outerWidth + 'px'
            }, 500, function() {
                flag = true;
            });
            circle++;
            if (circle == $('.Y_circle li').length) {
                circle = 0;
                $('.arrow_prev').addClass('arrow');
            } else {
                $('.arrow_prev').removeClass('arrow');
            }
            $('.Y_circle li').eq(circle).addClass('Y_current').siblings().removeClass('Y_current');

        }
    })
    $('.arrow_prev').click(function() {

        if (flag) {
            flag = false;
            num--;
            circle--;
            if (num < 0) {
                num = 0
                circle = 0;
                $(this).addClass('arrow');
            }
            $('.Y_hlb_box').animate({
                    left: -num * hlb_outerWidth + 'px'
                }, 500, function() {
                    flag = true;
                })
                // circle--;
                // circle < 0 ? circle = $('.Y_circle li').length - 1 : circle


            $('.Y_circle li').eq(circle).addClass('Y_current').siblings().removeClass('Y_current')

        }
    })
    $('.Y_hlb').mouseover(function() {
        clearInterval(timer);
        timer = null;
    })
    $('.Y_hlb').mouseout(function() {
            timer = setInterval(function() {
                $('.arrow_next').click()
            }, 2000)
        })
        // 设置定时器让轮播图自动播放
    var timer = setInterval(function() {
        $('.arrow_next').click()
    }, 2000)


    // 3.线条区域动画
    // 思路:1.先让线条left-100%,设置页面滚动事件,当页面滚动距离大于等于按钮离页面的top距离时,让线条left0
    // 2.当页面滚动到大于等于banner-nav区域到顶部的距离的时候,让left-100%
    var hlbTop = $('.Y_hlb_box').offset().top;
    var lastLinerTop = $('.Y_liner12').offset().top;
    console.log(hlbTop);
    console.log(lastLinerTop);

    // 5.footer动画
    var footer = $('.Y_footer').offset().top;

    $(window).scroll(function() {
        // if ($(document).scrollTop() >= hlbTop ) {
        //     $('.Y_liner_box>div').stop().animate({
        //         left: 0
        //     }, 700
        // , function () {
        //     $('.Y_liner_box>div').stop().animate({
        //         width: '-=10px'
        //     }, 200
        //         , function () {
        //             $('.Y_liner_box>div').stop().animate({
        //                 width: '+=10px'
        //             }, 200
        //                 , function () {
        //                     $('.Y_liner_box>div').stop().animate({
        //                         width: '-=10px'
        //                     }, 200

        //                     )
        //                 }
        //             )
        //     }
        //     )
        // }
        // );
        // Y_liners();



        // }
        // else {
        //     $('.Y_liner_box>div').stop().animate({
        //         left: '-100%'
        //     }, 300)

        // };

        // 5.footer动画
        if ($(document).scrollTop() >= footer) {
            $('.Y_fbImg6').animate({
                    bottom: 15
                }, 500)
                .siblings('.Y_fbImg4').animate({
                    bottom: 3
                }, 1200)
                .siblings('.Y_fbImg2').animate({
                    bottom: 3
                }, 1300)
                .siblings('.Y_fbImg1').animate({
                    bottom: 460
                }, 1500)
                .siblings('.Y_fbImg3').animate({
                    bottom: 393
                }, 2000)
                .siblings('.Y_fbImg7').animate({
                    bottom: 125
                }, 1500)
                .siblings('.Y_fbImg5').animate({
                    bottom: 175
                }, 2800)
        }
    });

    // 动画函数封装
    // var Y_liners = function () {
    $('.Y_liner_box>div').stop().animate({
            left: 0
        }, 700)
        // 先快速
    var timeo1 = setTimeout(function() {
        $('.Y_liner_box>div').stop().animate({
            width: '-=10px'
        }, 200)
    }, 700);
    var timeo2 = setTimeout(function() {
        $('.Y_liner_box>div').stop().animate({
            width: '+=10px'
        }, 200)
    }, 900);
    var timeo3 = setTimeout(function() {
        $('.Y_liner_box>div').stop().animate({
            width: '-=10px'
        }, 200)
    }, 1100);
    // 后慢速
    var flag1 = true;
    var liner1 = setInterval(function() {
        if (flag1) {
            $('.Y_liner1,.Y_liner10, .Y_liner5, .Y_liner8').stop().animate({
                width: '+=20px'
            }, 1300)
            flag1 = false;
        } else {
            $('.Y_liner1,.Y_liner10, .Y_liner5, .Y_liner8').stop().animate({
                width: '-=20px'
            }, 1300)
            flag1 = true
        }
    }, 1300);
    var liner2 = setInterval(function() {
        if (flag1) {
            $('.Y_liner11,.Y_liner2, .Y_liner7, .Y_liner4').stop().animate({
                width: '+=20px'
            }, 1320)
            flag1 = false;
        } else {
            $('.Y_liner11,.Y_liner2, .Y_liner7, .Y_liner4').stop().animate({
                width: '-=20px'
            }, 1320)
            flag1 = true
        }
    }, 1320);
    var liner3 = setInterval(function() {
        if (flag1) {
            $('.Y_liner12,.Y_liner9, .Y_liner3, .Y_liner6').stop().animate({
                width: '+=20px'
            }, 1350)
            flag1 = false;
        } else {
            $('.Y_liner12,.Y_liner9, .Y_liner3, .Y_liner6').stop().animate({
                width: '-=20px'
            }, 1350)
            flag1 = true
        }
    }, 1350);
    // }

    // 4.banner区域轮播图
    // 获取页面宽度
    var Y_blb = $('.Y_blb').outerWidth();
    var times = 0; //控制轮播图播放
    var circles = 0; //控制小圆点
    // 让轮播图无缝衔接,克隆第一张轮播图放在最后面
    $('.Y_lb_img1').clone(true).appendTo('.Y_lb');
    $('.Y_lb').click(function() {

        if (times == $('.Y_lb>div').length - 1) {
            times = 0;
            $(this).offset({
                left: 0
            })
        }
        times++;
        $(this).stop().animate({
            left: -times * Y_blb + 'px'
        }, 30)

        circles++;
        if (circles == $('.Y_bCicle li').length) {
            circles = 0;
        }
        $('.Y_bCicle li').eq(circles).addClass('Y_bCurrent').siblings().removeClass('Y_bCurrent');
    })
    setInterval(function() {
        $('.Y_lb').click();
    }, 3000);

    // 5.右侧悬浮窗
    $('.Y_fixed ul li').hover(function() {
        $(this).children('.Y_erweima').stop().fadeToggle()
    })
    $('.Y_toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    })

})