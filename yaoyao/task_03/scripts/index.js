	/*获取那两个radio单选框*/ 
    var inSchoolRadio = document.getElementById("inSchoolRadio");
    var inSocietyRadio = document.getElementById("inSocietyRadio");

    /*获取那两个会被切换的div元素*/ 
    var inSchoolDiv = document.getElementById("inSchoolDiv");
    var inSocietyDiv = document.getElementById("inSocietyDiv");
    /*获取选择城市和学校的那两个下拉框*/ 
    var selectCity = document.getElementById("selectCity");
    var selectSchool = document.getElementById("selectSchool");
    
    /*切换单选框*/ 
    function radioChange(){
        if(inSchoolRadio.checked){
            inSchoolDiv.className = "";
            inSocietyDiv.className = "hide";
    	}else{
    		inSchoolDiv.className = "hide";
            inSocietyDiv.className = "";
    	}
    }
    
    /*给那两个radio单选框绑定单击事件*/ 
    inSchoolRadio.onclick = function(){
    	radioChange();
    }
    inSocietyRadio.onclick = function(){
    	radioChange();
    }

    var cities = ["hz","sh","nj"];

    /*每个城市对应的学校存放在数组里*/ 
    var arrColleges = [
                        ["杭州电子科技大学","浙江工商大学","浙江理工大学","浙江工业大学"],
                        ["上海交通大学","复旦大学","同济大学","上海财经大学"],
                        ["南京大学","南京理工大学","东南大学"]
                      ];
    
    /*改变学校下拉框选项*/ 
	function schoolChange(){
    	for(var i=0;i<cities.length;i++){
    	    if(selectCity.value == cities[i]){
                selectSchool.innerHTML = "";
                for(var j=0;j<arrColleges[i].length;j++){
                	var college = document.createElement("option");
                	college.setAttribute("value",arrColleges[i][j])
                	college.innerHTML = arrColleges[i][j];
                	selectSchool.appendChild(college);
                }
    	    }
    	}
    }


