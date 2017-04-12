var block = document.getElementById("block");
var command = document.getElementById("command");
var btn = document.getElementById("btn");

/*定义一个变量用来标识方块当前的朝向*/ 
var blockDir = "up";

/*用一个数组来存放四个方向，这四个方向是block对象里direction属性的值*/ 
var arrDirction = ["up","right","down","left"];
var arrIndex = 0;

function tunLef(){
	if(arrIndex > 0){
		arrIndex -= 1;
	}else{
		arrIndex = 3;
	}
	blockDir = arrDirction[arrIndex];
	changeDirection();
}

function tunRig(){
	if(arrIndex < 3){
		arrIndex += 1;
	}else{
		arrIndex = 0;
	}
	blockDir = arrDirction[arrIndex];
	changeDirection();
}

function tunBac(){
	if(arrIndex == 2){
		arrIndex = 0;
	}else if(arrIndex == 3){
		arrIndex = 1;
	}else{
		arrIndex += 2;
	}
	blockDir = arrDirction[arrIndex];
	changeDirection();
}

/*改变方块的方向*/ 
function changeDirection(){
	if(blockDir == "up"){
		block.style.transform = "rotate(0deg)";
	}
	if(blockDir == "right"){
		block.style.transform = "rotate(90deg)";
	}
	if(blockDir == "down"){
		block.style.transform = "rotate(180deg)";
	}
	if(blockDir == "left"){
		block.style.transform = "rotate(-90deg)";
	}
}

function go(){
    var top = parseInt(block.style.top);
    var left = parseInt(block.style.left);

	if(blockDir == "up"){
		if(top >= 50){
			block.style.top = (top - 50)+"px";
		}
	}
    if(blockDir == "right"){
		if(left <= 400){
			block.style.left = (left + 50) + "px";
		}
	}
	if(blockDir == "down"){
		if(top <= 400){
			block.style.top = (top + 50)+"px";
		}
	}
	if(blockDir == "left"){
		if(left >= 50){
			block.style.left = (left - 50)+"px";
		}
	}
}

/*给按钮绑定事件*/ 
btn.addEventListener("click",function(){
	if(command.value.trim().toUpperCase() == "TUN RIG"){
		tunRig();
	}
	if(command.value.trim().toUpperCase() == "TUN LEF"){
		tunLef();
	}
	if(command.value.trim().toUpperCase() == "TUN BAC"){
		tunBac();
	}
	if(command.value.trim().toUpperCase() == "GO"){
		go();
	}
})








