var chessboard = document.getElementById("chessboard");
var command = document.getElementById("command");
var btn = document.getElementById("btn");

/*定义一个对象*/ 
var block = {
	selectedTd : getBlock(5,6),
    dirction: "up",
    rowPos: 5,
    colPos: 6,
}

/*用一个数组来存放四个方向，这四个方向是block对象里direction属性的值*/ 
var arrDirction = ["up","right","down","left"];
var arrIndex = 0;

/*获取被选中的那个方格*/ 
function getBlock(rowPos,colPos){
	return chessboard.childNodes[rowPos*2+1].childNodes[colPos*2+1];
}

/*给方格添加类和子div元素*/ 
function drawBlock(ele){
	ele.className = "block";
	ele.innerHTML = "<div></div>";
}

drawBlock(block.selectedTd);

function tunLef(){
	if(arrIndex > 0){
		arrIndex -= 1;
	}else{
		arrIndex = 3;
	}
	block.dirction = arrDirction[arrIndex];
	changeDirection();
}

function tunRig(){
	if(arrIndex < 3){
		arrIndex += 1;
	}else{
		arrIndex = 0;
	}
	block.dirction = arrDirction[arrIndex];
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
	block.dirction = arrDirction[arrIndex];
	changeDirection();
}

/*改变方块的方向*/ 
function changeDirection(){
	if(block.dirction == "up"){
		block.selectedTd.style.transform = "rotate(0deg)";
	}
	if(block.dirction == "right"){
		block.selectedTd.style.transform = "rotate(90deg)";
	}
	if(block.dirction == "down"){
		block.selectedTd.style.transform = "rotate(180deg)";
	}
	if(block.dirction == "left"){
		block.selectedTd.style.transform = "rotate(-90deg)";
	}
}

function go(){
    if(block.dirction == "up"){
    	if(block.rowPos > 1){
    		block.rowPos -= 1;
    	}
    	clearBlock();
    	block.selectedTd = getBlock(block.rowPos,block.colPos);
    	changeDirection();
    	drawBlock(block.selectedTd);
    }
    if(block.dirction == "right"){
    	if(block.colPos < 10){
    	    block.colPos += 1;
    	}
    	clearBlock();
    	block.selectedTd = getBlock(block.rowPos,block.colPos);
    	changeDirection();
    	drawBlock(block.selectedTd);
    }
    if(block.dirction == "down"){
    	if(block.rowPos < 10){
    		block.rowPos += 1;
    	}
    	clearBlock();
    	block.selectedTd = getBlock(block.rowPos,block.colPos);
    	changeDirection();
    	drawBlock(block.selectedTd);
    }
    if(block.dirction == "left"){
    	if(block.colPos > 1){
    		block.colPos -= 1;
    	}
    	clearBlock();
    	block.selectedTd = getBlock(block.rowPos,block.colPos);
    	changeDirection();
    	drawBlock(block.selectedTd);
    }
}

/*使当前被选中的方格恢复原状*/ 
function clearBlock(){
	block.selectedTd.className = "";
    block.selectedTd.innerHTML = "";
    block.selectedTd.style.transform = "rotate(0deg)";
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








