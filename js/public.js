//定义模块
define(function(){
	function fn(){
		$( "#header-wrap" ).load( "head.html #head",function(){
//		public("header-wrap","head","head" ,
			$(function(){
				
				$("#mask .more").hover(function(){
					$(this).css("background","red")
					       .find("a")
					       .css("color","white");
				},function(){
					$(this).css("background","white")
					       .find("a")
					       .css("color","#666");
				})
				
				$("#skin .more").hover(function(){
					$(this).css("background","red")
					       .find("a")
					       .css("color","white");
				},function(){
					$(this).css("background","white")
					       .find("a")
					       .css("color","#666");
				})
				
				$("#makeup .more").hover(function(){
					$(this).css("background","red")
					       .find("a")
					       .css("color","white");
				},function(){
					$(this).css("background","white")
					       .find("a")
					       .css("color","#666");
				})
				
				$("#nurse .more").hover(function(){
					$(this).css("background","red")
					       .find("a")
					       .css("color","white");
				},function(){
					$(this).css("background","white")
					       .find("a")
					       .css("color","#666");
				})
				
				$("#beauty .more").hover(function(){
					$(this).css("background","red")
					       .find("a")
					       .css("color","white");
				},function(){
					$(this).css("background","white")
					       .find("a")
					       .css("color","#666");
				})
				//main
				$("#mask .main").find(".cle li").hover(function(){
					$(this).css("box-shadow","0 0 9px -3px rgba(39,45,51,.7)");
					$(this).find(".name a").css("color","red");
				},function(){
					$(this).css("box-shadow","none");
					$(this).find(".name a").css("color","#555");
				})
				
				$("#skin .main").find(".cle li").hover(function(){
					$(this).css("box-shadow","0 0 9px -3px rgba(39,45,51,.7)");
					$(this).find(".name a").css("color","red");
				},function(){
					$(this).css("box-shadow","none");
					$(this).find(".name a").css("color","#555");
				})
				
				$("#makeup .main").find(".cle li").hover(function(){
					$(this).css("box-shadow","0 0 9px -3px rgba(39,45,51,.7)");
					$(this).find(".name a").css("color","red");
				},function(){
					$(this).css("box-shadow","none");
					$(this).find(".name a").css("color","#555");
				})
				
				$("#nurse .main").find(".cle li").hover(function(){
					$(this).css("box-shadow","0 0 9px -3px rgba(39,45,51,.7)");
					$(this).find(".name a").css("color","red");
				},function(){
					$(this).css("box-shadow","none");
					$(this).find(".name a").css("color","#555");
				})
				
				$("#beauty .main").find(".cle li").hover(function(){
					$(this).css("box-shadow","0 0 9px -3px rgba(39,45,51,.7)");
					$(this).find(".name a").css("color","red");
				},function(){
					$(this).css("box-shadow","none");
					$(this).find(".name a").css("color","#555");
				})
				
				
				
				$("#sub_nav a").hover(function(){
					$(this).css({"background":"#BB1D2B","color":"white"})
				},function(){
					$(this).css({"background":"none","color":"#333"})
				})
				
				
				
				$(".login").hover(function(){
					$(this).css("color","#BB1D2B");
				},function(){
					$(this).css("color","#9e9e9e");
				})
				
				$(".head-top-R a").hover(function(){
					$(this).css("color","#BB1D2B").siblings().css("color","#9e9e9e");
				},function(){
					$(this).css("color","#9e9e9e");
				})
				
				$(".head-top-R .lilast").hover(function(){
					$(".top-app").show();
				},function(){
					$(".top-app").hide();
				})
				
				$("#hover-list .one").hover(function(){
					$(this).show();
					$(".lista").css("background","#f9f9fe");
					$(".lista .one").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -103px"});
					$(".lista .one").find("h2").css("color","red");
					$(this).find("h3 a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					})
					$(this).find(".cle a").hover(function(){
						$(this).css("color","red").siblings().css("color","#888");
					},function(){
						$(this).css("color","#888");
					})
				},function(){
					$(this).hide();
					$(".lista").css("background","white");
					$(".lista .one").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -83px"});
					$(".lista .one").find("h2").css("color","#333");
				})
				
				$("#hover-list .two").hover(function(){
					$(this).show();
					$(".listb").css("background","#f9f9fe");
					$(".listb .two").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -63px"});
					$(".listb .two").find("h2").css("color","red");
					$(this).find("h3 a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					})
					$(this).find(".cle a").hover(function(){
						$(this).css("color","red").siblings().css("color","#888");
					},function(){
						$(this).css("color","#888");
					})
				},function(){
					$(this).hide();
					$(".listb").css("background","white");
					$(".listb .two").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -42px"});
					$(".listb .two").find("h2").css("color","#333");
				})
				
				$("#hover-list .three").hover(function(){
					$(this).show();
					$(".listc").css("background","#f9f9fe");
					$(".listc .three").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -21px"});
					$(".listc .three").find("h2").css("color","red");
					$(this).find("h3 a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					})
					$(this).find(".cle a").hover(function(){
						$(this).css("color","red").siblings().css("color","#888");
					},function(){
						$(this).css("color","#888");
					})
				},function(){
					$(this).hide();
					$(".listc").css("background","white");
					$(".listc .three").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 0"});
					$(".listc .three").find("h2").css("color","#333");
				})
				
				$("#hover-list .four").hover(function(){
					$(this).show();
					$(".listd").css("background","#f9f9fe");
					$(".listd .four").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -145px"});
					$(".listd .four").find("h2").css("color","red");
					$(this).find("h3 a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					})
					$(this).find(".cle a").hover(function(){
						$(this).css("color","red").siblings().css("color","#888");
					},function(){
						$(this).css("color","#888");
					})
				},function(){
					$(this).hide();
					$(".listd").css("background","white");
					$(".listd .four").find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -123px"});
					$(".listd .four").find("h2").css("color","#333");
				})
				
				$(".lista").hover(function(){
					$(this).css("background","#f9f9fe")
						   .find("h2").css("color","red");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -103px"});
					$("#hover-list .one").show();
					$(".list-one a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					});
				},function(){
					$(this).css("background","white")
						   .find("h2").css("color","#333");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -83px"});
					$("#hover-list .one").hide();
					
				})
				
				
				$(".listb").hover(function(){
					$(this).css("background","#f9f9fe")
						   .find("h2").css("color","red");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -63px"});
					$("#hover-list .two").show();
					$(".list-two a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					});	   
				},function(){
					$(this).css("background","white")
						   .find("h2").css("color","#333");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -42px"});
					$("#hover-list .two").hide();
				})
				
				
				$(".listc").hover(function(){
					$(this).css("background","#f9f9fe")
						   .find("h2").css("color","red");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -21px"});
					$("#hover-list .three").show();
					$(".list-three a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					});		   
				},function(){
					$(this).css("background","white")
						   .find("h2").css("color","#333");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 0"});
					$("#hover-list .three").hide();	   
				})
				
				
				$(".listd").hover(function(){
					$(this).css("background","#f9f9fe")
						   .find("h2").css("color","red");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -145px"});
					$("#hover-list .four").show();
					$(".list-four a").hover(function(){
						$(this).css("color","red").siblings().css("color","#333");
					},function(){
						$(this).css("color","#333");
					});		   
				},function(){
					$(this).css("background","white")
						   .find("h2").css("color","#333");
						   $(this).find("i").css({"background":"url(http://img.nala.com.cn/images/nala/index/201712/main_nav_iconfont.png) 0 -1px no-repeat","background-position":"0 -123px"});
					$("#hover-list .four").hide();	   
				})
				
			})
		});
	}
	return {fn:fn}
})
//封装的调取头尾部的函数
/*function public( obj,target,url ){
	$( "#" + obj ).load( target +".html #" + url )
}
*/