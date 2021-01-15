$(function() {
	//密码登录和快捷登录之间的选项卡切换
	$(".fastlog").click(function() {
		$(".fastlog-page").css('display', 'block');
		$(".pslog-page").css('display', 'none');
		$(".fastlog").css('color', 'black');
		$(".pslog").css('color', '#a0a0a0');
	})
	$(".pslog").click(function() {
		$(".pslog-page").css('display', 'block');
		$(".fastlog-page").css('display', 'none');
		$(".pslog").css('color', 'black');
		$(".fastlog").css('color', '#a0a0a0');
	})

	//输入手机号部分改变并且光标离开时判断
	$("#phoneNum").change(function() {

		// 手机号正则
		var phoneStr = $("#phoneNum").val();

		var phoneNum1 = /^1\d{10}$/;
		//如果符合条件，获取验证码按钮变成黑色
		if (phoneNum1.test(phoneStr)) {
			$("#verification").css('background', '#000');

		} else {
			$("#verification").css('background', '#a0a0a0');
		}
	});
	//验证码部分改变并且光标离开时判断
	//验证码123456
	// $("#verCoad").change(function(){
	// 	var verStr = $("#verCoad").val();
	// 	if( verStr == '123456' ){
	// 		$("#logBut").css('background','#000');
	// 	}else{
	// 		$("#logBut").css('background','#a0a0a0')
	// 	}
	// })


	//点击获取验证码变化
	$("#verification").click(function() {
		var str = '';
		for (var i = 0; i < 5; i++) {
			var ran = parseInt(Math.random() * 10);
			str += ran;
		}
		$("#verCoad").val(str);
		// 登录按钮变色
		$("#logBut").css('background', '#000');
	})
	//点击登录跳转到个人中心页面
	// 暂时写一个手机号
	// 暂定密码123456
	$("#logButton").click(function() {
	
		if ($("#phNum").val() == '13285345763' && $("#passWord").val() == '123456') {
			isLog = true;
			location.assign('../index/index.html');
		} else {
			$(".alear").fadeIn(1000, function() {});
		}
		// localStorage.setItem()
	})
	// 获取光标时提示消失
	var button1 = document.getElementById("phNum");
	button1.onfocus = function() {
		$(".alear").fadeOut(1000, function() {})
	}
	
	
	//手机号验证登录
	$("#logBut").click(function() {
	
		if ($("#phoneNum").val() == '13285345763') {
			isLog = true;
			location.assign('../index/index.html');
		} else {
			$(".alear").fadeIn(1000, function() {});
		}
	
	})
	// 获取光标时提示消失
	var button = document.getElementById("phoneNum");
	button.onfocus = function() {
		$(".alear").fadeOut(1000, function() {})
	}


	//密码登录部分
	//输入框内容改变并且光标离开时判断
	$("phNum").change(function() {

		var phStr = $(this).val();
		// 手机号正则
		var phNum1 = /^1\d{10}$/;
		if (phNum1.test(phStr)) {
			$("#logButton").css('background', '#666');
		} else {
			$("#logButton").css('background', '#a0a0a0');
		}

	})
	//密码输入框内容改变并且光标离开时判断

	$("#passWord").change(function() {
		if ($(this).val('123456')) {
			$("#logButton").css('background', '#000');
		} else {
			$("#logButton").css('background', '#a0a0a0');
		}
	})

	//点击登录跳转到个人中心页面
	// 暂时写一个手机号
	// 暂定密码123456



	// $("#logButton").click(function() {
	// 	// console.log($("#phNum").val());
	// 	if( $("#phNum").val() == '13285345763' && $("#passWord").val() == '123456'){
	// 		location.assign('../personal-center/personal-center.html');
	// 	}else{
	// 		alert('请确认您的信息');
	// 	}

	// })
	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})

})
