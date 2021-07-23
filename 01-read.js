var fs = require('fs');//fs是node的文件模块

//readFile()方法用于读取文件，第一个参数为文件路径，第二个参数是回调函数
fs.readFile('./file.txt',function(err,data){
	console.log(data)//输出的是二进制字符（显示的是转换后的十六进制）
	console.log(data.toString())//使用toString()可以转换为正常文本
})