//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		//"cookie" : "jquery.cookie",
		"public" : "public",
		"footer" : "footer"
	}
})
require(["jquery","public","footer"],function ($,pub,foot){
	pub.fn()
	foot.fn()
})
