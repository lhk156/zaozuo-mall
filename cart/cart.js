$(function() {

	for (var i = 0; i < cartArr.length; i++) {
		$(
			`
	<div class="cartListBody">
			<div>
				<input type="checkbox" name="" class="cartListCheck"/>
			</div>
			<div class="product-pic">
				<img src="../house-all/house-all img/${cartArr[i].pic}" >
			</div>
			<div class="product-title">
				${cartArr[i].title}
			</div>
			<div class="product-time">
				预计2020-12-10前发货
			</div>
			<div class="product-price">
				${cartArr[i].price}
			</div>
			<div class="product-num">
				<div class = 'lessnum'>-</div>
				<div class = 'num'>${cartArr[i].count}</div>
				<div class = 'addnum'>+</div>
			</div>
			<div class='product-features'>
				<span>修改</span><span>|</span><span class="delete">删除</span>		
				
			</div>
	</div>
		`
		).appendTo($(".productBox"))
	}

	var d = location.search.slice(1) || 1;

	$(
		`
	<div class = "cartListBody">
		<div>
			<input type="checkbox" name="" class="cartListCheck"/>
		</div>
		<div class="product-pic">
			<img src="../house-all/house-all img/${housearr[d].pic}" >
		</div>
		<div class="product-title">
			${housearr[d].title}
		</div>
		<div class="product-time">
			预计2020-12-10前发货
		</div>
		<div class="product-price">
			 ${housearr[d].price}
		</div>
		<div class="product-num">
			<div class = 'lessnum'>-</div>
			<div class = 'num'>1</div>
			<div class = 'addnum'>+</div>
		</div>
		<div class='product-features'>
			<span>修改</span><span>|</span><span class="delete">删除</span>		
			
		</div>
	</div>
	`
	).appendTo($(".productBox1"));

	// 把新加的商品放入数组
	cartArr.unshift(Object.assign({
		"houseId": 3,
		"pic": "图片",
		"title": $(".product-title").text().slice(4, 8),
		"price": $(".product-price").text().slice(5, 10),
		"count": 1
	}));
	// console.log(cartArr);
	//有东西的数组
	// cartArr
	//空数组，存放选中的商品
	var goodsSelect = [];


	var count = 0;
	// 复选框点击事件
	$(".cartListCheck").click(function() {
		var index = $('.cartListCheck').index(this);
		// console.log(index)
		// console.log(cartArr[index]);
		if (this.checked) {
			count++;
			$(".number1").html(count);
			goodsSelect.push(cartArr[index]);
		} else {
			count--;
			$(".number1").html(count);
			var i = goodsSelect.indexOf(cartArr[index]);
			goodsSelect.splice(i, 1);
		}
		// console.log(goodsSelect);

		//当全部选择时，全选按钮亮起
		//少一个全选按钮就不亮
		if (count == cartArr.length) {
			$('#checkBox')[0].checked = true;
		} else {
			$('#checkBox')[0].checked = false;
		}
		changeTotalPrice();
		// 商品数量
		$(".number1").html(count);
	})
	//全选的复选框点击事件
	$('#checkBox').click(function() {
		// console.log(this.checked)
		if (this.checked) {
			$('.cartListCheck').prop('checked', true);
			goodsSelect = cartArr.concat();
			count = $(".cartListCheck").length;
			$(".number1").html(count);
		} else {
			$('.cartListCheck').prop('checked', false);
			goodsSelect = [];
			count = 0;
			$(".number1").html(count);
		}
		changeTotalPrice();
	})

	//- 的点击事件
	$('.lessnum').click(function() {
		//通过index传this下标得到this为第几个class
		var index = $('.lessnum').index(this);
		cartArr[index].count--;
		if (cartArr[index].count <= 0) {
			cartArr[index].count = 0
		}
		$('.num').eq(index).html(cartArr[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	})

	//+ 的点击事件
	$('.addnum').click(function() {
		//通过index传this下标得到this为第几个class
		var index = $('.addnum').index(this);
		cartArr[index].count++;

		$('.num').eq(index).html(cartArr[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	});



	//点击删除按键
	$('.delete').click(function() {
		var index = $('.delete').index(this);

		$('.cartListBody')[index].remove();
		var i = goodsSelect.indexOf(cartArr[index]);
		if (i > -1) {
			goodsSelect.splice(i, 1);
		}
		cartArr.splice(index, 1);

		changeTotalPrice();
		if (cartArr.length == 0) {
			$(".product").css("display", 'none');
			$(".none").css("display", 'block');
		} else {
			$(".product").css("display", 'block');
			$(".none").css("display", 'none');
		}
		// 商品数量
		count = goodsSelect.length;
		$(".number1").html(count);
		
		if (count == cartArr.length) {
			$('#checkBox')[0].checked = true;
		} else {
			$('#checkBox')[0].checked = false;
		}
	})



	//单个商品的总价
	function OneGoodsPrice(index) {
		var pc = cartArr[index].price.slice(1);
		pc = cartArr[index].count * pc;
		
		$('.product-price').eq(index).html("￥" + pc);
	}

	//把选中的购物车里面的单价和数量算出总价
	function changeTotalPrice() {
		
		var total = 0;
		for (var i = 0; i < goodsSelect.length; i++) {
			total += Number(goodsSelect[i].price.slice(1) * goodsSelect[i].count);

		}
		$('.total').html("￥" + total);
	}
	// 点击支付去支付页面
	$(".order-once").click(function() {
		location.assign('../buy-page/buy-page.html?' + d);
	})

	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})
})
