(function(){     
    var area = document.getElementById("area");
    var left_in = document.getElementById("left_in");
    var right_in = document.getElementById("right_in");
    var search_text = document.getElementById("search_text");
    var btn_search = document.getElementById("search");
    var wrap = document.getElementById("wrap");
    var left_out = document.getElementById("left_out");
    var right_out = document.getElementById("right_out");

    /*数据放在数组里，再用刷新方式更新数据*/ 
    var data = [];
    
    /*从左侧入*/ 
    function leftIn() {
        var word_in = area.value.trim();
        var reg = /[^\w\u4e00-\u9fa5]+/;
        var arrWord = word_in.split(reg).filter(function(e){
          return e.length !== 0;
        });
        for(var i=arrWord.length-1;i>=0;i--){
            data.unshift(arrWord[i]);
        }
        render();
    }
    
    /*给左侧入按钮绑定事件*/ 
    left_in.onclick = function(){
        leftIn();
    }

    /*从右侧入*/ 
    function rightIn() {
        var word_in = area.value.trim();
        var reg = /[^\w\u4e00-\u9fa5]+/;
        var arrWord = word_in.split(reg).filter(function(e){
          return e.length !== 0;
        });
        data = data.concat(arrWord);
        render();
    }

    /*给右侧入按钮绑定事件*/ 
    right_in.onclick = function(){
        rightIn();
    }

    /*从左侧出*/
    function leftOut(){
        var elem_item = wrap.getElementsByTagName("div");
        if(confirm("您确定要删除"+elem_item[0].innerHTML+"吗?")){
          data.shift();
          elem_item[0].remove();
        }
    }
    /*从右侧出*/
    function rightOut(){
        var elem_item = wrap.getElementsByTagName("div");
        if(confirm("您确定要删除"+elem_item[elem_item.length-1].innerHTML+"吗?")){
          data.pop();
          elem_item[elem_item.length-1].remove();
        }
    }
    
    /*给左侧出按钮绑定事件*/ 
    left_out.onclick = function(){
        leftOut();
    }

    /*给右侧出按钮绑定事件*/
    right_out.onclick = function(){
        rightOut();
    }

    /*通过点击元素来删除元素*/
    wrap.addEventListener("click",function(e){
        if(e.target.nodeName.toLowerCase()=="div"){
            if(confirm("您确定要删除"+event.target.innerHTML+"吗?")){
                item_id = parseInt(e.target.getAttribute("id").substr(3));
                data.splice(item_id,1);
                render();
            }
        }
    })
    
    /*给查询按钮绑定事件*/ 
    btn_search.onclick = function(){
        var str_search = search_text.value.trim();
        render(str_search);
    }

    /*刷新数据*/ 
    function render(match){
        wrap.innerHTML = "";
        arr = [];
        for(var i=0;i<data.length;i++){
            arr[i] = data[i];
            var list = document.createElement("div");
            list.setAttribute("id","li-"+i);
            list.innerHTML = arr[i];
            wrap.appendChild(list);
            /*给匹配到的字符所在的div添加一个类*/ 
            if(match != null && match.length>0){
                var reg = new RegExp(match,"g");
                if(reg.test(list.innerHTML)){
                    list.setAttribute("class","selected");
                }
            }
        }   
    }
})();