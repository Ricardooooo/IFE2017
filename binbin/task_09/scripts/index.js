(function(){
    var treeRoot = document.getElementsByClassName("root")[0],
        DF_btn = document.getElementsByTagName("button")[0],
        BF_btn = document.getElementsByTagName("button")[1],
        search_text = document.getElementById("search_text"),
        DF_search = document.getElementsByTagName("button")[2],
        BF_search = document.getElementsByTagName("button")[3],
        delete_btn = document.getElementsByTagName("button")[4],
        add_text = document.getElementById("add"),
        add_btn = document.getElementsByTagName("button")[5],
        nodeList = [],/*遍历到的元素依次放在数组里*/
        timer = null,
        BFindex = 0,/*广度优先遍历自增标识*/
        flag;/*查找结果自增标识*/
        
	/*深度优先遍历*/ 
    function traverseDF(node){
        if(!(node == null)){
            nodeList.push(node);
            for(var i=0;i<node.children.length;i++){
            	traverseDF(node.children[i]);
            }
        }
    }

    /*广度优先遍历*/ 
    function traverseBF(node){
        if(!(node == null)){
        	nodeList.push(node);
        	traverseBF(node.nextElementSibling);
        	node = nodeList[BFindex];
        	BFindex++;
            traverseBF(node.firstElementChild);
        }
    } 

    /*颜色变化函数*/
    function changeColor(){
        if(nodeList.length>0){
            var i = 0;
            nodeList[i].style.backgroundColor = "green";
            timer = setInterval(function(){
                if(i<nodeList.length-1){
                    i++;
                    nodeList[i-1].style.backgroundColor = "#fff";
                    nodeList[i].style.backgroundColor = "green";
                }else{
            	    nodeList[i].style.backgroundColor = "#fff";
            	    clearInterval(timer);
                }
            },500);
       }
    }

    /*查询函数*/
    function search(match){
    	if(match == ""){
    		alert("请输入查询条件！");
    		return false;
    	} 
        if(nodeList.length>0){
            var i = 0;
            nodeList[i].style.backgroundColor = "green";
            timer = setInterval(function(){
            	i++;
                if(i<nodeList.length){
                    if(nodeList[i-1].childNodes[0].nodeValue.replace(/(^\s+)|(\s+$)/g,"")==match){
                    	nodeList[i-1].style.backgroundColor = "blue";
                    	flag++;
                    	nodeList[i].style.backgroundColor = "green";                    	
                    }else{
                    	nodeList[i-1].style.backgroundColor = "#fff";
                    	nodeList[i].style.backgroundColor = "green";
                    }
                }else{
                	if(nodeList[i-1].childNodes[0].nodeValue.replace(/(^\s+)|(\s+$)/g,"")==match){
                		nodeList[i-1].style.backgroundColor = "blue";
                		flag++;
                		clearInterval(timer);
                	}else{
                	    nodeList[i-1].style.backgroundColor = "#fff";
                	    if(flag == 0){
                	    	alert("没有找到");
                	    }
                	    clearInterval(timer);
                    }
                }
            },500);
        }
    } 
    
    /*改变选中节点的颜色*/
    var selectedDiv = null;   //用于存放被点击的那个div元素
    var divs = document.getElementById("container").getElementsByTagName('div');
    for(var i=0;i<divs.length;i++){
        divs[i].onclick = function(e){
            clearColor();
            this.style.backgroundColor = "yellow";
            e.stopPropagation();
            selectedDiv = this;
        }
    }
    
    /*添加子节点*/ 
    function addChild(){
        if(selectedDiv == null){
            alert("请先选中一个节点");
            return false;
        }else if(add_text.value.trim() == ""){
            alert("请输入要插入的内容");
            return false;
        }else{
            var new_div = document.createElement("div");
            new_div.innerHTML = add_text.value.trim();
            selectedDiv.appendChild(new_div);
            clearColor();
            selectedDiv = null;
            /*更新点击元素改变颜色事件*/ 
            var divs = document.getElementById("container").getElementsByTagName('div');
            for(var i=0;i<divs.length;i++){
                divs[i].onclick = function(e){
                clearColor();
                this.style.backgroundColor = "yellow";
                e.stopPropagation();
                selectedDiv = this;
                }
            }
        }
    }

    /*初始化背景颜色*/
    function clearColor(){
        divs = document.getElementById("container").getElementsByTagName('div');
        for(var i=0;i<divs.length;i++){
            divs[i].style.backgroundColor = "#fff";
        }
    } 

    /*各个变量初始化*/
    function reset(){
        nodeList = [];
        clearInterval(timer);
        clearColor();
        BFindex = 0;
        flag = 0;
    }
    
    /*给按钮绑定事件*/ 
    DF_btn.onclick = function(){
        reset();
        traverseDF(treeRoot);
        changeColor();
    }

    BF_btn.onclick = function(){
        reset();
        traverseBF(treeRoot);
        changeColor();
    }

    DF_search.onclick = function(){
        var str_search = search_text.value.trim();
        reset();
        traverseDF(treeRoot);
        search(str_search);
    }

    BF_search.onclick = function(){
        var str_search = search_text.value.trim();
        reset();
        traverseBF(treeRoot);
        search(str_search);
    }

    delete_btn.onclick = function(){
        if(!(selectedDiv == null)){
        selectedDiv.remove();
        }
    }

    add_btn.onclick = function(){
        addChild();
    }

})();