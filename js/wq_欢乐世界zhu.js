function isMouseLeaveOrEnter(e, handler) {
    if (e.type != 'mouseout' && e.type != 'mouseover') return false;
    var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;
    while (reltg && reltg != handler)
        reltg = reltg.parentNode;
    return (reltg != handler);
}

function addright(j) {
    var oDiv = $('.' + j);
    oDiv.stop().animate({ right: 0 }, 500);
}

function reright(j) {
    var oDiv = $('.' + j);
    oDiv.stop().animate({ right: -342 }, 500);
}

function addl(j) {
    var oDiv = $('.' + j);
    oDiv.stop().animate({ left: 0 }, 500);
}

function rel(j) {
    var oDiv = $('.' + j);
    oDiv.stop().animate({ left: -349 }, 500);
}

function addt(j) {
    var oDiv = $('.' + j);
    oDiv.stop().animate({ bottom: 0 }, 500);
}

function ret(j) {
    var oDiv = $('.' + j);
    oDiv.stop().animate({ bottom: -298 }, 500);
}

function chin(j) {
    $(".chover").hide();
    $('.' + j).show();
    $('.' + j).find('span').stop().animate({ top: 0 }, 500);
}

function chout(j) {
    $(".chover").hide();
    $('.' + j).find('span').stop().animate({ top: -210 }, 0);
}
function dituah(j) {
    var oDiv = $('.' + j);

    oDiv.find("img").animate({
        paddingBottom: 20,
        height: 240,
        bottom:30,
    }, 200);
    oDiv.find("img").animate({
        paddingBottom: 20,
        height: 187,
        bottom: 2,
    }, 100);
    oDiv.find("img").animate({
        paddingBottom: 20,
        height: 187,
        bottom: 20,
    }, 150);
    oDiv.find("img").animate({
        paddingBottom: 20,
        height: 187,
        bottom: 6,
    }, 50);
}
function ditual(j) {
    var oDiv = $('.' + j);
    oDiv.find("img").animate({
        height: 0,
        paddingBottom: 0,
        bottom: 6,
    }, 100);
}

function yyin(j) {
    $('.' + j).animate({ top: 0 }, 200);
}

function yyout(j) {
    $('.' + j).animate({ top: -150 }, 200);
}
function yyinr(j) {
    $('.' + j).animate({ right: 0 }, 200);
}

function yyoutr(j) {
    $('.' + j).animate({ right: -258 }, 200);
}

function yyoutr(j) {
    $('.' + j).animate({ right: -258 }, 200);
}

function goupiaogod() {
    $('.goupiaogo').animate(
        {
            top: -140
        }, 1500, function () {
            $('.goupiaogo').animate({
                top: -200
            },1500)
        });
}

function xmx1d() {
    $('.xmx1').animate(
        {
            bottom: 120,
            opacity: 1,
        }, 990, function () {
            $('.xmx1').animate({
                bottom: 150,
                opacity: 0,
            }, 10)
        });
}
function xms1d() {
    $('.xms1').animate(
        {
            bottom: 150,
            opacity: 1,
        }, 990, function () {
            $('.xms1').animate({
                bottom: 120,
                opacity: 0,
            }, 10)
        });
}
function yyx1d() {
    $('.yyx1').animate(
        {
            bottom: 10,
            opacity: 1,
        }, 990, function () {
            $('.yyx1').animate({
                bottom: 30,
                opacity: 0,
            }, 10)
        });
}
function yys1d() {
    $('.yys1').animate(
        {
            bottom: 30,
            opacity: 1,
        }, 990, function () {
            $('.yys1').animate({
                bottom: 10,
                opacity: 0,
            }, 10)
        });
}
var n = 0;
function indexgp() {
    if (n == 3) {
        n = 0;
    } else {
        n++;
    }
    $('.indexgp').css("background-position", "120px " + ( - n * 39) + "px");
}

$("#four_flash .but_right img").click(function(){
        $(".mobile1").removeClass("act");
        $(".mobile2").addClass("act");
	});


$("#four_flash .but_left img").click(function(){
        $(".mobile2").removeClass("act");
        $(".mobile1").addClass("act");
});


$(function () {
    setInterval("indexgp()", 400);
    goupiaogod();
    //自动重复动画
    setInterval("goupiaogod()", 3000);
    //菜单效果
    var navLi = $("#nav-div>ul>li"),
    navUl = $("#nav-div>ul"),
    speed = 400;
    function OnClick() {
        n = navUl.find("li.on").index();
        navUl.stop().animate({ backgroundPosition: navLi.width() * n }, speed);
    }
    OnClick();
    navLi.hover(
      function () {
          n = $(this).index();
          navUl.stop().animate({ backgroundPosition: navLi.width() * n }, speed);
      },
      function () {
          OnClick();
      })
    navLi.click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });


})






