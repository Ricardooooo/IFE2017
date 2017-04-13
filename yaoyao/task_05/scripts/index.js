/*定义一个快捷的利用id获取元素的方法*/ 
function $(id_selector) {
    return document.getElementById(id_selector.substring(1,id_selector.length));
}

/*获取小方块*/ 
var block = $("#block");

function traLef(){
	var top = parseInt(block.style.top);
    var left = parseInt(block.style.left);
    if(left >= 50){
		block.style.left = (left - 50)+"px";
	}
}

function traTop(){
	var top = parseInt(block.style.top);
    var left = parseInt(block.style.left);
    if(top >= 50){
		block.style.top = (top - 50)+"px";
	}
}

function traRig(){
	var top = parseInt(block.style.top);
    var left = parseInt(block.style.left);
    if(left <= 400){
		block.style.left = (left + 50)+"px";
	}
}

function traBot(){
	var top = parseInt(block.style.top);
    var left = parseInt(block.style.left);
    if(top <= 400){
		block.style.top = (top + 50)+"px";
	}
}

function movLef(){
	block.style.transform = "rotate(-90deg)";
	console.log(block.style.animationName);
	traLef();
}

function movTop(){
	block.style.transform = "rotate(0deg)";
	traTop();
}

function movRig(){
	block.style.transform = "rotate(90deg)";
	traRig();
}

function movBot(){
	block.style.transform = "rotate(180deg)";
	traBot();
}

$("#tra_lef").onclick = traLef;
$("#tra_top").onclick = traTop;
$("#tra_rig").onclick = traRig;
$("#tra_bot").onclick = traBot;

$("#mov_lef").onclick = movLef;
$("#mov_top").onclick = movTop;
$("#mov_rig").onclick = movRig;
$("#mov_bot").onclick = movBot;
