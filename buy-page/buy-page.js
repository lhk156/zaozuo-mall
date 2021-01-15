$(function() {

	var d = location.search.slice(1) || 1;
	// console.log(d)
	$(
		`
		<div class="single-pic">
			<img src="../house-all/house-all img/${housearr[d].pic}" >
		</div>
		<div class="single-title">
			<span>${housearr[d].title}</span>
		</div>
		<div class="single-time">
			预计2020-11-13前发货
		</div>
		<div class="single-price">
			${housearr[d].price}
		</div>
		<div class="single-num">
			×1
		</div>
	`
	).appendTo($(".singleBox"))




	//结算条滑动到一定高度变成相对自身的定位
	$(window).scroll(function() {
		if ($(window).scrollTop() > 900) {
			$(".payment-nav").css({
				position: 'relative'
			})
		} else {
			$(".payment-nav").css({
				position: 'fixed',
				bottom: '0'
			})
		}
	})
	//点击开发票出现信息
	$(".invoice-get").click(function() {
		$(".bcBox").css('display', 'block');
	})
	//点击确认保存信息消失
	$(".invoice-info .sure").click(function() {
		$(".bcBox").css('display', 'none');
	})
	//点击添加收货地址出现地址选择
	$(".addAddress").click(function() {
		$(".bcBox1").css('display', 'block');

	})
	// 点击背景消失
	$(".bcBox1").click(function() {
		
		if ( $(".shopAddress").click(function() {}) ) {
			return;
		}else{
			console.log(111)
			$(".bcBox1").css("display","none");
		}

	})
	//点击保存并使用收货地址消失并把信息传入html
	$(".shopAddress .save").click(function() {
		//先判断选择的东西不能是空
		if ($("#province").val() == "省份" || $("#city").val() == "地级市" || $("#county").val() == "市、县级市、县") {
			$(".prompt").fadeIn(1000, function() {

			})
		} else if (!$(".street").val() || !$(".houseNumber").val()) {
			$(".prompt").fadeIn(1000, function() {

			})
		} else if (!$("#name").val() || !$("#phonenum").val()) {
			$(".prompt").fadeIn(1000, function() {

			})
		} else {
			$(".bcBox1").css('display', 'none');

			$(
				`
					<div class = "addNewAdd1">
						<div class = "nameph">
							${$("#name").val()}
							${$("#phonenum").val()}
						</div>
						<div class = "province">
							${$("#province").val() + "省"}
							${$("#city").val() + "市" }
							${$("#county").val() +"区/县"}
						</div>
						<div class = "streetHOU">
							${$(".street").val()}
							${$(".houseNumber").val()}
						</div>
						<div class = "deleteAddress">
							<div class = "default">默认地址</div>
							<img src="./buy-page-img/delete.png" >
						</div>
					</div>
				`
			).prependTo($(".addNewAdd"));
			$(".addNewAdd").css("display", 'block');
			$(".addAddress").css("left", '80px');
		}

		//点击删除时删除信息
		$(".deleteAddress").click(function() {

			$(this).parent().remove();
			if ($(".addNewAdd1").length == 0) {
				$(".addAddress").css("left", '-400px');
			}

		})

	})

	// 点击提示信息提示信息消失
	$(".prompt").click(function() {
		$(this).fadeOut(1000, function() {

		})
	})

	// 商品合计价格
	var price = $(".single-price").html().slice(5);
	$(".total").html("￥" + price);

	//商品折扣价格
	var disPrice = parseInt($(".total").html().slice(1) * 0.1);
	$(".discount").html("￥" + disPrice)


	//运费
	var ship = $(".ship").html().slice(1);
	// console.log(ship);

	//实付

	var actPaid = price - disPrice + Number(ship);

	$(".actPaid").html("￥" + actPaid);


	// 点击结算去订单确认
	$(".payment-button").click(function() {
		location.assign("../confirm-order/confirm-order.html?" + d);
	})


	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})
})
