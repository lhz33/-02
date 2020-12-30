// jQ
$(function () {
    //top下拉菜单显示
    $('.top .park').hover(function () {
        $('.top .park .list').stop().slideDown();
    }, function () {
        $('.top .park .list').stop().slideUp();
    });
    $('.top .hotel').hover(function () {
        $('.top .hotel .list').stop().slideDown();
    }, function () {
        $('.top .hotel .list').stop().slideUp();
    });

    // 导航模块js
    $('.nav .shang li a, .nav .slide').hover(function () {
        $('.slide').stop().fadeIn();
    }, function () {
        $('.slide').stop().fadeOut();
    });

    $('.nav .shang a:eq(0), .slideDown li:eq(0), .slide .logo').hover(function () {
        $('.nav .shang a:eq(0)').addClass('Y');
        $('.slideDown li').eq(0).addClass('bg_Y');
        $('.slideDown li:eq(0) a').addClass('Wcolor');
    }, function () {
        $('.nav .shang a:eq(0)').removeClass('Y');
        $('.slideDown li').eq(0).removeClass('bg_Y');
        $('.slideDown li:eq(0) a').removeClass('Wcolor');
    });
    $('.nav .shang a:eq(1), .slideDown li:eq(1)').hover(function () {
        $('.nav .shang a:eq(1)').addClass('R');
        $('.slideDown li').eq(1).addClass('bg_R');
        $('.slideDown li:eq(1) a').addClass('Wcolor');
    }, function () {
        $('.nav .shang a:eq(1)').removeClass('R');
        $('.slideDown li').eq(1).removeClass('bg_R');
        $('.slideDown li:eq(1) a').removeClass('Wcolor');
    });
    $('.nav .shang a:eq(2), .slideDown li:eq(2)').hover(function () {
        $('.nav .shang a:eq(2)').addClass('G');
        $('.slideDown li').eq(2).addClass('bg_G');
        $('.slideDown li:eq(2) a').addClass('Wcolor');
    }, function () {
        $('.nav .shang a:eq(2)').removeClass('G');
        $('.slideDown li').eq(2).removeClass('bg_G');
        $('.slideDown li:eq(2) a').removeClass('Wcolor');
    });
    $('.nav .shang a:eq(3), .slideDown li:eq(3)').hover(function () {
        $('.nav .shang a:eq(3)').addClass('B');
        $('.slideDown li').eq(3).addClass('bg_B');
        $('.slideDown li:eq(3) a').addClass('Wcolor');
    }, function () {
        $('.nav .shang a:eq(3)').removeClass('B');
        $('.slideDown li').eq(3).removeClass('bg_B');
        $('.slideDown li:eq(3) a').removeClass('Wcolor');
    });
    $('.nav .shang a:eq(4), .slideDown li:eq(4), .slide .ticket').hover(function () {
        $('.nav .shang a:eq(4)').addClass('P');
        $('.slideDown li').eq(4).addClass('bg_P');
        $('.slideDown li:eq(4) a').addClass('Wcolor');
    }, function () {
        $('.nav .shang a:eq(4)').removeClass('P');
        $('.slideDown li').eq(4).removeClass('bg_P');
        $('.slideDown li:eq(4) a').removeClass('Wcolor');
    });

    //视频模块js
    $('.bofang .vid_list span').click(function () {
        index = $(this).index();
        var video = $('.bofang .vid_optic video');
        video[index].currentTime = 0;
        $(this).addClass('videocss').siblings().removeClass('videocss');
        $('.bofang .vid_tag span').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
        $('.bofang .vid_optic video').eq($(this).index()).trigger('play').css('display', 'block').siblings().css('display', 'none').trigger('pause');
    })
    var span = $('.bofang .vid_list span');
    var index = 0;
    var timer = setInterval(function () {
        index++
        if (index >= 4) {
            index = 0
        }
        span.eq(index).click();
    }, 4000);
    $('.bofang .vid_optic video').hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            index++
            if (index == 4) {
                index = 0
            }
            span.eq(index).click();
        }, 4000);
    })

    
    //侧边导航栏
    $('.reserve a').hover(function() {
        var index = $(this).index();
            //微信
        if(index == 0) {
            $(this).eq(index).css('backgroundColor', '#9b2a88');
            $('.reserve em').eq(index).css('backgroundPosition', '-5px -7px');
            $('.reserve img').eq(index).css('display', 'block').stop().animate({
                left: -150
            }, 500);
        } else if(index == 1) {
            //微博
            $('.reserve a').eq(index).css('backgroundColor', '#9b2a88');
            $('.reserve em').eq(index).css('backgroundPosition', '-40px -7px');
            $('.reserve img').eq(index).css('display', 'block').stop().animate({
                left: -150
            }, 500);
        } else if(index == 2) {
            //电话
            $('.reserve a').eq(index).css('backgroundColor', '#9b2a88');
            $('.reserve em').eq(index).css('backgroundPosition', '-86px -7px');
            $('.reserve img').eq(index).css('display', 'block').stop().animate({
                left: -240
            }, 500);
        } 
    }, function() {
        var index = $(this).index();
        if(index == 0) {
            //微信
            $(this).eq(index).css('backgroundColor', '');
            $('.reserve em').eq(index).css('backgroundPosition', '-5px -45px');
            $('.reserve img').eq(index).css({
                'display' : 'none',
                'left' : '-180px'
            });
        } else if(index == 1) {
            //微博
            $('.reserve a').eq(index).css('backgroundColor', '');
            $('.reserve em').eq(index).css('backgroundPosition', '-40px -45px');
            $('.reserve img').eq(index).css({
                'display' : 'none',
                'left' : '-180px'
            });
        } else if(index == 2) {
            //电话
            $('.reserve a').eq(index).css('backgroundColor', '');
            $('.reserve em').eq(index).css('backgroundPosition', '-86px -45px');
            $('.reserve img').eq(index).css({
                'display' : 'none',
                'left' : '-270px'
            });
        }
    })
    
})

