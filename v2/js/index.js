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

// 判断终端类型
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
$(".tab span").addClass(isAndroid ? "_android" : "_ios");

// 回退按钮
$(".go_back").click(function () {
	window.history.go(-1);
});

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
	if (count === 1) return
	var price = $(this).parent().prev().find(".price").html()*1;
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
		$(this).removeClass("selected");
		sumPrice()
	} else {
		cartItem.map(function (i, item) {
			$(item).hasClass("selected") ? "" : $(item).addClass("selected")
		})
		sumPrice();
	}
})

// 购物车效果
var cart = $(".nav_list .cart_info").parent().offset();
$('.cart').click(function() {
    var imgSrc = $(this).parent().parent().parent().find('img').attr('src');
    var flyer = $('<img class="u-flyer" width="50" height="50" style="z-index:100;border-radius:50%;" src="'+imgSrc+'">');
    flyer.fly({
        start: {
            left: event.pageX - 15, //开始位置（必填）#fly元素会被设置成position: fixed
            top: event.pageY - 25, //开始位置（必填）
        },
        end: {
            left: cart.left + 50, //结束位置（必填）
            top: cart.top + 20, //结束位置（必填）
            width: 10, //结束时高度
            height: 10, //结束时高度
        },
        onEnd: function() {
            this.destory(); //移除dom
        } //结束回调
    });
});