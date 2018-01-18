$(function(){
	
	//吸顶
	$(window).scroll(function(){
		var h = 698;
		if( $(document).scrollTop() > h ){
			$("#two .top").css({"position":"fixed","top":"0"})
		}else{
			$("#two .top").css("position","")
		}
	})
	//获取页面滚走的距离
	//吸顶
	
	
	$("#tabs_bar ul").find("li").eq(1).click(function(){
		$(".product-two").show();
		$(".product-one").hide();
		$(".product-three").hide();
		$(".product-four").hide();
		$(".product-five").hide();
		$(".txt").hide();
		$("#two").css("height","6000px");
		$("#footer-wrap").css("margin-top","5900px");
		$(this).find("a").css({"border-bottom":"2px solid #df3442","color":"#df3442"})
		$(this).prev().find("a").css({"color":"#3d3d3d","border-bottom":"none"});
		$(this).nextAll().find("a").css({"color":"#3d3d3d","border-bottom":"none"});
	})
	$("#tabs_bar ul").find("li").eq(0).click(function(){
		$(".product-one").show();
		$(".product-two").show();
		$(".product-three").show();
		$(".product-four").show();
		$(".product-five").show();
		$(".txt").show();
		$("#two").css("height","7925px");
		$("#footer-wrap").css("margin-top","7900px");
		$(this).find("a").css({"border-bottom":"2px solid #df3442","color":"#df3442"});
		$(this).nextAll().find("a").css({"color":"#3d3d3d","border-bottom":"none"});
	})
	$("#tabs_bar ul").find("li").eq(2).click(function(){
		$(".product-three").show();
		$(".product-one").hide();
		$(".product-two").hide();
		$(".product-four").hide();
		$(".product-five").hide();
		$(".txt").hide();
		$("#two").css("height","200px");
		$("#footer-wrap").css("margin-top","2600px");
		$(this).find("a").css({"border-bottom":"2px solid #df3442","color":"#df3442"});
		$(this).prevAll().find("a").css({"color":"#3d3d3d","border-bottom":"none"});
		$(this).nextAll().find("a").css({"color":"#3d3d3d","border-bottom":"none"});
	})
	
	$("#tabs_bar ul").find("li").eq(3).click(function(){
		$(".product-five").show();
		$(".product-one").hide();
		$(".product-two").hide();
		$(".product-three").hide();
		$(".product-four").hide();
		$(".txt").show();
		$("#two").css("height","1900px");
		$("#footer-wrap").css("margin-top","2600px");
		$(this).find("a").css({"border-bottom":"2px solid #df3442","color":"#df3442"});
		$(this).prevAll().find("a").css({"color":"#3d3d3d","border-bottom":"none"});
	})
	
	//product-right
	var a = "";
	$.ajax({
		type:"get",
		url:"../json/details.json",
		async:true,
		success : function(res){
			var str = "";
			for( var i = 0 ; i < 10 ; i++ ){
				str += `
					<li>
						<p class="img">
							<a href="javascript:;">
								<img src="${res[i].img}" alt="" />
							</a>
						</p>
						<p class="name">
							<a href="javascript:;">
								${res[i].name}
							</a>
						</p>
						<span class="nologin">登录后查看价格</span>
					</li>
				`
			}
			$("#list-ul").html(str);
		}
	});
	
	$("#list-ul").on({
		mouseenter : function(){
			$(this).css("color","#df3442");
		},
		mouseleave : function(){
			$(this).css("color","#3d3d3d");
		}
	},"li .name a")
	//product-right
	
	//收藏商品
	$(".obtn").click(function(){
		$("#obtn").css("color","#DF3442");
		$(".iconfont").css("color","#DF3442")
	})
	//收藏商品
	
	
	
	//放大镜
	
	//鼠标移入小图 显示对应的中图和大图
	$(".small-img .ocle").find("li").mouseenter(function(){
		var index = $(this).index();
		console.log(index)
		$("#mask").show().css("background",'url(../image/'+(index+1)+'.png) no-repeat' )
		$(".middle-img img").eq(index)
							.show()
							.siblings()
							.hide();
		$(".big img").eq(index)
					 .show()
					 .siblings()
					 .hide();
	})
	
	$(".middle-img").mouseover(function(){
		$("#layer").show();
		$("#mask").show();
		$(".big").show();
	}).mouseout(function(){
		$("#layer").hide();
		$("#mask").hide();
		$(".big").hide();
	}).mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $(".middle-img").offset().left - $("#mask").outerWidth()/2;
		var y = e.pageY - $(".middle-img").offset().top - $("#mask").outerHeight()/2;
		var maxL = $(".middle-img").outerWidth() - $("#mask").outerWidth();
		var maxT = $(".middle-img").outerHeight() - $("#mask").outerHeight();
		x = Math.min( maxL,Math.max(0,x));
		y = Math.min( maxT,Math.max(0,y));
		
		$("#mask").css({
			"left" : x,
			"top" : y,
			"backgroundPositionX" : -x,
			"backgroundPositionY" : -y
		})
		
		//大图/小图 = 大图left / mask . left = 大图显示区 / 小图显示区mask
		var bigImgX = x * $(".big-img").width() / $(".middle-img").width();
		var bigImgY = y * $(".big-img").height() / $(".middle-img").height();
		$(".big-img").css({
			"left" : -bigImgX,
			"top" : -bigImgY
		})
	})
	
	
	//放大镜
	
	
	//content
	
	
	$(".isreserve").click(function(event){
		$(this).css({"color":"#df3442","border-bottom":"2px solid #df3442"});
		$(".current").css({"color":"black","border-bottom":"none"});
		$("#table-one").hide();
		$("#table-two").show();
		$("#one .three").css("height","202px");
		$(".sku_table").css("height","93px");
	})
	

	$(".current").click(function(){
		$(this).css({"color":"#df3442","border-bottom":"2px solid #df3442"});
		$(".isreserve").css({"color":"black","border-bottom":"none"});
		$("#table-one").show();
		$("#table-two").hide();
		$("#one .three").css("height","261px");
		$(".sku_table").css("height","158px");
	})
	
	
	//content
	
	
	//head
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
	
	$("#classify").hover(function(){
		$("#header-wrap #list").show();
	},function(){
		$("#header-wrap #list").hide();
	})
	$("#header-wrap #list").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	
	$("#hover-list").hover(function(){
		$("#list").show();
	},function(){
		$("#list").hide();
	})
	
	$("#sub_nav a").hover(function(){
		$(this).css({"background":"#BB1D2B","color":"white"})
	},function(){
		$(this).css({"background":"none","color":"#333"})
	})
	//head
	
	//footer
	$("#footer-wrap").load("footer.html #footer");
	$("#footer-wrap").css("margin-top","7900px")
	//footer
	
//	scroll
	$(".service").hover(function(){
			$(this).css("background","#df3442")
				   .find("i")
				   .css("color","white");
			$(this).find(".one")
				   .show(70)
		},function(){
			$(this).css("background","").find("i").css("color","red");
			$(this).find(".one")
				   .hide(50)
		})
		$(".phone").hover(function(){
			$(this).css("background","#df3442").find("i").css("color","white");
			$(this).find(".two")
				   .show(70)
		},function(){
			$(this).css("background","").find("i").css("color","red");
			$(this).find(".two")
				   .hide(50)
		})
		$(".up").hover(function(){
			$(this).css("background","#df3442").find("i").css("color","white");
			$(this).find(".three")
				   .show(70)
		},function(){
			$(this).css("background","").find("i").css("color","red");
			$(this).find(".three")
				   .hide(50)
		})
		
		$(".up").click(function(){
			$("html").animate({"scrollTop":"0"},1000);
		})
//	scroll
})
