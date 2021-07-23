var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/workspace/Hbulid/html'

server.on('request',function(req,res){
	fs.readFile('./aphace目录列表.html',function(err,data){
		if(err){
			res.setHeader('content-Type','text/plain;charset=utf-8')
			return res.end('读取文件失败')
		}
		var data = data.toString()
		fs.readdir(wwwDir,function(err,file){//readdir读取文件夹，第一个参数：文件夹路径，第二个参数：回调函数
			if(err){
				res.setHeader('content-Type','text/plain;charset=utf-8')
				return res.end('文件夹不存在')
			}
			var content = ''
			file.forEach(function(item){
				content += `
				  <tr>
				    <td>${item}</td>
				    <td>${new Date()}</td>
				  </tr>
				`
			})
			data = data.replace('暂无内容',content)//将原文件中的内容替换为新的数据
			res.end(data)
		})
	})
})

server.listen(3000,function(){
	console.log('服务已启动...')
})