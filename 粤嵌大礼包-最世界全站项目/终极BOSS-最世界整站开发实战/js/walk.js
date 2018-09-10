$('#logo_input').on('focus',function(){
	$('.hot_sreach').css('display','block');
});
$('#logo_input').on('blur',function(){
	$('.hot_sreach').css('display','none');
});

//销量
$('.xiaoliang').hover(function(){
	$(this).css('color','#12af7e');
	$(this).find('img').attr('src','./img/sub-01.png');
},function(){
	$(this).css('color','#fff');
	$(this).find('img').attr('src','./img/sub_18.png');
})

//热门目的地下拉菜单
var $caidan = $(".big_title>ul>li:first-child");
$caidan.mouseover(function(){
	$('.side_bars').css('display','block');
	$('.side_bars').mouseover(function(){
		$('.side_bars').css('display','block');
	});
	$('.side_bars').mouseout(function(){
		$('.side_bars').css('display','none');
	})
});
$caidan.mouseout(function(){
	$('.side_bars').css('display','none');
})

//
$.ajax({
	type:'get',
	url:'http://10.3.157.198:8888/getCityWalk',
	async:true,
	success:function (data) {
		city(data);
	}
});
function city(data) {
	var data = JSON.parse(data);
	var msg = data.msg;
	for (var i =0;i <msg.length;i++){
		var $div = $('<div></div>').addClass('common_div');
		var $img_a = $('<a></a>');
		var $img = $('<img/>').attr('src',msg[i].imgurl);
		var $card_div = $("<div></div>").addClass('bigcard');
		var $card_span = $("<span></span>").addClass('timu').html(msg[i].address);
		var $num_div = $("<div></div>").addClass('common_num').html('<span class="num span1">'+msg[i].browseCount+'</span>次浏览<span class="num span2">'+msg[i].soldCount+'</span>件已售');

		//大标题
		var $title_h2 = $("<h2></h2>").addClass('common_h2').css('display','block');
		var $title_a = $('<a></a>').html(msg[i].title);

		// 小标题
		var introduce = msg[i].introduce;
		var $title_ul = $('<ul></ul>').addClass('common_ul').html('<li><img src="../img/xx.png"/>'+introduce[0]+'</li><li><img src="../img/xx.png"/>'+introduce[1]+' </li><li><img src="../img/xx.png"/>'+introduce[2]+'</li>');

		// 价钱
		var $price_div = $('<div></div>').addClass('common_price').html('<span class="line">'+msg[i].oldPrice+'</span><em>'+msg[i].newPrice+'</em>元起');

		// 买
		var $buy_div  =$('<div></div>').addClass('buy');
		var $buy_a = $('<a></a>').html('立即预订');

		$('.common_nav').append($div);
		$($div).append($img_a);
		$($img_a).append($img);
		$($div).append($card_div);
		$($card_div).append($card_span);
		$($card_div).append($num_div);
		$($card_div).append($title_h2);
		$($title_h2).append($title_a);
		$($card_div).append($title_ul);
		$($card_div).append($price_div);
		$($card_div).append($buy_div);
		$($buy_div).append($buy_a);
	}
}