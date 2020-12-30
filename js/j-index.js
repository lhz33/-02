window.onload = function () {
 
  
  var imgs = document.querySelector(".shixiang ");
  var fang = document.querySelector(".fangwu");
  var ping = document.querySelector(".caoping");
  var xiao = document.querySelector(".xiaoren");
  document.addEventListener("mousemove", function (e) {
        
    imgs.style.left = e.pageX / 10 + 'px';
    fang.style.left = -e.pageX / 10 + "px";
    ping.style.left = e.pageX / 10 + 'px';
    xiao.style.left = e.pageX / 10 + 'px';
  }
  );


  $(".j_nav_tb").hover(function () {
 
    $(this).children(".j_nav").stop().slideToggle();
   
  });
  $(".j_xiala").hover(function () {
    // alert(123);
    $(this).children(".j_dp").stop().slideToggle();
  })
 
  $(".j_chan").hover(function () { 
    $(".j_link_h").stop().fadeIn();
  })
  $(".j_chan").mouseout (function () { 
    $(".j_link_h").fadeOut();
  })
  $(".j_dou").hover(function () { 
    $(".j_link_wb").fadeIn();
  })
  $(".j_dou").mouseout(function () { 
    $(".j_link_wb").fadeOut();
  })
  $(".j_dianhua").hover(function () { 
    $(".j_yq_hm").fadeIn();
  })
  $(".j_dianhua").mouseout(function () { 
    $(".j_yq_hm").fadeOut();
  })
  $(".j_tubiao").hover(function () { 
    $(".j_link_zt").fadeIn();
  })
  $(".j_tubiao").mouseout(function () { 
    $(".j_link_zt").fadeOut();
  })

  $(".j_huazhou_x").click(function() {
    $(".j_huazhou").animate({
        left: 650,
        top: 650,
      
    }, 1500);
    
      $(".j_jia").fadeIn();
    
})
  $(".j_jia").click(function () { 
    $(".j_huazhou").animate({
      left: 650,
     top: 250,
    
    }, 1500);
    $(".j_jia").fadeOut();
  })

  $(".j_down").click(function () { 
    $(".j_content").animate({
      left: 1466,
      top: 750,
  
    }, 1000);
    $(this).hide();
  })

  $(".j_content li").click(function () { 
    $(".j_content").animate({
      left: 1466,
      top: 573,
  
    }, 1000);

    var index = $(this).index();

    console.log(index);
    $(".j_content_C .j_content_ul").eq(index).show().siblings().hide();
    $(".j_down").show();
  })


  // $(document).snowfall('huaduo');
  // $(document).snowfall({
  //     image: "../images/花朵.png",
  //     flakeCount:30,
  //     minSize: 5,
  //     maxSize: 22
  // });

} 