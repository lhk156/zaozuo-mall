$(function() {
	//手机号输入框改变时验证
	$("#phonenumBut").change(function() {
		var phStr = $(this).val();
		var phone = /^1\d{10}$/;
		if (phone.test(phStr)) {
			$("#verification").css('background', '#000');
		} else {
			$("#verification").css('background', '#a0a0a0');
		}

	})
	//点击获取验证码获得验证码
	$("#verification").click(function() {
		var str = '';
		for (var i = 0; i < 5; i++) {
			var ran = parseInt(Math.random() * 10);
			str = ran + str;
		}
		$("#verCoad1").val(str);
		$("#regBut").css('background', '#000');
	})

	$("#regBut").click(function() {
		var phone = /^1\d{10}$/;
		var str = $("#phonenumBut").val();
		if (phone.test(str)) {
			location.assign('../log/log.html');
		} else {
			$(".alear").fadeIn(1000,function(){})
		}

	})
	var butt = document.getElementById("phonenumBut");
	butt.onfocus = function(){
		$(".alear").fadeOut(1000,function(){})
	}
	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})
})
