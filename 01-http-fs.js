var http = require('http')
var fs = require('fs')

var server = http.createServer()

//非文本资源可以不设置content-Type
server.on('request',function(req,res){
	if(req.url == '/html'){
		fs.readFile('./resources/main.html',function(err,data){
			if(err){
				console.log(err)
				res.setHeader('content-Type','text/plain;charset=utf-8')
				res.end('加载页面错误，请检查后重试！')
			}else{
				res.setHeader('content-Type','text/html;charset=utf-8')
				res.end(data)
			}
		})
	}else if(req.url == '/img'){
		fs.readFile('./resources/timg.jpg',function(err,data){
			if(err){
				res.setHeader('content-Type','text/plain;charset=utf-8')
				res.end('图片读取错误，请检查后重试！')
			}else{
				//res.setHeader('content-Type','image/jpeg')//当响应资源不是字符或者二进制时，不用添加编码方式
				res.end(data)
			}
		})
	}
})

server.listen(3000,function(){
	console.log('服务器启动成功...')
})