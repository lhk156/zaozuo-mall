$(function(){
	inspirationarr.map(function(item){
		$(
			`
			<div class="pic">
				<img src= "${item.pic} ">
				<div class="title">
					${item.title}
				</div>
				<div class="content">
					${item.content}
				</div>
			</div>
		`
		).appendTo($(".box"));
	})
	
})
