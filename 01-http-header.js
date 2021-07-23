var http =  require('http')

var server = http.createServer()

server.on('request',function(req,res){
	console.log(req.url)
	//默认情况下，服务器使用的是utf-8编码，但是发送到浏览器端时，浏览器默认使用的是操作系统编码（中文操作系统，即gbk编码），所以显示为乱码
	//content-Type的首字母c可以大写也可以小写
	if(req.url == '/plain'){
		res.setHeader('content-Type','text/plain;charset=utf-8')//将内容编码为普通文本
		res.end('这是响应数据')
	}else if(req.url == '/html'){
		res.setHeader('content-Type','text/html;charset=utf-8')//将内容编码为html
		res.end('<p>这是html模式</p>')
	}
})

server.listen('3000',function(){
	console.log('服务已启动...')
})