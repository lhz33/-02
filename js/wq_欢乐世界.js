window.onload = function() {
    $(function(){
        $(".nav>li").hover(function(){
            $(this).children("ul").stop().slideToggle();
        })
    })
    $(function(){
        $(".bai_3>.q").hover(function(){
            $(this).children("ul").stop().slideToggle();
        })
      
    })

        // 1. 获取元素
        var cloud = document.querySelector('.cloud');
        var bai_2 = document.querySelector('.bai_2');
        var lis = bai_2.querySelectorAll('.q');
        // var qwe = bai_2.querySelectorAll('li')
        console.log(lis);
        // 2. 给所有的小li绑定事件 
        // 这个current 做为筋斗云的起始位置
        var current = 0;
        for (var i = 0; i < lis.length; i++) {
            // (1) 鼠标经过把当前小li 的位置做为目标值
            lis[i].addEventListener('mouseenter', function() {
                animate(cloud, this.offsetLeft);
            });
            // (2) 鼠标离开就回到起始的位置 
            lis[i].addEventListener('mouseleave', function() {
                animate(cloud, current);
            });
            // (3) 当我们鼠标点击，就把当前位置做为目标值
            lis[i].addEventListener('click', function() {
                current = this.offsetLeft;
            });
        }
      
        }       
