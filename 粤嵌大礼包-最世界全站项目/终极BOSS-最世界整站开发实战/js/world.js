$.ajax({
	type:'get',
	url:'http://10.3.157.198:8888/getBanner',
	async:true,
	success:function (data) {
		banner(data);
	}
});
var $banner_ul = $('<ul></ul>');
$('.shuff_tu').append($banner_ul);
function banner(data) {
// 	star('http://10.3.157.198:8888/getBanner','',function (data) {
		var dataObj = JSON.parse(data);
		var msgArr = dataObj.msg;
		for(var i = 0;i<msgArr.length;i++){
			var imgUrl = msgArr[i].imgUrl;
			var $banner_li = $('<li></li>');
			var $banner_a = $('<a></a>');
			$banner_ul.append($banner_li);
			$banner_li.append($banner_a);
			$banner_li.css({
				'background-image':'url('+imgUrl+')',
				'background-position':'-285px 0'
			});
			$banner_a.attr('href',msgArr[i].href);
		}
	// });
}
//=================================================================
//轮播图
var num = 0,y=0;
var shuff_ul = document.querySelector('.shuff_tu ul');
var ols = document.querySelectorAll('.big_screen ol li');
ols[0].style.background = '#ff7467';
//右下一张
function changeImg(){
	num++;
	y++;
	shuff_ul.style.left = -num*100 + "%";
	if(num == 3){
		num = -1;
	}
	if(y == 4){
		y = 0;
	}
	for (var i = 0;i < ols.length;i++) {
		ols[i].style.background = '#000';
	}
	ols[y].style.background = '#ff7467';
}
var imgTime = setInterval(changeImg,2000);

//停止
function stopImg(){
	clearInterval(imgTime);
	imgTime = setInterval(changeImg,2000);
}

//左上一张
var wrap = document.querySelector('.shuff_tu');
var liEles = document.querySelectorAll('.shuff_tu>ul>li');
function lastMove(){
	num--;
	y--;
	if (num < 0) {
		num = liEles.length - 1;
	}
	if(y < 0){
		y = ols.length - 1;
	}
	shuff_ul.style.left = -num*100 + "%";
	for (var i = 0;i < ols.length;i++) {
		ols[i].style.background = '#000';
	}
	ols[y].style.background = '#ff7467';
}

$('.big_screen').mouseover(function(){
	clearInterval(imgTime);
});
$('.big_screen').mouseout(function(){
	stopImg();
});

//右键
$('#right').click(function(){
	changeImg();
	stopImg();
});

//左键
$('#left').click(function(){
	lastMove();
	stopImg();
});

//==================================================
var ols = $('.big_screen ol li');
$('.big_screen ol li').click(function(){
	for (var i = 0;i < ols.length;i++) {
		ols[i].style.background = '#000';
	}
	// ols[$(this).index()].style.background = '#ff7467';
	$(this).css('background','#ff7467');
	console.log($(this));
	$($banner_ul).css('left',-$(this).index()*100 + '%');
	changeImg();
	stopImg();
})
//===============================================================
//APP
var wrap_img = document.querySelector('.wrap_tu img');
$('.wrap_tu').mouseover(function(){
	$(wrap_img).css('top','-4px');
});
$('.wrap_tu').mouseout(function(){
	$(wrap_img).css('top','0px');
});
//=====================================================================

// 菜单
$.ajax({
	type:'get',
	url:'http://10.3.157.198:8888/getMenu',
	async:true,
	success:function (data) {
		menu(data);
	}
});
var imgs = ["img/home_27.868131868132px_1200646_easyicon.net.png","img/home_27.868131868132px_1200646_easyicon.net.png","img/home_27.868131868132px_1200646_easyicon.net.png","img/home_27.868131868132px_1200646_easyicon.net.png","img/home_27.868131868132px_1200646_easyicon.net.png","img/home_27.868131868132px_1200646_easyicon.net.png","img/home_27.868131868132px_1200646_easyicon.net.png"];
function menu(data) {
	var menuData = JSON.parse(data);
	var menu_msg = menuData.msg;

	for (var j =0;j < menu_msg.length;j++){
		var $menu_li = $('<li></li>');

		// 图标
		var $menu_span = $('<span></span>');
		var $menu_img = $('<img/>').attr('src',imgs[j]);

		// 标题
		var $menu_h2 = $('<h2></h2>').addClass('list_h2').html(menu_msg[j].title);
		$('.side_list').append($menu_li);
		$($menu_li).append($menu_span);
		$($menu_span).append($menu_img);
		$($menu_span).after($menu_h2);

		// 一级城市的p标签
		var $menu_p = $('<p></p>').addClass('list_p');
		$($menu_h2).after($menu_p);
		for (var k = 0;k < menu_msg[j].mainCity.length;k++){
			//	一级城市标签a
			var $menu_a = $('<a></a>').attr('href','#').html(menu_msg[j].mainCity[k]);
			$($menu_p).append($menu_a);
		}

		// >
		var $menu_xian = $('<p></p>').addClass('list_xian').html('>');
		$($menu_p).after($menu_xian);


		// 二级菜单
		var $menu_2div = $('<div></div>').addClass('side_content_list').css('display','none');
		$('.side_content').append($menu_2div);
		if(j == menu_msg.length - 2){
			$($menu_2div).css('width','380px');
		}

		var moreCity = menu_msg[j].moreCity;
		for(var l =0;l<moreCity.length;l++){
			var $menu_3div = $('<div></div>').addClass('content-1');
			// 标题
			var $menu_3div_h2 = $('<h2></h2>').html(moreCity[l].cityName);
			// 水平线
			var $menu_hr = $('<hr/>');
			// 存放城市名的p标签
			var $menu_3div_p = $('<p></p>');
			$($menu_2div).append($menu_3div);
			$($menu_3div).append($menu_3div_h2);
			$($menu_3div).append($menu_hr);
			$($menu_3div).append($menu_3div_p);

			if(j == menu_msg.length - 2){
				var $menu_3div_ul = $('<ul></ul>');
				$($menu_hr).after($menu_3div_ul);
			}
			var items = moreCity[l].items;
			for(var o =0;o < items.length;o++){
				var $items_a = $('<a></a>').html(items[o]);
				$($menu_3div_p).append($items_a);
				if (j == menu_msg.length-2){
					$($menu_3div_p).remove();
					var $menu_ul_li = $('<li></li>').css('float','left');
					var $menu_li_img = $("<img/>").attr('src',items[o]).css({'width':'80px','height':'80px','margin-right':'20px','margin-top':'10px'});
					$($menu_3div_ul).append($menu_ul_li);
					$($menu_ul_li).append($menu_li_img);
				}
			}
		};
		var $last_div = $('<div></div>');
		var $last_img = $('<img/>').attr('src',moreCityImg).css('width','280px');
		$($menu_2div).append($last_div);
		$($last_div).append($last_img);
		if (j == menu_msg.length -2){
			$($last_div).remove();
		}
		var moreCityImg = menu_msg[j].moreCityImg;
		if (j == menu_msg.length - 5){
			$($last_div).css({
				'position':'absolute',
				'top':'170px',
				'left':'0px'
			})
		}

		var list_div = document.querySelectorAll('.side_content_list');
		$($menu_li).on('mouseover',function(){
			list_div[$(this).index()].style.display = 'block';
			list_div[$(this).index()].onmouseover = function(){
				this.style.display = 'block';
			}
			list_div[$(this).index()].onmouseout = function(){
				this.style.display = 'none';
			}
		});
		$($menu_li).on('mouseout',function(){
			list_div[$(this).index()].style.display = 'none';
		});
	}
};
//==========================================================================
// 机酒自由行
$.ajax({
	type:'get',
	url:'http://10.3.157.198:8888/getFreeWalk',
	async:true,
	success:function (data) {
		free(data);
	}
});

function free(data) {
	var dataObj = JSON.parse(data);
	var msg = dataObj.msg;
	var $title_ul = $('<ul></ul>').addClass('free_ul jijiu');
	var $free_title = $('.go');
	$($free_title).append($title_ul);
	for (var i=0;i < msg.length;i++){
		var titleData = msg[i].title;
		var $title_li = $('<li></li>');
		var $title_a = $('<a></a>').html(titleData);

		// 卡片
		var $list_ul = $('<ul></ul>').addClass('free_list_ul').css('display','none');
		$('.jijiu').append($title_li);
		$($title_li).append($title_a);
		$('.free').append($list_ul);
		var Data = msg[i].data;
		for(var j=0;j<Data.length;j++){
			var $list_li = $('<li></li>');
			$($list_ul).append($list_li);

			var $list_a = $('<a></a>');
			var $list_a_p = $('<p></p>');
			var imgUrl = Data[j].imgUrl;
			var $list_a_p_img = $("<img/>").attr('src',imgUrl);

			// 价格
			var $price_div = $('<div></div>');
			var $price_p = $("<p></p>").html('机+酒');
			var $money_p = $('<p></p>').html('元起');
			var $money_em = $("<em></em>").html(Data[j].price);

			// 标题
			var $title_div = $('<div></div>');
			var $title_h3 = $('<h3></h3>').html(Data[j].title);
			$list_li.append($list_a);
			$list_a.append($list_a_p);
			$list_a_p.append($list_a_p_img);
			$list_a.after($price_div);
			$price_div.append($price_p);
			$price_p.after($money_p);
			$money_p.prepend($money_em);
			$price_div.after($title_div);
			$title_div.append($title_h3);

			if(j == 0){
				$($price_div).addClass('free_bigdiv');
				$($list_li).addClass('free_list_li_big');
				$($price_p).addClass('free_bigp');
				$($money_p).addClass('free_bigprice');
				$($title_div).addClass('free_list_bigtitle');
				$($title_h3).addClass('free_list_bigh3');
			}else{
				$($price_div).addClass('free_div');
				$($list_li).addClass('free_list_li');
				$($price_p).addClass('free_p');
				$($money_p).addClass('free_price');
				$($title_div).addClass('free_list_title');
				$($title_h3).addClass('free_list_h3');
			}
		}
		var $last_li = $("<li></li>").addClass('free_list_li last');
		var $last_p = $('<p></p>').addClass('free_list_zi').html('查看更多<br/>机酒自由行产品');
		var $last_imgP = $("<p></p>").addClass('free_list_tu');
		var $last_img = $('<img/>').attr('src','../img/right_64px_1199480_easyicon.net.png');
		var $last_pp = $('<p></p>').addClass('free_list_p').html('<a href="">机票</a>&nbsp;|&nbsp; <a href="">酒店</a>&nbsp;|&nbsp; <a href="">机+酒</a>&nbsp;|&nbsp; <a href="">邮轮</a>');
		$($list_ul).append($last_li);
		$($last_li).append($last_p);
		$($last_li).append($last_imgP);
		$($last_imgP).append($last_img);
		$($last_li).append($last_pp);
	}
	//机酒自由行的卡片切换
	var liEles = document.querySelectorAll('.jijiu li');
	var aEles = document.querySelectorAll('.jijiu li a');
	$(aEles[0]).css('color','#16c1a0');
	$(liEles[0]).css('border-bottom','3px solid #16c1a0');

//div
	var divEles = document.querySelectorAll('.free ul');
	divEles[0].style.display = 'block';
//=====================================================================
//标题
	$(liEles).mouseover(function(){
		for (var i =0;i<liEles.length;i++) {
			$(aEles).css('color','#323232');
			$(liEles).css('border-bottom','none');
			$(divEles).css('display','none');
		};
		$(aEles[$(this).index()]).css('color','#16c1a0');
		$(liEles[$(this).index()]).css('border-bottom','3px solid #16c1a0');
		$(divEles[$(this).index()]).fadeIn();
	});
	$(liEles).mouseout(function(){
		$(aEles[$(this).index()]).css('color','#16c1a0');
		$(liEles[$(this).index()]).css('border-bottom','3px solid #16c1a0');
		$(divEles[$(this).index()]).css('display','block');
	});
}