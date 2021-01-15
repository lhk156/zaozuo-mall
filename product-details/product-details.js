$(function() {


	//接一下传过来的数据
	var di = location.search.slice(1) - 1; 


	$(
		`
		<div class="proPic">
			<img src="../house-all/house-all img/${housearr[di].pic}" >
		</div>
		<div class="proSpace">
			<div class="proSpace-title">${housearr[di].title}</div>
			<div class="proSpace-price">${housearr[di].price}</div>
			<div class="proSpace-link link1">设计师手选组合，最高可省1437元，可以看看</div>
			<div class="proSpace-link link2">今天下单，将于2020-11-03前发货，大件家具会致电确认</div>
			<ul class="proSpace-color">
				<li>颜色:</li>
				<li><img src="productimg/color1.jpg" ></li>
				<li><img src="productimg/color2.jpg" ></li>
				<li><img src="productimg/color3.jpg" ></li>
			</ul>
			<ul class="proSpace-style">
				<li>款型:</li>
				<li>三人座</li>
				<li>双人座</li>
				<li>单人座</li>
			</ul>
			<div class="proSpace-choose">
				<div class="proSpace-num">
					<div class="number">1</div>
					<div class="rgt">
						<div class="add">+</div>
						<div class="less">-</div>
					</div>
				</div>
				<div class="buy" >
					立即购买
				</div>
				<div class="addCart">
					加入购物车
				</div>
			</div>
			
		</div>
	`
	).appendTo($(".proStyle"));


	//点击立即购买去购买页面

	$(".buy").click(function() {
		location.assign('../buy-page/buy-page.html?' + di);
	})


	//点击添加购物车去购物车

	$(".addCart").click(function() {
		location.assign('../cart/cart.html?' + di);
	})

	//商品颜色点击出现边框
	//如果点第一个，没有效果
	$(".proSpace-color li").click(function() {

		if ($(this).index() == 0) {
			return;
		} else {
			$(this).addClass('click');
			$(this).siblings().removeClass('click');
		}
	})
	//商品款式点击出现边框
	//如果点第一个，没有效果
	$(".proSpace-style li").click(function() {

		if ($(this).index() == 0) {
			return;
		} else {
			$(this).addClass('click');
			$(this).siblings().removeClass('click');
		}
	})
	//点击之后价格改变
	$(".proSpace-style li").click(function() {
		//价格
		var price = $(".proSpace-price").html().slice(1);
		//判断点击的款式
		if ($(this).index() == 1) {
			$(".proSpace-price").html('￥' + price);
		} else if ($(this).index() == 2) {
			$(".proSpace-price").html('￥' + price);
		} else if ($(this).index() == 3) {
			$(".proSpace-price").html('￥' + price);
		}

	})
	
	//点击加号之后数量增加，价格增加
	var i = 1;
	var price1 = $(".proSpace-price").html().slice(1);
	$(".proSpace-num .rgt .add").click(function() {
		$(".proSpace-num .number").html(++i);
		$(".proSpace-price").html('￥' + i * price1);
	})
	//点击减号之后数量减少
	$(".proSpace-num .rgt .less").click(function() {
		if (i < 1) {
			return;
		} else {
			$(".proSpace-num .number").html(--i);
			$(".proSpace-price").html('￥' + i * price1);
		}
	
	})
	
	//滑过加号之后样式改变
	$(".proSpace-num .rgt .add").hover(function() {
		$(this).css({
			background: '#000',
			color: '#fff'
		})
	}, function() {
		$(this).css({
			background: '#fff',
			color: '#000'
		})
	})
	//滑过减号之后样式改变
	$(".proSpace-num .rgt .less").hover(function() {
		$(this).css({
			background: '#000',
			color: '#fff'
		})
	}, function() {
		$(this).css({
			background: '#fff',
			color: '#000'
		})
	})

	// 了解更多的滑过效果
	$(".luca-more").mouseover(function() {
		$(".luca-more").css({
			color: '#333',
			background: '#fff'
		})
	})
	$(".luca-more").mouseout(function() {
		$(".luca-more").css({
			color: '#fff',
			background: '#333'
		})
	})
	// 了解更多的滑过效果
	$(".bc19 .span").hover(function() {
		$(this).css({
			background: '#000',
			color: '#fff',
		})
	}, function() {
		$(this).css({
			background: '#fff',
			color: '#000'
		})
	});
	//了解更多的点击效果
	$(".bc19 .span").click(function() {
		$(this).css({
			background: '#000',
			color: '#fff',
		})
		if ($(".bc19Hidden").hasClass('active')) {
			$(".bc19Hidden").removeClass('active');
		} else {
			$(".bc19Hidden").addClass('active');
		}

	})
	// 背景19隐藏页面滑过收起之后的效果
	$(".bc19Hidden span").hover(function() {
		$(this).css({
			background: '#000',
			color: '#fff'
		})
	}, function() {
		$(this).css({
			background: "#fff",
			color: "#000"
		})
	})
	//背景19隐藏页面点击收起之后收起
	$(".bc19Hidden span").click(function() {
		$(".bc19Hidden").addClass('active');
	})
	//查看参数的滑过效果
	$(".bc23 span").hover(function() {
		$(this).css({
			background: '#fff',
			color: '#000'
		})
	}, function() {
		$(this).css({
			background: '#000',
			color: '#fff'
		})
	})
	//查看参数的点击效果
	$(".bc23 span").click(function() {
		$(this).css({
			background: '#fff',
			color: '#000'
		});
		if ($(".bc23Hidden").hasClass('active')) {
			$(".bc23Hidden").removeClass('active');
		} else {
			$(".bc23Hidden").addClass('active');
		}
	})
	// 背景23隐藏页面滑过收起之后的效果
	$(".bc23Hidden span").hover(function() {
		$(this).css({
			background: '#000',
			color: '#fff'
		})
	}, function() {
		$(this).css({
			background: "#fff",
			color: "#000"
		})
	})
	//背景23隐藏页面点击收起之后收起
	$(".bc23Hidden span").click(function() {
		$(".bc23Hidden").addClass('active');
	})

	//隐藏导航条点击变成白色
	$(".left ul li").click(function() {
		$(this).css('color', '#fff');
		$(this).siblings().css('color', '#999');
	});

	//隐藏导航滑动一定高度显示
	window.onscroll = function() {

		var h = document.documentElement.scrollTop;

		if (h > 400) {
			$(".hiddenNav").removeClass('active');
			$(".nav").addClass('active');
		} else {
			$(".hiddenNav").addClass('active');
			$(".nav").removeClass('active');
		}

	}

	//点击导航标签以后滑动一定高度

	$(".hiddenNav .left ul").find('li')
		.eq(0).click(function() {

			$('body,html').animate({
				"scrollTop": $(".bc1").offset().top - 50
			});
		});


	$(".hiddenNav .left ul").find('li')
		.eq(2).click(function() {
			$('body,html').animate({
				"scrollTop": $(".bc3").offset().top - 50
			});
		})

	$(".hiddenNav .left ul").find('li')
		.eq(4).click(function() {
			$('body,html').animate({
				"scrollTop": $(".recommend-title").offset().top - 50
			});
		})

	$(".hiddenNav .left ul").find('li')
		.eq(6).click(function() {
			$('body,html').animate({
				"scrollTop": $(".postP").offset().top - 50
			});
		})




	//晒单和常见问题切换

	$(".postP ul li").click(function() {
		$(this).addClass('te');
		$(this).siblings().removeClass('te');
		$(".postPic div").eq($(this).index())
			.css('display', 'block');
		$(".postPic div").eq($(this).index())
			.siblings().css('display', 'none');
	})
	// 点击回顶部
	$(".goTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		});
	})



	//点击购物车去购物车
	$(".cart").click(function() {
		location.assign('../cart/cart.html?' + di);
	})

	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})
})
