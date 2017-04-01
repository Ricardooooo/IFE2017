(function(){
    var preBtn = document.getElementById("preBtn");
    var inBtn = document.getElementById("inBtn");
    var postBtn = document.getElementById("postBtn");
    var treeRoot = document.getElementsByClassName("root")[0];
    /*将遍历到的元素依次存放在数组里*/ 
    var arr = [];
    var timer = null;

    /*先根序遍历*/
    function preOrder(node){
        if(!(node == null)){
            arr.push(node);
            preOrder(node.firstElementChild);
            preOrder(node.lastElementChild);
    	}
    }

    /*中根序遍历*/
    function inOrder(node){
    	if(!(node == null)){
    		inOrder(node.firstElementChild);
    		arr.push(node);
    		inOrder(node.lastElementChild);
    	}
    }

    /*后根序遍历*/
    function postOrder(node){
    	if(!(node == null)){
    		postOrder(node.firstElementChild);
    		postOrder(node.lastElementChild);
    		arr.push(node);
    	}
    }

    /*颜色变化函数*/
    function changeColor(){
    	var i = 0;
    	arr[i].style.backgroundColor="green";
    	timer = setInterval(function(){
            if(i<arr.length){
              if(i==0){
                i++;
              }else{
            	arr[i-1].style.backgroundColor="#fff";
                arr[i].style.backgroundColor="green";
                i++;
              }
            }else{
              arr[arr.length-1].style.backgroundColor="#fff";
              clearInterval(timer);
            }
    	},500)
    } 
    
    /*初始化样式*/ 
    function reset(){
    	arr = [];
    	clearInterval(timer);
    	var divs = document.getElementsByTagName("div");
    	for(var i=0;i<divs.length;i++){
    		divs[i].style.backgroundColor = "#fff";
    	}
    }

    /*给三个按钮绑定事件*/
    preBtn.onclick = function(){
    	reset();
    	preOrder(treeRoot);
    	changeColor();
    }

    inBtn.onclick = function(){
    	reset();
    	inOrder(treeRoot);
    	changeColor();
    }

    postBtn.onclick = function(){
    	reset();
    	postOrder(treeRoot);
    	changeColor();
    }

})();