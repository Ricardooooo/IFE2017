(function(){
    var num = document.getElementById("num");
    var left_in = document.getElementById("left_in");
    var right_in = document.getElementById("right_in");
    var left_out = document.getElementById("left_out");
    var right_out = document.getElementById("right_out");
    var num_list = document.getElementById("num_wrap");   
    
    /*检查输入值是否为数字*/ 
    function insertNum(){
    	if(isNaN(num.value) || num.value.trim()==""){
    		alert("请输入一个数字！");
    		return false; 
    	}else {
    		return true;
    	}	
    }
    
    /*将输入值插入左侧*/ 
    function leftIn(){
        var item = document.createElement("div");
        item.innerHTML = num.value;
        num_list.insertBefore(item,num_list.firstChild);
        num.value = "";
    }

    /*将输入值插入右侧*/ 
    function rightIn(){
    	var item = document.createElement("div");
        item.innerHTML = num.value;
        num_list.appendChild(item);
        num.value = "";
    }
    
    /*从左侧出*/
    function leftOut(){
    	var elem_item = num_list.getElementsByTagName("div");
    	if(confirm("您确定要删除"+elem_item[0].innerHTML+"吗?"))
    	elem_item[0].remove();
    }
    /*从右侧出*/
    function rightOut(){
    	var elem_item = num_list.getElementsByTagName("div");
    	if(confirm("您确定要删除"+elem_item[elem_item.length-1].innerHTML+"吗?"))
    	elem_item[elem_item.length-1].remove();
    }
    
    /*给4个按钮绑定事件*/ 
    left_in.onclick = function(){
    	if(insertNum()){
    		leftIn();
    	}
    }

    right_in.onclick = function(){
    	if(insertNum()){
    	    rightIn();
        }
    }

    left_out.onclick = function(){
    	leftOut();
    }

    right_out.onclick = function(){
    	rightOut();
    }

    /*通过点击元素来删除元素*/
    num_list.addEventListener("click",function(e){
    	if(event.target.nodeName.toLowerCase()=="div"){
    		// console.log(event.target.innerHTML);
            if(confirm("您确定要删除"+event.target.innerHTML+"吗?"))
    		event.target.remove();
    	}
    })
     
})();