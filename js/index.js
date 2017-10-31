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

$(".nav_list a").click(function () {
	$(".nav_list a").removeClass('active');
	$(this).addClass('active');
})

$(".classify_nav a").click(function () {
	$(".classify_nav a").removeClass('active');
	$(this).addClass('active');
})

$(".cart_item img").click(function () {
	$(this).prev().toggleClass("selected");
})

$(".cart_item .add").click(function () {
	var count = $(this).prev().html()*1;
	var price = $(this).parent().prev().find(".price").html()*1;
	$(this).prev().html(++count);
	$(this).parent().find(".sum").html(count*price);
})

$(".cart_item .sub").click(function () {
	var count = $(this).next().html()*1;
	var price = $(this).parent().prev().find(".price").html()*1;
	if (count === 1) return
	$(this).next().html(--count);
	$(this).parent().find(".sum").html(count*price);
})