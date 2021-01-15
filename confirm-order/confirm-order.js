$(function(){
	var d = location.search.slice(1);
	console.log(d);
	
	// 点谁谁变色
	$(".checkBox").click(function(){
		var index = $(".checkBox").index(this);
		$(".checkBox").removeClass('checkBoxChange');
		$(".checkBox").eq(index).addClass('checkBoxChange');
		$(".sure").css("display",'block');
		$(".vxpay").css("display",'none');
	})
	
	// 点击微信付款的时候出现微信收款码
	$(".box2").click(function(){
		$(".sure").css("display",'none');
		$(".vxpay").css("display",'block');
	})
	
	for( var i = 0; i < housearr.length; i++ ){
		if(i == d){
			var priceh = housearr[i].price.slice(1);
			var price = priceh - parseInt(priceh * 0.1) + 50 ;
			
			$(".money").html( "￥" + price );
		}
	}
	
	$(`
		<div class = "messageTitle">订单信息</div>
		<div class = "pic">
			<img src="../house-all/house-all%20img/${housearr[d].pic}" >
			<div class = "title">
				${housearr[d].title}
			</div>
		</div>
		<div>
			<div class = "haveAddress" >收货地址</div>
			<div>
				吕 ／ 13285345763 ／ 安徽 蚌埠 龙子湖区 322423
			</div>
			<div class = "haveAddress" >
				发票信息				
			</div>
			<div>
				不开发票				
			</div>
			<div class = "haveAddress">
				备注信息
			</div>
			<div>
				无
			</div>
		</div>
	`).appendTo($(".message"))
	
	
	
	// 点击确认您支付是判断支付方式
	
	$(".sure").click(function(){
		if(!$(".checkBox").hasClass('checkBoxChange')){
			$(".choseAlert").fadeIn(1000,function(){
				
			});
		}else{
			$(".paySuc").fadeIn(1000,function(){
				
			});
		}
	})
	
	// 点击提示弹窗消失
	$(".choseAlert").click(function(){
		$(".choseAlert").fadeOut(1000,function(){
			
		})
	})
	
	// 点击成功弹窗消失
	$(".paySuc").click(function(){
		$(".paySuc").fadeOut(1000,function(){
			location.assign('../index/index.html');
		})
		
	})
	
	
})
