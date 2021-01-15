$(function() {
	//顶部导航出现效果
	window.onscroll = function() {
		var h = document.documentElement.scrollTop;

		if (h > 200) {
			$(".nav").stop().slideDown(500, function() {

			});
		} else {
			$(".nav").stop().slideUp(500, function() {

			});
		}
	}
	// 回顶部
	$(".goTop").click(function() {
		$(window).scrollTop(0);
	})
	//侧边栏滑过效果
	$(".aside div").mouseover(function() {
		$(this).css('opacity', '0.7');
	})
	$(".aside div").mouseout(function() {
		$(this).css('opacity', '1');
	})
	//到一定高度侧边栏发生变化
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			$(".goTop").fadeIn(500, function() {

			});
		} else {
			$(".goTop").fadeOut(500, function() {

			});
		}
	})
	// 顶部三个链接
	// 点击实体店去实体店页面

	$(".address").click(function() {
		location.assign('../other/national-stores/national-stores.html');
	})

	// 点击实体店去实体店页面

	$(".understand-zaozuo").click(function() {
		location.assign('../other/understand-zaozuo/understand-zaozuo.html');
	})


	// 点击商家合作去商家合作页面

	$(".collaboration").click(function() {
		location.assign('../other/collaboration/collaboration.html');
	})


	// 六块区域
	$(".signature").click(function() {
		location.assign('../other/signature/signature.html')
	})

	// 滑过显示个人中心页面
	$("#logman").hover(function() {
		$("#afterLog").stop().slideDown(500);
	}, function() {
		$("#afterLog").stop().slideUp(500);
	})

	// 点击登录去登录页面
	$("#logman").click(function() {
		location.assign("../log/log.html");
	})
	// 滑过个人中心显示
	$("#afterLog").hover(function() {
		$("#afterLog").stop().slideDown(500);
	}, function() {
		$("#afterLog").stop().slideUp(500);
	})
	// 点击个人中心去个人中心页面
	$("#afterLog").click(function() {
		location.assign("../personal-center/personal-center.html");
	})

	// 点击loge去首页
	$(".logo").click(function() {
		location.assign('./index.html');
	})

	$(".inspiration").click(function() {
		location.assign('../other/inspiration/inspiration.html');
	})

})
