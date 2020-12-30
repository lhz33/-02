//封装一个动画函数bug已去
function animate(obj, target, callback, step) {
    //如果step有值,就用step,否则就用5
    step = step || 5;
    //加一个定时器
    //为了每个对象的定时器不重名,给对象添加一个name属性
    // var obj = { };
    // obj.name = 'andy';
    //解决加快bug的方法就是先清除一下上一个计时器,只留一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var ste = (target - obj.offsetLeft) / step
        ste = ste > 0 ? Math.ceil(ste) : Math.floor(ste);
        obj.style.left = obj.offsetLeft + ste + 'px';
        //如果目标对象平行移动的距离到达了目标距离,就清除定时器
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //清除定时器之后再执行回调函数
            // 若回调函数有值且不为空,则执行,否则不执行
            //动画函数里的形参是回调函数里的实参
            callback && callback(obj);
        }

    }, 50);
}