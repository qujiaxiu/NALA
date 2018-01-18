$(function(){
	$("#hover-list .one").find("h3 a").click(function(){
		 $("#one .one-nav").find("a").eq(1).html(">"+"护肤>"+$(this).text())
	})
	$("#list .list-one").find("a").click(function(){
		$("#one .one-nav").find("a").eq(1).html(">"+"护肤>"+$(this).text())
	})
	$("#hover-list .cle").find("dd a").click(function(){
		 $("#one .one-nav").find("a").eq(2).html(">"+$(this).text())
	})
	
	
//	$("#list li").find(".one h2").click(function(){
//		$("#one .one-nav").find("a").eq(1).html($(this).text()+">")
//	})
//	$("#list li").find(".two h2").click(function(){
//		$("#one .one-nav").find("a").eq(1).html($(this).text()+">")
//	})
//	$("#list li").find(".three h2").click(function(){
//		$("#one .one-nav").find("a").eq(1).html($(this).text()+">")
//	})
//	$("#list li").find(".four h2").click(function(){
//		$("#one .one-nav").find("a").eq(1).html($(this).text()+">")
//	})
	
	
	
	//分页
	var index = 1;//页码
	var pageNum = 30;
	var pageTotle = "";
	showData();
	function showData(){
		$.ajax({
			type:"get",
			url:"../json/commodity.json",
			async:true,
			success : function(res){
				var str = "";
				//console.log(res.length)			
				for( var i = (index-1)*30 ; i < index*30; i++  ){
						str += `<li>
									<div class="img">
										<img src="${res[i].src}" />
									</div>
									<div class="words">
										<h2>
											<a href="javascript:;">${res[i].name}</a>
										</h2>
										<strong>登录后查看价格</strong>
										<h3>已售：${res[i].sale}件</h3>
										<h4>起批量>${res[i].minnum}件</h4>
									</div>
								</li>`
				$("#cle").html(str);
				//总页数
				pageTotle = Math.ceil( res.length / pageNum);
				var page = "";
				for( var j = 1 ; j <= pageTotle ; j++ ){
					page += `<li>
						<a href="javascript:;">${j}</a>
					</li>`;
				}
				$(".oUl").html(page);
				$("#u").find("li").eq(index-1).addClass("active");
			}
		}
	});
}
				$("#u").delegate("li","click",function(){
					index = $(this).find("a").html();
					showData();
				})
				
				$("#left a").click(function(){
					if( index <= 1 ){
						index = 1;
					}else{
						index --;
					}
					console.log(index);
					showData();
				})
				
				$("#right a").click(function(){
					if( index >= pageTotle ){
						index = pageTotle;
					}else{
						index++;
					}
					console.log(index);
					showData();
				})
				
//				$("#u").delegate("li","mouseenter",function(){
//					$(this).find("a").css({"background":"#f5f5f5","color":"#df3442"});
//				})
//				$("#u").delegate("li","mouseleave",function(){
//					$(this).find("a").css({"background":"white","color":"#3d3d3d"});
//				})
		//分页		
				
				
		$("#left a").hover(function(){
			$(this).css({"background":"#f5f5f5","color":"#df3442"});
		},function(){
			$(this).css({"background":"white","color":"#3d3d3d"});
		})
		
		$("#right a").hover(function(){
			$(this).css({"background":"#f5f5f5","color":"#df3442"});
		},function(){
			$(this).css({"background":"white","color":"#3d3d3d"});
		})
		
		$("#itemlist ul").on({
			mouseenter : function(){
				$(this).animate({"margin":"-10px 17px 26px 0"},400);
			},
			mouseleave : function(){
				$(this).animate({"margin":"0 17px 16px 0"},400);
			}
		},"li")	
		
		
		$(".brand_areaa dd").find("a").hover(function(){
			$(this).css("color","#df3442");
		},function(){
			$(this).css("color","#666");
		})
		
		$(".brand_areab dd").find("a").hover(function(){
			$(this).css("color","#df3442");
		},function(){
			$(this).css("color","#666");
		})
		
		$(".brand_areac dd").find("a").hover(function(){
			$(this).css("color","#df3442");
		},function(){
			$(this).css("color","#666");
		})
		
		$(".more").click(function(){
			$(".brand_areab").find("dd").animate({"height":"229px"},1000);
			$(".open").show();
			$(this).hide();
		})
		
		$(".open").click(function(){
			$(".brand_areab").find("dd").animate({"height":"44px"},1000);
			$(".more").show();
			$(this).hide();
		})
		
		
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
		
		
		$("#footer-wrap").load("footer.html #footer");
		$("#footer-wrap").css("margin-top","1505px")
		$("#header-wrap #list").hide();
	//	$("#footer-wrap").css("margin-top","300px");
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