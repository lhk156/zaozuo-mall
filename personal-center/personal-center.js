$(function() {
	//滑过效果
	// $(".privy-nav").animate({"mouseover" : })
	//了解会员体系的滑过效果
	$(".learn").hover(function() {
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
	//导入会员中心的数据
	for (var i = 0; i < priarr.length; i++) {
		$(
			`
			<div class="priBox">
				<img src="${priarr[i].image}" >
				<div class="priTitle">${priarr[i].title}</div>
				<div class="priText">${priarr[i].text}</div>
			</div>
		`
		).appendTo($(".privilege"))
	}

	//我的订单的点击效果

	$(".order-nav li").click(function() {
		$(this).css('color', 'green');
		$(this).siblings().css('color', '#000');
	})
	// 我的优惠券&商品卡点击效果

	$(".discount-nav li").click(function() {
		$(this).css('color', 'green');
		$(this).siblings().css('color', '#000');
		//先找到li的祖父节点，然后在找到两个兑换码的div
		$(this).parent().parent().find('div').find('div')
			.eq($(this).index()).css('display', 'block');
		//找到兑换码的div的兄嘚
		$(this).parent().parent().find('div').find('div')
			.eq($(this).index()).siblings().css('display', 'none');
	})

	//会员中心选项卡

	$(".privy-nav li").click(function() {
		//点击出现下划线
		$(this).addClass('border');
		$(this).siblings().removeClass('border')
		// console.log($(this).index());
		//点击出现，兄弟隐藏
		$(".container1 .box1").eq($(this).index())
			.css('display', 'block');
		$(".container1 .box1").eq($(this).index())
			.siblings().css('display', 'none');
	})

	//我的资料 微信等图标 划过出现绿色底色

	$(".bind ul li").mouseover(function() {
		$(this).css('background', '#0f0');
		$(this).siblings().css('background', '#A0A0A0')
	})
	$(".bind ul li").mouseout(function() {
		$(this).css('background', '#A0A0A0');
	})
	//我的资料 添加银行卡 划过变色

	$(".bankcard-add").hover(function() {
		$(this).css({
			background: '#000',
			color: "#fff"
		})
	}, function() {
		$(this).css({
			background: '#fff',
			color: "#000",
		})
	})
	//我的资料 添加新的收货地址 划过变色
	$(".haveaddress-add").hover(function() {
		$(this).css({
			background: '#5bff88'
		})
	}, function() {
		$(this).css({
			background: '#5bb688'
		})
	})

	// 点击出现添加地址
	$(".haveaddress-add").click(function() {
		$(".bcBox1").css('display', 'block');
	})
	// 点击保存消失
	$(".save").click(function() {
		$(".bcBox1").css('display', 'none');
	})
	//我的收藏页面 单品 设计师 其他点击切换
	//以及点击效果
	$(".favorites-nav li").click(function() {
		$(this).css('color', 'green');
		$(this).siblings().css('color', '#000');

		$(".favorites-text div").eq($(this).index())
			.css('display', 'block');
		$(".favorites-text div").eq($(this).index())
			.siblings().css('display', 'none');


	})
	//会员中心的用户名，应该拿到登录的用户名

	$(".zaoZuo-userName1").html('13285345763');


	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})
	
	
	// 个人资料修改
	//点击齿轮修改个人资料
	 
	$(".set").click(function(){
		$(".bcBox2").css("display","block")
	})
	// 点击保存个人资料卡消失
	$(".confirmBut").click(function(){
		$(".bcBox2").css("display","none");
		$(".zaoZuo-userName1").html($("#nicknameBut").val())
	})
})
