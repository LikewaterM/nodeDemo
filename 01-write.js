var fs = require('fs');

//第一个参数：写入的路径；第二个参数：写入的内容；第三个参数：回调函数（只有一个参数err）
//写入的路径已存在，则会覆盖原有的
fs.writeFile('./writefile.txt','这是用node写入的第一个文件内容',function(err){
	console.log(err)
})