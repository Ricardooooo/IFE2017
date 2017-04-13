//定义一个快捷的根据ID获取元素的方法
function $(id_selector){
    return document.getElementById(id_selector.substring(1,id_selector.length));
}

var show_button = $("#show-button").getElementsByTagName("button")[0];

//跨浏览器事件处理程序
var eventUtil = {
	//添加句柄
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type] = handler;
		}
	},
}

function showTip(){
    $("#tip").style.display = "block";
    $("#mask").style.display = "block";
}

function hideTip(){
	$("#tip").style.display = "none";
    $("#mask").style.display = "none";
}

eventUtil.addHandler(show_button,"click",showTip);
eventUtil.addHandler($("#mask"),"click",hideTip);
eventUtil.addHandler($("#buttons").getElementsByTagName("button")[0],"click",hideTip);
eventUtil.addHandler($("#buttons").getElementsByTagName("button")[1],"click",hideTip);


//拖动功能
function drag(){
	var head = $("#tip").getElementsByTagName("h1")[0];
	head.onmousedown = fnDown;
}

function fnDown(event){
    event = event || window.event;
    var oDrag = $("#tip");
    var disX = event.clientX - oDrag.offsetLeft - 250;  //减250是因为这个浮出层本身有负250像素的margin-left
    var disY = event.clientY - oDrag.offsetTop - 150;   //减150是因为这个浮出层本身有负150像素的margin-top

    //移动鼠标
    document.onmousemove = function(event){
    	event = event || window.event;
    	var l = event.clientX  - disX,    
    	    t = event.clientY  - disY,
    	    winW = document.documentElement.clientWidth || document.body.clientWidth,
            winH = document.documentElement.clientHeight || document.body.clientHeight,
            maxW = winW - oDrag.offsetWidth + 250,
            maxH = winH - oDrag.offsetHeight + 150;
        //判断浮出层是否会超出窗口范围 
        if(l <= 250){
        	l = 250;
        }else if(l >= maxW){
            l = maxW;
        }
        if(t <= 150){
        	t = 150;
        }else if(t >= maxH){
            t = maxH;
        }

    	oDrag.style.left = l + "px";
    	oDrag.style.top = t + "px";
    }

    //释放鼠标
    document.onmouseup = function(){
    	document.onmousedown = null;
    	document.onmousemove = null;
    }
}

window.onload=drag;