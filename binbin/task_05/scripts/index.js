(function(){
    var num = document.getElementById("num");
    var left_in = document.getElementById("left_in");
    var right_in = document.getElementById("right_in");
    var left_out = document.getElementById("left_out");
    var right_out = document.getElementById("right_out");
    var num_list = document.getElementById("num_wrap");
    var btn_sort = document.getElementById("btn_sort");

    /*数据存放在数组里，再用刷新方式更新数据*/ 
    var data = [];   
    
    function update(){
        num_list.innerHTML = "";
        for(var i=0;i<data.length;i++){
            var item = document.createElement("li");
            item.innerHTML = data[i];
            /*使子div的高度为输入值的1.5倍，乘1.5倍是为了使柱条更好看一点*/
            item.style.height = data[i]*1.5+"px";
            item.setAttribute("id","li-"+i);
            num_list.appendChild(item);
            num.value = "";
        }
    }

    /*检查输入值是否为数字*/ 
    function insertNum(){
    	if(isNaN(num.value) || num.value.trim()==""){
    		alert("请输入一个数字！");
    		return false; 
    	}else if(num.value < 10 || num.value > 100){
            alert("请输入10-100之间的数！");
            return false;
        } 
        else{
    		return true;
    	}	
    }
    
    /*将输入值插入左侧*/ 
    function leftIn(){
        /*判断当前队列元素数量是否超过60*/ 
        item_list = num_list.getElementsByTagName("li");
        if(item_list.length >= 60){
            alert("队列元素数量已超过60！");
            return false;
        }
        data.unshift(num.value);
        update();
    }

    /*将输入值插入右侧*/ 
    function rightIn(){
        /*判断当前队列元素数量是否超过60*/
        item_list = num_list.getElementsByTagName("li");
        if(item_list.length >= 60){
            alert("队列元素数量已超过60！");
            return false;
        }
        data.push(num.value);
        update();
    }
    
    /*从左侧出*/
    function leftOut(){
    	var elem_item = num_list.getElementsByTagName("li");
    	if(confirm("您确定要删除"+elem_item[0].innerHTML+"吗?")){
    	    data.shift();
            update();
        }
    }
    /*从右侧出*/
    function rightOut(){
    	var elem_item = num_list.getElementsByTagName("li");
    	if(confirm("您确定要删除"+elem_item[elem_item.length-1].innerHTML+"吗?")){
    	    data.pop();
            update();
        }
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
     	if(e.target.nodeName.toLowerCase()=="li"){
            if(confirm("您确定要删除"+e.target.innerHTML+"吗?")){
                item_id = parseInt(e.target.getAttribute("id").substr(3));
                data.splice(item_id,1);
                update(); 
            }	
     	}
    })

    //冒泡排序算法
    btn_sort.onclick = function(){
        var i = 0,j=0,temp;
        n = data.length;
        timer = null;
        timer = setInterval(run,300);
        function run(){
            if(i<n-1){
                if(j<n-i-1){
                    if(data[j]-data[j+1]>0){
                        temp = data[j];
                        data[j] = data[j+1];
                        data[j+1] = temp;
                    }
                    update();
                    j++;
                }else{
                    j=0;
                    i++;
                }
            }else{
                clearInterval(timer);
            }
        }
    }

})();