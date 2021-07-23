//http模块是node创建服务器的
var http = require('http');

//createServer()方法来实例化一个服务
var server = http.createServer();

//on用来创建请求，参数一：request用来响应客户端的；参数二：回调函数(两个参数，参数1：接受客户端传来的数据；参数2：返回给客户端的数据)
server.on('request',function(request,response){
	console.log('服务器响应了...')
	// console.log(request)
	console.log(request.url)
	//response的write()方法用来想客户端返回数据
	//write方法可以写多次，但是最后都要使用end()方法结束
	response.write('这是服务端的数据')
	response.write(' 使用node创建的服务端！')
	response.end()
	
	//返回的数据格式只能是字符串或者二进制
	// reaponse.end('可以不写write方法，直接使用end方法返回数据')
})

//lister启动服务，参数一：端口号；参数二：回调函数
server.listen(3000,function(){
	console.log('服务器启动成功，可以在浏览器通过http://127.0.0.1:3000/进行访问')
})