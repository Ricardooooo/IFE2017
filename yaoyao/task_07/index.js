var tbody = document.getElementById("tbody");
var thead = document.getElementById("thead");

var arrScore = [['小明',80,90,70],
                ['小红',90,60,90],
                ['小亮',60,100,70],
                ['小黄',99,85,100],
                ['小张',80,75,55]
               ];

//计算出总分并追加到原来的数组中去
function totalScore(arr){
	for(var i=0;i<arr.length;i++){
	  var totalScore = 0;
	  for(var j=1;j<arr[i].length;j++){
        totalScore += arr[i][j];  
	  }
	  arr[i].push(totalScore);
	}
}

totalScore(arrScore);

//根据传入的数组生成表格
function createTbody(ele,arr){
  var tempTr;
  for(var i=0;i<arr.length;i++){
    var tr = document.createElement("tr");
    for(var j=0;j<arr[i].length;j++){
      var td = document.createElement("td");
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    }
    ele.appendChild(tr);
  }
}

createTbody(tbody,arrScore);

var tRows = tbody.getElementsByTagName("tr");

//用冒泡排序，使列表升序排列
function sortUp(tRows,index){
  var tempTr;
  for(var i=0;i<tRows.length-1;i++){
    for(var j=0;j<tRows.length-i-1;j++){
    	if(parseInt(tRows[j].getElementsByTagName("td")[index].innerHTML)
    		 >
    	   parseInt(tRows[j+1].getElementsByTagName("td")[index].innerHTML)){
    	  tempTr = tRows[j].innerHTML;
    	  tRows[j].innerHTML = tRows[j+1].innerHTML;
    	  tRows[j+1].innerHTML = tempTr;
    	}
    }   
  }
}

// 用冒泡排序，使列表降序排序
function sortDown(tRows,index){
  for(var i=0;i<tRows.length-1;i++){
    for(var j=0;j<tRows.length-i-1;j++){
    	if(parseInt(tRows[j].getElementsByTagName("td")[index].innerHTML)
    		 <
    	   parseInt(tRows[j+1].getElementsByTagName("td")[index].innerHTML)){
    	  tempTr = tRows[j].innerHTML;
    	  tRows[j].innerHTML = tRows[j+1].innerHTML;
    	  tRows[j+1].innerHTML = tempTr;
    	}
    }   
  }
}

var arrTh = thead.getElementsByTagName("th"); 

//给箭头绑定事件
for(var i=1;i<arrTh.length;i++){
	(function(j){   //这个j是function的形参
		arrTh[j].getElementsByTagName("div")[0].onclick = function(){
	      sortUp(tRows,j)
	    };
	})(i);          //这个i是循环中的i，作为参数传入
	(function(j){
		arrTh[j].getElementsByTagName("div")[1].onclick = function(){
	      sortDown(tRows,j)
	    };
	})(i);
}



