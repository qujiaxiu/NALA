
		$(function(){
			var a = "";
			$.ajax("../json/index-main.json")
			.then(function(res){
				for( var i = 0 ; i < 8 ; i++ ){
					a += `
						<li>
							<div class="pic">
								<a href="javascript:;">
									<img src="${res[i].img}" alt="" />
								</a>
							</div>
							<div class="info">
								<p class="name">
									<a href="javascript:;">
										${res[i].name}
									</a>
								</p>
								<p class="price">
									<span>登录后查看价格</span>
								</p>
								<p class="sale">已售：${res[i].sales}件</p>
								<p class="minnum">起批量>${res[i].minnums}件</p>
								<p class="label">
									<a href="javascript:;" class="hun" title="该商品支持混批">${res[i].hun}</a>
									<a  href="javascript:;" class="ding" title="该商品支持订货">${res[i].ding}</a>
									
								</p>
							</div>
						</li>
					`
				}
				$("#mask-ul").html(a);
			})
			
			var b = "";
			$.ajax("../json/index-main.json")
			.then(function(res){
				for( var i = 8 ; i < 16 ; i++ ){
					b += `
						<li>
							<div class="pic">
								<a href="javascript:;">
									<img src="${res[i].img}" alt="" />
								</a>
							</div>
							<div class="info">
								<p class="name">
									<a href="javascript:;">
										${res[i].name}
									</a>
								</p>
								<p class="price">
									<span>登录后查看价格</span>
								</p>
								<p class="sale">已售：${res[i].sales}件</p>
								<p class="minnum">起批量>${res[i].minnums}件</p>
								<p class="label">
									<a href="javascript:;" class="hun" title="该商品支持混批">${res[i].hun}</a>
									<a  href="javascript:;" class="ding" title="该商品支持订货">${res[i].ding}</a>
									
								</p>
							</div>
						</li>
					`
				}
				$("#skin-ul").html(b);
			})
			
			var c = "";
			$.ajax("../json/index-main.json")
			.then(function(res){
				for( var i = 16 ; i < 24 ; i++ ){
					c += `
						<li>
							<div class="pic">
								<a href="javascript:;">
									<img src="${res[i].img}" alt="" />
								</a>
							</div>
							<div class="info">
								<p class="name">
									<a href="javascript:;">
										${res[i].name}
									</a>
								</p>
								<p class="price">
									<span>登录后查看价格</span>
								</p>
								<p class="sale">已售：${res[i].sales}件</p>
								<p class="minnum">起批量>${res[i].minnums}件</p>
								<p class="label">
									<a href="javascript:;" class="hun" title="该商品支持混批">${res[i].hun}</a>
									<a  href="javascript:;" class="ding" title="该商品支持订货">${res[i].ding}</a>
									
								</p>
							</div>
						</li>
					`
				}
				$("#makeup-ul").html(c);
			})
			
			var d = "";
			$.ajax("../json/index-main.json")
			.then(function(res){
				for( var i = 24 ; i < 32 ; i++ ){
					d += `
						<li>
							<div class="pic">
								<a href="javascript:;">
									<img src="${res[i].img}" alt="" />
								</a>
							</div>
							<div class="info">
								<p class="name">
									<a href="javascript:;">
										${res[i].name}
									</a>
								</p>
								<p class="price">
									<span>登录后查看价格</span>
								</p>
								<p class="sale">已售：${res[i].sales}件</p>
								<p class="minnum">起批量>${res[i].minnums}件</p>
								<p class="label">
									<a href="javascript:;" class="hun" title="该商品支持混批">${res[i].hun}</a>
									<a  href="javascript:;" class="ding" title="该商品支持订货">${res[i].ding}</a>
									
								</p>
							</div>
						</li>
					`
				}
				$("#nurse-ul").html(d);
			})
			
			var e = "";
			$.ajax("../json/index-main.json")
			.then(function(res){
				for( var i = 32 ; i < 40 ; i++ ){
					e += `
						<li>
							<div class="pic">
								<a href="javascript:;">
									<img src="${res[i].img}" alt="" />
								</a>
							</div>
							<div class="info">
								<p class="name">
									<a href="javascript:;">
										${res[i].name}
									</a>
								</p>
								<p class="price">
									<span>登录后查看价格</span>
								</p>
								<p class="sale">已售：${res[i].sales}件</p>
								<p class="minnum">起批量>${res[i].minnums}件</p>
								<p class="label">
									<a href="javascript:;" class="hun" title="该商品支持混批">${res[i].hun}</a>
									<a  href="javascript:;" class="ding" title="该商品支持订货">${res[i].ding}</a>
									
								</p>
							</div>
						</li>
					`
				}
				$("#beauty-ul").html(e);
			})
		})

