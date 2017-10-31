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