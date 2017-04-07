(function(){
    var tip = document.getElementById("tip");
    var msg_name = document.getElementById("msg_name");
    var btn = document.getElementById("btn");

    function getStrLen(str){
    	var strLen = 0;
    	for(var i=0;i<str.length;i++){
    		if(str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 128){
    			strLen++;
    		}else{
    			strLen+=2;
    		}
    	}
    	return strLen;
    }

    function validate_form(){
    	var txt = msg_name.value.trim();
    	if(getStrLen(txt) == 0){
    		tip.innerHTML = "姓名不能为空";
    		tip.style.color = "red";
    		msg_name.style.border = "2px solid red";
    	}else if(getStrLen(txt) >= 4 && getStrLen(txt) <= 16){
    		tip.innerHTML = "名称格式正确";
    		tip.style.color = "#0ec70e";
    		msg_name.style.border = "2px solid #0ec70e";
    	}else{
    		tip.innerHTML = "字符数应为4~16位";
    		tip.style.color = "red";
    		msg_name.style.border = "2px solid red";
    	} 
    }

    btn.onclick = function(){
    	validate_form();
    }

})();