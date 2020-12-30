$(function() {

    $(".top-left a").mouseover(function() {
        $(this).css("color", "#a7d7f8").siblings("a").css("color", "")
    })
    $(".top-left a").mouseout(function() {
        $(this).css("color", "")
    })
    $(".droplist_park").mouseover(function() {
        // console.log(123);
        $(this).children(".ul_park").stop().slideDown(300)
    })

    $(".droplist_park").mouseout(function() {
        // console.log(456);
        $(this).children(".ul_park").stop().slideUp(300)
    })

    $(".ul_park li").mouseover(function() {
        $(this).children(".ul_park_wuhu").addClass("black1")
    })

    $(".ul_park li").mouseout(function() {
        $(this).children(".ul_park_wuhu").removeClass("black1")
    })

    $(".topNavBtns_zone").mouseover(function() {
        // console.log($(this).index());
        $(this).children(".topNavBtns").css("color", "yellow").children(".drop_left").addClass("current");
        $(this).children(".topNavOPlist").addClass("current")
        
    })

    $(".topNavBtns_zone").mouseout(function() {
        // console.log(456);
        $(this).children(".topNavBtns").css("color", "").children(".drop_left").removeClass("current");
        $(this).children(".topNavOPlist").removeClass("current")
    })
    // $(".i1").mouseover(function() {
    //     // console.log(123);
    //     var index = $(this).parents(".md-content").index()
    //     var flag = true;
    //     clearInterval(time)
    //     var time = setInterval(function() {
    //         if (flag == true) {
    //             // console.log($(this));
    //             $(".md-content").eq(index).find("b").fadeIn(500).siblings("i").fadeOut(500);
    //             // $(this).fadeIn(500).siblings("b").fadeOut(500);
    //             flag = false
    //         }else {
    //             $(".md-content").eq(index).find("b").fadeOut(500).siblings("i").fadeIn(500);
    //             // $(this).fadeOut(500).siblings("b").fadeIn(500);
    //             flag = true
    //         }
    //         $(".i1").mouseout(function() {
    //             // console.log(456);
    //             clearInterval(time);
    //             $(".md-content").eq(index).find("b").fadeIn(500).siblings("i").fadeIn(500);
    //             // $(this).fadeIn(500).siblings("b").fadeIn(500);
    //         })
    //     }, 1000)
        
    // })
    $(".pic-list").mouseover(function() {
        $(this).find("p").stop().fadeIn(700);
        // $(this).find("p").stop().animate({
        //     top: 0
        // })
    })
    $(".pic-list").mouseout(function() {
        $(this).find("p").stop().fadeOut(700);
        // $(this).find("p").stop().animate({
            // top: -500
        // })
    })
    
    $(".weixin a").mouseover(function() {
        $(this).siblings(".weixin_hide").fadeIn(300)
        
    })
    $(".weixin a").mouseout(function() {
        $(this).siblings(".weixin_hide").fadeOut(300)

    })
    $(".telphone a").mouseover(function() {
        $(this).siblings(".telphone_hide").fadeIn(300)
        
    })
    $(".telphone a").mouseout(function() {
        $(this).siblings(".telphone_hide").fadeOut(300)

    })

    $(".ding").click(function() {
        console.log(123);
        var top = $(".top").offset().top;
        $("html, body").animate({
            scrollTop: top
        })
    })






























})
