function sumPrice() {
	var sum = 0;
	var price,count;
	$(".cart_item .selection").map(function (i, item) {
		if($(item).hasClass("selected")) {
			count = $(item).parent().find(".num").html()*1;
			price = $(item).parent().find(".price").html()*1;
			sum+=count*price;
		}
	})
	$(".sum_price .heji").html(sum);
}

// 回退按钮
$(".go_back").click(function () {
	window.history.go(-1);
});

// shop_list轮播图
var mySwiper = new Swiper('.swiper-container', {
	speed: 800,
	autoplay: 5000,
    loop: true,
    pagination: '.swiper-pagination',
})

// 底部导航栏切换
$(".nav_list a").click(function () {
	$(".nav_list a").removeClass('active');
	$(this).addClass('active');
})

// 顶部酒品分类切换
$(".classify_nav a").click(function () {
	$(".classify_nav a").removeClass('active');
	$(this).addClass('active');
})

// 购物车选中切换
$(".cart_item .selection").click(function () {
	$(this).toggleClass("selected");
	sumPrice();
})
$(".cart_item img").click(function () {
	$(this).prev().toggleClass("selected");
	sumPrice();
})

// 购物车加
$(".cart_item .add").click(function () {
	var count = $(this).prev().html()*1;
	var price = $(this).parent().prev().find(".price").html()*1;
	$(this).prev().html(++count);
	$(this).parent().find(".sum").html(count*price);
	sumPrice();
})

// 购物车减
$(".cart_item .sub").click(function () {
	var count = $(this).next().html()*1;
	var price = $(this).parent().prev().find(".price").html()*1;
	if (count === 1) return
	$(this).next().html(--count);
	$(this).parent().find(".sum").html(count*price);
	sumPrice();
})

// 购物车总价
$(".sum_price .selection").click(function () {
	var len = $(".cart_item").length;
	var cartItem = $(".cart_item .selection");
	$(this).toggleClass("selected");
	if($(".cart_item .selected").length === len) {
		cartItem.removeClass("selected");
		sumPrice()
	} else {
		cartItem.map(function (i, item) {
			$(item).hasClass("selected") ? "" : $(item).addClass("selected")
		})
		sumPrice();
	}
})

