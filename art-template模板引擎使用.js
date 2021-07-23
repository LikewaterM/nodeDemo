var template = require('art-template')//引入模板引擎
var http = require('http')
var fs = require('fs')

var server = http.createServer()
var wwwDir = 'D:/workspace/Hbulid/html'

server.on('request',function(req,res){
	fs.readFile('./模板引擎渲染页面.html',function(err,data){
		if(err){
			res.setHeader('content-Type','text/plain;charset=utf-8')
			return res.end('读取文件失败')
		}
		var dataStr = data.toString()
		fs.readdir(wwwDir,function(err,file){
			if(err){
				res.setHeader('content-Type','text/plain;charset=utf-8')
				return res.end('获取文件夹内容失败')
			}
			//使用模板引擎渲染html，render方法，第一个参数：被渲染的页面或内容，第二个参数：渲染的数据
			//将模板赋给变量，用新的模板替换旧的页面或内容
			 var tem = template.render(dataStr,{
				title:'这是使用art-template模板引擎实现的渲染效果',
				files:file
			})
			res.end(tem)
		})
	})
})

server.listen(3000,function(){
	console.log('服务已启动...')
})