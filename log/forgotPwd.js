$(function() {
	// 手机号正则
	var phoneNum = /^1\d{10}$/;
	$("#phonenumBut").blur(function() {
		str = $(this).value;
		if (phoneNum.test(str)) {
			console.log(111);
		} else {

		}
	})
	// 点击获取验证码获取
	$("#verification").click(function() {
		var str = '';
		for (var i = 0; i < 5; i++) {
			ran = parseInt(Math.random() * 10);
			str = str + ran;
		}
		$("#ver").val(str);
	})
	// 失去焦点时判断
	$("#phonenumBut").blur(function() {
		if ($("#phonenumBut").val() != "13285345763") {
			$(".alear2").fadeIn(1000, function() {});
		} else {
			$("#verification").css("background", '#000');
		}
	})
	// 获取焦点时
	$("#phonenumBut").focus(function() {
		$(".alear2").fadeOut(1000, function() {})
	})
	//点击登录去登录页面
	$(".btlog").click(function() {
		if ($("#phonenumBut").val() && $("#ver").val()) {
			$(".alear1").fadeIn(1000, function() {
				location.assign("./log.html");
			})

		} else {
			$(".alear3").fadeIn(1000, function() {
				location.assign("./forgotPwd.html");
			})
		}
	})
})
