$(function(){
		
		$("#whole").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#korea a").css({"background":"#eee","color":"#3d3d3d"});
			$("#japan a").css({"background":"#eee","color":"#3d3d3d"});
			$("#america a").css({"background":"#eee","color":"#3d3d3d"});
			$("#domestic a").css({"background":"#eee","color":"#3d3d3d"});
			$("#grant a").css({"background":"#eee","color":"#3d3d3d"});
			$("#other a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-lista").show();
			$(".brand-listb").hide();
			$(".brand-listc").hide();
			$(".brand-listd").hide();
			$(".brand-liste").hide();
			$(".brand-listf").hide();
			$(".brand-listg").hide();
		})
		
		$("#korea").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#whole a").css({"background":"#eee","color":"#3d3d3d"});
			$("#japan a").css({"background":"#eee","color":"#3d3d3d"});
			$("#america a").css({"background":"#eee","color":"#3d3d3d"});
			$("#domestic a").css({"background":"#eee","color":"#3d3d3d"});
			$("#grant a").css({"background":"#eee","color":"#3d3d3d"});
			$("#other a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-listb").show();
			$(".brand-lista").hide();
			$(".brand-listc").hide();
			$(".brand-listd").hide();
			$(".brand-liste").hide();
			$(".brand-listf").hide();
			$(".brand-listg").hide();
		})
		
		$("#japan").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#whole a").css({"background":"#eee","color":"#3d3d3d"});
			$("#korea a").css({"background":"#eee","color":"#3d3d3d"});
			$("#america a").css({"background":"#eee","color":"#3d3d3d"});
			$("#domestic a").css({"background":"#eee","color":"#3d3d3d"});
			$("#grant a").css({"background":"#eee","color":"#3d3d3d"});
			$("#other a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-listc").show();
			$(".brand-lista").hide();
			$(".brand-listb").hide();
			$(".brand-listd").hide();
			$(".brand-liste").hide();
			$(".brand-listf").hide();
			$(".brand-listg").hide();
		})
		
		$("#america").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#whole a").css({"background":"#eee","color":"#3d3d3d"});
			$("#korea a").css({"background":"#eee","color":"#3d3d3d"});
			$("#japan a").css({"background":"#eee","color":"#3d3d3d"});
			$("#domestic a").css({"background":"#eee","color":"#3d3d3d"});
			$("#grant a").css({"background":"#eee","color":"#3d3d3d"});
			$("#other a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-listd").show();
			$(".brand-lista").hide();
			$(".brand-listb").hide();
			$(".brand-listc").hide();
			$(".brand-liste").hide();
			$(".brand-listf").hide();
			$(".brand-listg").hide();
		})
		
		$("#domestic").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#whole a").css({"background":"#eee","color":"#3d3d3d"});
			$("#korea a").css({"background":"#eee","color":"#3d3d3d"});
			$("#japan a").css({"background":"#eee","color":"#3d3d3d"});
			$("#america a").css({"background":"#eee","color":"#3d3d3d"});
			$("#grant a").css({"background":"#eee","color":"#3d3d3d"});
			$("#other a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-liste").show();
			$(".brand-lista").hide();
			$(".brand-listb").hide();
			$(".brand-listc").hide();
			$(".brand-listd").hide();
			$(".brand-listf").hide();
			$(".brand-listg").hide();
		})
		
		$("#grant").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#whole a").css({"background":"#eee","color":"#3d3d3d"});
			$("#korea a").css({"background":"#eee","color":"#3d3d3d"});
			$("#japan a").css({"background":"#eee","color":"#3d3d3d"});
			$("#america a").css({"background":"#eee","color":"#3d3d3d"});
			$("#domestic a").css({"background":"#eee","color":"#3d3d3d"});
			$("#other a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-listf").show();
			$(".brand-lista").hide();
			$(".brand-listb").hide();
			$(".brand-listc").hide();
			$(".brand-listd").hide();
			$(".brand-liste").hide();
			$(".brand-listg").hide();
		})
		
		$("#other").hover(function(){
			$(this).find("a").css({"background":"#df3442","color":"white"});
			$("#whole a").css({"background":"#eee","color":"#3d3d3d"});
			$("#korea a").css({"background":"#eee","color":"#3d3d3d"});
			$("#japan a").css({"background":"#eee","color":"#3d3d3d"});
			$("#america a").css({"background":"#eee","color":"#3d3d3d"});
			$("#domestic a").css({"background":"#eee","color":"#3d3d3d"});
			$("#grant a").css({"background":"#eee","color":"#3d3d3d"});
			$(".brand-listg").show();
			$(".brand-lista").hide();
			$(".brand-listb").hide();
			$(".brand-listc").hide();
			$(".brand-listd").hide();
			$(".brand-liste").hide();
			$(".brand-listf").hide();
		})
		
		
		
	
		$("#content-one .one-R").find("li a").hover(function(){
			$(this).css({"background":"#df3442","color":"white"}).siblings()
		},function(){
			$(this).css({"background":"#eee","color":"#3d3d3d"});
			$(".only").css({"background":"#df3442","color":"white"})
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
		
		
		
		var timer = null;
		
		//setInterval(autoPlay,4000);
		var index = 0;
		autoPlay()
		function autoPlay(){
			clearInterval(timer)
			timer = setInterval(function(){
				index ++;
				if( index >= $(".banner-img li").length){
					index = 0;
				}
				$(".banner-img li").eq(index-1)
								   .fadeIn(1000)
								   .siblings()
								   .fadeOut(1000);
				$(".dot li").eq(index)
						    .addClass("ocolor")
						    .siblings()
						    .removeClass("ocolor"); 
			},4000)
		}
		$(".dot li").hover(function(){
			clearInterval(timer);
			var oindex = $(this).index();
			$(this).addClass("ocolor")
				   .siblings()
				   .removeClass("ocolor"); 
			$(".banner-img li").eq(oindex-1)
							   .fadeIn(1000)
							   .siblings()
							   .fadeOut(1000);
		},function(){
			autoPlay()
		})
		
		autoPlay2()
		var num = 1;
		function autoPlay2(){
			clearInterval(timer);
			timer = setInterval(function(){
				index++;
				if( index >= $("#rolls li").length ){
					index = 0;
				}
//				setInterval(function(){
					$("#rolls li").animate({"top":-$('#rolls li').eq(index-1).height()},1000)
//				},1000)
				
				console.log($('#rolls li').height())
			},2000)
		}
		
		$(".itemlist .name").find("a").hover(function(){
			$(this).css("color","red").siblings().css("color","#555");
		},function(){
			$(this).css("color","#555");
		})
		
		$(".brand-list li").hover(function(){
			$(this).css("box-shadow","0 0 15px rgba(204,204,204,.5)");
		},function(){
			$(this).css("box-shadow","none");
		})
		
		$("#mask .main").find(".L .pic img").hover(function(){
			$(this).css({"width":"275","height":"680"});
		},function(){
			$(this).css({"width":"270","height":"675"});	
		})
		
		$("#skin .main").find(".L .pic img").hover(function(){
			$(this).css({"width":"275","height":"680"});
		},function(){
			$(this).css({"width":"270","height":"675"});	
		})
		
		$("#makeup .main").find(".L .pic img").hover(function(){
			$(this).css({"width":"275","height":"680"});
		},function(){
			$(this).css({"width":"270","height":"675"});	
		})
		
		$("#nurse .main").find(".L .pic img").hover(function(){
			$(this).css({"width":"275","height":"680"});
		},function(){
			$(this).css({"width":"270","height":"675"});	
		})
		
		$("#beauty .main").find(".L .pic img").hover(function(){
			$(this).css({"width":"275","height":"680"});
		},function(){
			$(this).css({"width":"270","height":"675"});	
		})
		
		
		
		$("#hot .itemlist").find("li").hover(function(){
			$(this).css("box-shadow","0 0 15px rgba(204,204,204,.5)");
		},function(){
			$(this).css("box-shadow","none");
		})
		
		/*$("#mask .main").find(".R .cle li").hover(function(){
			$(this).animate({"position":"absolute","margin":"-10px 10px 11px 0"},1000).siblings()
		})*/
})