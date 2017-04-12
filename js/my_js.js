var URL='http://127.0.0.1:';
function ajaxGet(url,data,scallback){
	$.ajax({
		url:URL+url,
		dataType:'json',
		data:data,
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			if(typeof scallback=='function'){
				scallback(data)//回调函数
			}
		},
		error:function(error){
			//异常处理；
			console.log(error);
		}
	})
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