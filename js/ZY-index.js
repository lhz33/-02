$(function() {
    $('.theme').hover(function() {
        $(this).children().stop().slideToggle(500);
    });
    $('.choose').hover(function() {
        $(this).children().stop().slideToggle(500);
    });
    // 顶部下拉列表模块结束
    $('.list li').hover(function() {
        $(this).children().css('color', '#fff')
    }, function() {
        $(this).children().css('color', '')
    })
    $('.hotel_js').hover(function() {
        $(this).find('.news').stop().slideToggle(500);
        $(this).find('.news').children().css({
            'color': '#000',
        })
    });
    $('.news p').hover(function() {
            $(this).addClass('bgc').siblings().removeClass('bgc');
        }, function() {
            $(this).removeClass('bgc')
        })
        // 这是底部背景图鼠标移过切换背景位置
    $('.fot_head_t li').hover(function() {
            var index = $(this).index() * 168
            $(this).css({
                'transition': 'all .3s',
                'backgroundPosition': -index + 'px -50px'
            })
        }, function() {
            var index = $(this).index() * 168
            $(this).css({
                'transition': 'all .3s',
                'backgroundPosition': -index + 'px 0'
            })
        })
        // 这是banner模块的自动切换效果

    var flag = true;
    setInterval(function() {
        // console.log(899);
        if (flag) {
            $('.banner img:first').stop().animate({
                'opacity': '0',
            });
            $('.banner img:last').stop().animate({
                    'opacity': '1',
                })
                // console.log(899);
            flag = false
        } else {
            $('.banner img:last').stop().animate({
                'opacity': '0',

            });
            $('.banner img:first').stop().animate({
                'opacity': '1',
            });
            // console.log(123);
            flag = true;
        }
    }, 3000);
    // 这是banner上图片文字跳动效果
    var index = 0;
    var timer = setInterval(function() {
        $('.skip img').eq(index).slideDown().animate({
            'top': 20
        }, 'fast', function() {
            index++;
            if (index == 5) {
                clearInterval(timer);
                var ind = 5;
                // console.log($('.skip img'));
                var tim = setInterval(function() {
                    $('.skip img').eq(ind).slideDown().animate({
                        'top': 100
                    }, 'fast', function() {
                        ind++;
                    });
                    if (ind == 11) {
                        clearInterval(tim);
                        var inde = 12;
                        // console.log($('.skip img'));
                        // console.log($('.skip img').eq(inde));
                        var timee = setInterval(function() {
                            $('.skip img').eq(inde).slideDown().animate({
                                'top': 180
                            }, 'fast', function() {
                                inde++;
                            });
                            if (inde == 16) {
                                clearInterval(timee)
                            }
                        }, 50);

                    }
                }, 50);
            }
        });

    }, 50);
    var num = 17;
    var t = setInterval(function() {
            $('.skip img').eq(num).fadeIn().animate({
                left: 0
            }, function() {
                num++;
                if (num == 19) {
                    clearInterval(t);
                }
            })
        }, 400)
        // 文字跳动效果结束

    // 社交媒体模块
    $('.line img').hover(function() {
        $('.wechat').stop().fadeIn();
        $(this).css({
            'transform': 'scale(1.2)',
            'transition': 'all 1s'
        })
    }, function() {
        $('.wechat').stop().fadeOut();
        $(this).css({
            'transform': 'scale(1)',
            'transition': 'all 1s'
        })
    })
    $('.line1 img').hover(function() {
            $('.microblog').stop().fadeIn()
            $(this).css({
                'transform': 'scale(1.2)',
                'transition': 'all 1s'
            })
        }, function() {
            $('.microblog').stop().fadeOut();
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'all 1s'
            })
        })
        // 这是底部点击切换图片模块
    $('.model span').click(function() {
        $(this).addClass('tog').siblings().removeClass('tog');
        var index = $(this).index();
        // console.log(index);
        $(this).parents('.bot_tab').find('li').eq(index).stop().fadeIn().siblings('li').stop().fadeOut();

    });
    //    左右移动定时器
    $('.bot_tab ul li>img').stop().animate({
        opacity: 1,
    }, 1000, function() {
        $('.up img').stop().fadeIn().animate({
            'right': 0
        });
        $('.down img').stop().fadeIn().animate({
            'left': 0
        })
    })
    var a = 1;
    var tim = setInterval(function() {
            $('.model span').eq(a).click()
            a++;
            if (a == 4) {
                a = 0;
            }
        }, 3000)
        // 这是地图tab栏切换
    $('.tab span').click(function() {
        $(this).css('backgroundColor', '#8EA8E0').siblings().css('backgroundColor', '');
        var index = $(this).index();
        // console.log(index);
        $('.picture .pone').eq(index).show().siblings().hide();
    });
    // 这是右侧预定鼠标移入换背景图片
    $('.order').hover(function() {
        $(this).css('background', 'url(../images/ZY-60.png) no-repeat').children('.contact_phone').fadeIn(500)
    }, function() {
        $(this).css('background', '').children('.contact_phone').fadeOut(500)
    });
    // 返回顶部模块
    var contactOffset = $('.banner').offset().top + $('.banner').innerHeight() / 2;
    var linkOffset = $('.banner').offset().top;
    var btabOffset = $('.bot_tab').offset().top;
    // console.log(contactOffset);
    // console.log(scrotop);
    $(document).scroll(function() {
        var scrotop = $(document).scrollTop();

        // console.log(scrotop);
        if (scrotop >= contactOffset) {
            $('.return_top').fadeIn();
        } else {
            $('.return_top').fadeOut();
        }
        if (scrotop >= linkOffset) {
            $('.box_content_left img,.box_content_left  p,.box_content_left h1').stop().animate({
                marginLeft: 0
            }, 500);
        }
        if (scrotop >= linkOffset + 500) {
            $('.box_content_right img').stop().animate({
                marginLeft: 0
            }, 500);
        };
        if (scrotop >= btabOffset + 400) {
            $('.bot_con_box_left img,.bot_con_box_left h1,.bot_con_box_left p').stop().animate({
                marginLeft: 0
            }, 500);
        }
        if (scrotop >= btabOffset + 100) {
            $('.bot_con_box_right').stop().animate({
                right: 0
            }, 500);
        };
        if (scrotop >= btabOffset + 150) {
            $('.bjtp').stop().animate({
                left: 0
            }, 1000);
        }
    })
    $('.return_top').click(function() {
        var bdtop = $('html,body').scrollTop();
        // console.log(bdtop);
        $('html,body').animate({
            scrollTop: 0
        }, 'normal')
    })
})