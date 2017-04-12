var http = require('http');
var url = require('url');
var querystring=require('querystring');
var my_db=require("./my_db");

http.createServer(function(request, response){
	var my_url= url.parse(request.url);
	var pathname = my_url.pathname;
	console.log("请求路径为 " + pathname );
	console.log(querystring.parse(my_url.query));
	if(pathname=='/'){
		response.writeHead(200, {"Content-Type": "text/plain"});
		my_db.db('login','remove',{"name":"boss"},function(d){
		response.write(JSON.stringify(d));
		response.end();
	});
	
	}
	
}).listen(8080);