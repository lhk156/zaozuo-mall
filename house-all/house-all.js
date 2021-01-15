//点击图片去详情页
function hadeClick(id) {

	location.assign('../product-details/product-details.html?' + id);

}
$(function() {

	//列表页传数据
	for (var i = 0; i < housearr.length; i++) {
		$(
			`
			<div onclick = 'hadeClick(${housearr[i].houseId})'>
				<div class="pic">
					<img src="./house-all img/${housearr[i].pic}" >
				</div>
				<div class="title">${housearr[i].title}</div>
				<div class="price">${housearr[i].price}</div>
				<div class="tips">${housearr[i].tips}</div>
			</div>
		`
		).appendTo($(".container1"));
	}

	//点击logo去首页
	$(".logo").click(function() {
		location.assign("../index/index.html");
	})
	
	// 点击回顶部
	$(".goTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		});
	})
})
