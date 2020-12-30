
        	//先找到所有的图片   通过标签名来找
        	var imgs=wrap.getElementsByTagName("img");
        	
        	//对照片进行for循环   因为左右两边是对称的，所以不需要循环imgs.length次，而是imgs.length/2
        	//把第三张图片放在正中央   左右分别放三张  
        	var INow=3;
        	var target=0;
        	//解决疯狂点击   用一个类似于锁的变量
        	var off=true;
        	Tab(INow);
        	//0 1 2 3 4 5 6
        	//4 5 6 0 1 2 3
        	//3 4 5 6 0 1 2
        	for (var i = 0; i < imgs.length; i++) {
        		//为每一张图片创建一个index
        		imgs[i].index=i;
        		//对图片创建点击事件
        		imgs[i].onclick=function(){
        			target=this.index;
        			//如果门是关了的，就不执行下面的代码
        			if(!off){
        			   return;
        			}
        			off=false;
        			if(target>INow){
        				//4 5  6
        				if(target-INow<=3){
        					goNext();
        				}else{
        					goPre();
        					
        				}
        			}
        			//就把哪一张放在中间
                    else{
                    	//0 1 2
        					if(target+7-INow<=3){
        						goNext();
        					}else{
        						goPre();
        					}
                    }
        			
        			
        		};
        	}
        	function goNext(){
        		INow++;
        		if(INow>6){
        			INow=0;
        		}
        		Tab(INow);
        		//如果到了目标点的时候就停止移动
        		if(INow==target){
        			off=true;
        			return;
        		}
        		setTimeout(function(){
        			goNext();
        		},700);
        	}
        	function goPre(){
        		INow--;
        		if(INow<0){
        			INow=6;
        		}
        		Tab(INow);
        		//如果到了目标点的时候就停止移动
        		if(INow==target){
        			off=true;
        			return;
        		}
        		setTimeout(function(){
        			goPre();
        		},700);
        	}
        	//函数封装   将第几张图片放在正中央
        	//0 1 2 3 4 5 6
        	//4 5 6 0 1 2 3
        	//3 4 5 6 0 1 2
        	function Tab(n){
        		for (var i = 0; i < 3; i++) {
        			var left=n-1-i;
        			//0在中间
        			if(left<0){
        				left=left+7;
        			}       			
        			imgs[left].style.transform='translateX('+(-150*(i+1))+'px)translateZ('+(150-100*i)+'px)rotateY(30deg)';
        			//6在中间
        			var right=n+1+i;
        			if(right>6){
        				right=right-7;
        			}
        			
        			imgs[right].style.transform='translateX('+(150*(i+1))+'px)translateZ('+(150-100*i)+'px)rotateY(-30deg)';
        		}
        		imgs[INow].style.transform='translateZ(300px)';
        	}
