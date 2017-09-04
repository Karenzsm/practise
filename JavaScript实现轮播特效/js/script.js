//全局变量
var timer = null,
    index = 0,
    pics = byId("banner").getElementsByTagName("div"),//取banner下所有的div，打印出来是一个数组
    dots = byId("dots").getElementsByTagName("span"),//取dots下所有的span,个数和div的个数一致，所以不用再取个数
    size = pics.length,
    prev = byId("prev"),
    next = byId("next"),
    menuItems = byId("menu-content").getElementsByTagName("div"),
    subMenu = byId("sub-menu"),
    subItems = subMenu.getElementsByClassName("inner-box");

//封装一个代替getElementById()的方法来简化它
function byId(id){//id的类型是一个字符串，所以对id的类型进行判断
	return typeof(id)==="string"?document.getElementById(id):id;
}

// 清除定时器,停止自动播放
function stopAutoPlay(){
	if(timer){//if(timer)判断定时器是否存在，可优化浏览器加载速度，避免不必要的操作，不用也可以清除计时器
       clearInterval(timer);
	}
}

// 图片自动轮播
function startAutoPlay(){
   timer = setInterval(function(){
       index++;
       if(index >= size){
          index = 0;
       }
       //切换图片
       changeImg();//因为index是全局变量，所以不用传参：changeImg(index);
   },3000)
}

//切换图片,index等于几，就让slide几图片设置为slide-active
function changeImg(){
  //遍历banner下所有的div，将其隐藏
   for(var i=0,len=dots.length;i<len;i++){
       dots[i].className = "";
       pics[i].style.display = "none";
   }
   dots[index].className = "active";
   //根据index索引找到当前div，将其显示出来
   pics[index].style.display = "block";//不管元素上有没有类，className属性设置的类会重写元素上的类
}

//把所有按钮的操作定义在一个函数里面
function slideImg(){
    var main = byId("main");
    var banner = byId("banner");
    var menuContent = byId("menu-content");
    //划过清除定时器，离开继续
    main.onmouseover = function(){
      //划过清除定时器
    	stopAutoPlay();
    }
    main.onmouseout = function(){
    	startAutoPlay();
    }
    //上面的是调用oumouseout事件，下面是调用onmouseout方法
    //自动在main上触发鼠标离开的事件
    main.onmouseout();

    // 点击圆点切换图片
    for(var i=0,len=dots.length;i<len;i++){
       dots[i].id = i;
       dots[i].onclick = function(){
           index = this.id;
           changeImg();
       }
    }

    // 下一张
    next.onclick = function(){
       index++;
       if(index>=size) index=0;
       changeImg();
    }

    // 上一张
    prev.onclick = function(){
       index--;
       if(index<0) index=size-1;
       changeImg();
    }

    // 菜单
    for(var m=0,mlen=menuItems.length;m<mlen;m++){
        menuItems[m].setAttribute("data-index",m);
        menuItems[m].onmouseover = function(){
            subMenu.className = "sub-menu";
            var idx = this.getAttribute("data-index");
            for(var j=0,jlen=subItems.length;j<jlen;j++){
               subItems[j].style.display = 'none';
               menuItems[j].style.background = "none";
            }
            subItems[idx].style.display = "block";
            menuItems[idx].style.background = "rgba(0,0,0,0.1)";
        }
    }

    subMenu.onmouseover = function(){
        this.className = "sub-menu";
    }

    subMenu.onmouseout = function(){
        this.className = "sub-menu hide";
    }

    menuContent.onmouseout = function(){
        subMenu.className = "sub-menu hide";
    }
}

slideImg();