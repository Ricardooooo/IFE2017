(function(){
    /*获取5个input元素*/ 
    var msg_name = document.getElementById("msg_name");
    var msg_password_1 = document.getElementById("msg_password_1");
    var msg_password_2 = document.getElementById("msg_password_2");
    var msg_email = document.getElementById("msg_email");
    var msg_phone = document.getElementById("msg_phone");

    /*5个input元素存放到数组里，后面遍历时会用到*/ 
    var inputEles = [msg_name,msg_password_1,msg_password_2,msg_email,msg_phone];

    var btn = document.getElementById("btn");
    
    /*定义一个变量用于存放提示字符串*/ 
    var tip_txt = null;

    function checkValue(ele){
        if(ele == inputEles[0]){
            var str = ele.value.trim();
            if(getStrLen(str) == 0){
                tip_txt = "姓名不能为空";
                return false;
            }else if(getStrLen(str) >= 4 && getStrLen(str) <= 16){
                tip_txt = "名称格式正确";
                return true;
            }else{
                tip_txt = "字符数应为4~16位";
                return false;
            } 
        }else if(ele == inputEles[1]){  
            var str = ele.value;
            if(str.match(/^[0-9a-zA-Z]{8,16}$/g)){
                tip_txt = "密码可用";
                return true;
            }else{
                tip_txt = "密码格式错误";
                return false;
            }
        }else if(ele == inputEles[2]){
            var str = ele.value;
            if(str == inputEles[1].value && str != ""){
                tip_txt = "密码输入一致";
                return true;
            }else if(str == ""){
                tip_txt = "密码输入不能为空";
                return false;
            }else{
                tip_txt = "密码输入不一致";
                return false;
            } 
        }else if(ele == inputEles[3]){
            var str = ele.value;
            if(isEmail(ele)){
                tip_txt = "邮箱格式正确";
                return true;
            }else{
                tip_txt = "邮箱格式错误";
                return false;
            }
        }else if(ele == inputEles[4]){
            var str = ele.value.trim();
            if(str.match(/^1\d{10}/g)){
                tip_txt = "手机号格式正确";
                return true;
            }else{
                tip_txt = "手机号格式错误";
                return false;
            }
        }   
    }

    /*给input元素添加事件*/ 
    for(var i=0;i<inputEles.length;i++){
        /*当input元素得到焦点时*/ 
        inputEles[i].addEventListener("focus",function(e){
            var tip = e.target.parentElement.getElementsByTagName("p")[0];
            tip.style.display = "block";
        })
        
        /*当input元素失去焦点时*/ 
        inputEles[i].addEventListener("blur",function(e) {
            if(checkValue(e.target)){
                var tip = e.target.parentElement.getElementsByTagName("p")[0];
                tip.innerHTML = tip_txt;
                e.target.style.border = "2px solid #0ec70e";
                tip.style.color = "#0ec70e";
            }else{
                var tip = e.target.parentElement.getElementsByTagName("p")[0];
                tip.innerHTML = tip_txt;
                e.target.style.border = "2px solid red";
                tip.style.color = "red";
            }
        })
    }

    /*获取字符长度*/ 
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

    /*验证是否是正确的邮箱*/ 
    function isEmail(ele){
        var apos = ele.value.indexOf("@");
        var dotpos = ele.value.indexOf(".");
        if(apos < 1 || dotpos-apos <2){
            return false;
        }else{
            return true;
        }
    }

    btn.addEventListener("click",function(e) {
        /*定义变量countRight记录通过验证的input个数*/ 
        var countRight = 0;
        for(var i=0;i<inputEles.length;i++){
            if(checkValue(inputEles[i])){
                var tip = inputEles[i].parentElement.getElementsByTagName("p")[0];
                tip.style.display = "block";
                tip.innerHTML = tip_txt;
                inputEles[i].style.border = "2px solid #0ec70e";
                tip.style.color = "#0ec70e";
                countRight++;
            }else{
                var tip = inputEles[i].parentElement.getElementsByTagName("p")[0];
                tip.style.display = "block";
                tip.innerHTML = tip_txt;
                inputEles[i].style.border = "2px solid red";
                tip.style.color = "red";
            }
        }
        if(countRight == 5){
            alert("提交成功");
        }else{
            alert("输入有误");
        }
    })
})();