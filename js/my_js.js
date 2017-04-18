var URL='http://localhost:8080/';
function ajaxGet(url,data,scallback){
	$.ajax({
		url:URL+url,
		dataType:'jsonp',//服务器返回json格式数据
		callback:'?',
		data:data,
		jsonp:'jsoncallback',
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			if(typeof scallback=='function'){
				scallback(data)//回调函数
				setTimeout(function(){window.location="/";},3000);
			}
		},
		error:function(error){
			//异常处理；
			console.log(error.status);
		}
	})
}
function xhr(url,data){
	xmlHttp=new XMLHttpRequest();
	xmlHttp.open("GET",URL+url,false);
	xmlHttp.send(data || null);
	console.log(xmlHttp.responseText);
	return xmlHttp.responseText;
}
//获取当天时间
function getDate(e){
	var d=new Date()
	var day=d.getDate()
	var month=d.getMonth() + 1
	var year=d.getFullYear()
	$(e).html(year + "/" + month + "/" + day)
}
//简写document
function $class(e){
	return document.getElementsByClassName(e);
}