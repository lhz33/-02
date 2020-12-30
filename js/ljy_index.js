/**
 * Created by lichan on 2018/12/17.
 */
$(function(){
    var width=$(window).width();
    $(".navs li").mouseenter(function(){
        $(this).addClass("actived").siblings().removeClass("actived");
        var index=$(this).index();
        $(".xiala .xiala1").slideUp(500);
        if(index>0){
            $(".xiala .xiala1").eq(index-1).slideDown(500);
        }
    });
    $(".header").mouseleave(function(){
        $(".xiala .xiala1").slideUp(0);
        $(".navs li").removeClass("actived");
    });
    var _index=0
    $(".hotel_park  div").click(function(){
        _index=$(this).index();
       $(this).addClass("actived").siblings().removeClass("actived");
        $(".choose_s>div").eq(_index).addClass("actived").siblings().removeClass("actived")
    })



    var scrollTop;
    var diccet;
    var flags=true;
    $(window).scroll(function() {
        if($(window).scrollTop()>=scrollTop){
            diccet="down"
        }else{
            diccet="up"

        }
         scrollTop=$(window).scrollTop();
        //console.log(diccet);
        if(scrollTop>=900){
            $(".header").css({
                position: "fixed",
            });
            $(".tabs").addClass("actived");
            if(width<768){
                $(".city").addClass("actived")
            }else{
                $(".city").removeClass("actived")
            }
                $(".buy1").show();
            $(".buy2").removeClass("buy2visible").slideUp(500);


        }else{
            $(".header").css({
                position: "absolute"

            });
            $(".tabs").removeClass("actived");
            $(".city").removeClass("actived");

            $(".buy2").slideDown(500,function(){
                $(".buy2").addClass("buy2visible")
            });

            $(".buy1").hide();

        }
    });
    $(".buy1").click(function(){
        $(".buy2").slideDown(500,function(){
            $(".buy2").addClass("buy2visible")
        });


        $(this).hide();
        $(".up").slideDown(500)
    })
    $(".up").click(function(){
        $(".buy2").removeClass("buy2visible").slideUp(500);

        $(".buy1").show();
        $(this).hide()
    })

    $(".inputs").focus(function(){
        $(this).siblings(".city").slideDown()
    });
    $(".inputs").mouseenter(function(){
        $(this).siblings(".city").slideDown()

    })
    $(".inputs").blur(function(){
        $(this).siblings(".city").slideUp()
    });

    var citypinyin;
    $(".choose .city li").click(function(){
        var val=$(this).html();
        $(this).parents(".city").siblings(".inputs").get(0).value=val;
        $(".city").slideUp();
        citypinyin = $(this).get(0).dataset["city"];
    })

      // 转码
      function uniencode(text) {
        text = escape(text.toString()).replace(/\+/g, "%2B");
        var matches = text.match(/(%([0-9A-F]{2}))/gi);
        if (matches) {
            for (var matchid = 0; matchid < matches.length; matchid++) {
                var code = matches[matchid].substring(1, 3);
                if (parseInt(code, 16) >= 128) {
                    text = text.replace(matches[matchid], '%u00' + code);
                }
            }
        }
        text = text.replace('%25', '%u0025');
        return text;
    }
    // 选择城市
    $(".button").click(function(){
        var clientWidth=document.body.clientWidth
        if(_index==0){
            var CityPark = $(this).siblings(".choose").find("input").val();
            CityPark = CityPark.replace(/\s*/g,"") ;       
            if (CityPark == "" || CityPark == null || CityPark == "undefined") {
                alert("请选选择城市！");
                return false;
            }
            // var tempwindow=window.open('_blank');
            if(clientWidth>=900){
                window.open("https://payticket.fangte.com/park.shtml?City="+uniencode(CityPark),'_blank')
            }else{
                window.location.href="https://ftwx.fangte.com/"+citypinyin;
            }
         
            
        }else if(_index==1){
            var CityPark = $(this).siblings(".choose").find("input").val();
            CityPark = CityPark.replace(/\s*/g,"");
        
            if (CityPark == "" || CityPark == null || CityPark == "undefined") {
                alert("请选选择酒店！");
                return false;
            } 
            // var tempwindow=window.open('_blank');  
            if(CityPark=="芜湖方特酒店"){
                if(clientWidth>=900){
                    window.open("https://hotel.fangte.com/",'_blank')
                }else{
                    window.location.href="tel:0553-2295666";
                }
               
            }
            if(CityPark=="沈阳方特花园酒店"){
                if(clientWidth>=900){
                    window.open("https://payticket.fangte.com/Hotel/hotalIntro.html?desc=1002",'_blank')
                }else{
                    window.location.href="https://ftwx.fangte.com/hotel/#/hotal?hid=1002";
                }
               
            }
            if(CityPark=="株洲方特东厢酒店"){
                if(clientWidth>=900){
                    window.open("https://payticket.fangte.com/Hotel/hotalIntro.html?desc=1001",'_blank')
                }else{
                    window.location.href="https://ftwx.fangte.com/hotel/#/hotal?hid=1001";
                }
              
            }
            if(CityPark=="郑州方特假日酒店"){
                if(clientWidth>=900){
                    window.open("https://payticket.fangte.com/Hotel/hotalIntro.html?desc=1003",'_blank')
                }else{
                    window.location.href="https://ftwx.fangte.com/hotel/#/hotal?hid=1003";
                }
           
            }
         
        }
        
    })




    $(".parks").mouseenter(function(){
        $(this).find(".pack_div0").fadeIn();
        $(this).find(".pack_div").fadeOut()

    });
    $(".parks").mouseleave(function(){
        $(this).find(".pack_div0").fadeOut();
        $(this).find(".pack_div").fadeIn()

    });
    var flag=0;
    $(".menu").click(function(){
        $(".menus").show();
    });
    $(".logo").click(function(){
        $(".menus").hide();

    });
    $(".return").click(function(){
        $(".menus").hide();
    })

    $(".garden_heigth li").click(function(){
        if($(this).data("garden")){
            $(".mask").show();
            var garden=$(this).data("garden");
            $(".mask").find("."+garden).show();
        }

    });
    $(".close").click(function(){
        $(".mask").hide();
        $(".mask div").hide();
    })


   
})