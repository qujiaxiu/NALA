$(function(){
	$("#footer-wrap").load("footer.html #footer");
	$(".head-top-R .lilast").hover(function(){
		$(".top-app").show();
	},function(){
		$(".top-app").hide();
	})
	
	$(".head-one .login").hover(function(){
		$(this).css("color","#BB1D2B");
	},function(){
		$(this).css("color","#9e9e9e");
	})
	
	$(".head-top-R a").hover(function(){
				$(this).css("color","#BB1D2B").siblings().css("color","#9e9e9e");
			},function(){
				$(this).css("color","#9e9e9e");
	})
	
	$(".main-R .top").find("a").hover(function(){
		$(this).css("color","#BB1D2B");
	},function(){
		$(this).css("color","#333");
	})
	
	$(".two .a").hover(function(){
		$(this).css("color","#BB1D2B");
	},function(){
		$(this).css("color","#333");
	})
	
//	login
	var tel = getCookie("username");
	var pwd = getCookie("userpwd");
	console.log(tel);
	console.log(pwd);
	$("#login").click(function(){
		var call = $("#sname").val();
		var pwds = $("#spwd").val();
		if( call == tel && pwds == pwd ){
			alert("登录成功");
			location.href = "index.html";
		}else{
			alert("登录失败");
		}
	})
})