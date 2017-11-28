var swiper,				// 轮播图
	imgs,				// 搜索放大镜
	u, isAndroid,		// 判断终端
	cart,				// 购物车
	t,					// 隐藏菜单栏定时
	preSum = 0;			// 总计（前）
function sumPrice() {
	var sum = 0;
	var price,count;
    var options = {  
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    };
	$(".cart_item .selection").map(function (i, item) {
		if($(item).hasClass("selected")) {
			count = $(item).parent().find(".num").html()*1;
			price = $(item).parent().find(".price").html()*1;
			sum+=count*price;
		}
	})
	var numAnim = new CountUp($(".sum_price .heji")[0], preSum.toFixed(2), sum.toFixed(2), 2, 1, options);
	if (!numAnim.error) {
	    numAnim.start();
	    preSum = sum;
	} else {
	    console.error(numAnim.error);
	}
}
function checkAll() {
	return $(".cart_item .selection").length !== $(".cart_item .selected").length ? $(".sum_price .selection").removeClass("selected") : null;
}
function swiperInit(swiper, ratio) {
	var mySwiper = new Swiper('.swiper-container', {
	    speed: 800,
	    autoplay: 5000,
	    loop: true,
	    pagination: '.swiper-pagination',
	})
	swiper.height(document.documentElement.clientWidth*ratio/16);
}

// 轮播图
swiper = $(".swiper-container");
swiper.length > 0 ? swiper.parent().prop("className") === "bg_up" ? swiperInit(swiper, 9) : swiperInit(swiper, 12) : null;

// 搜索按钮
imgs = $('[alt="搜索"]');
for (i in imgs) {
	!isNaN(i*1) ? imgs[i].src = "data:image/png;base64,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" : "";
}

// 判断终端类型
u = navigator.userAgent;
isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
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

// 顶部酒品分类切换
$(".order_type a").click(function () {
	$(".order_type a").removeClass('active');
	$(this).addClass('active');
})

// 购物车选中切换
$(".cart_item .selection").click(function () {
	$(this).toggleClass("selected");
	checkAll();
	sumPrice();
})
$(".cart_item img").click(function () {
	$(this).prev().toggleClass("selected");
	checkAll();
	sumPrice();
})

// 购物车加
$(".cart_item .add").click(function () {
	var count = $(this).prev().html()*1;
	var price = ($(this).parent().prev().find(".price").html()*1).toFixed(2);
	$(this).prev().html(++count);
	$(this).parent().parent().next().find(".sum").html((count*price).toFixed(2));
	sumPrice();
})

// 购物车减
$(".cart_item .sub").click(function () {
	var count = $(this).next().html()*1;
	if (count === 0) return
	var price = ($(this).parent().prev().find(".price").html()*1).toFixed(2);
	$(this).next().html(--count);
	$(this).parent().parent().next().find(".sum").html((count*price).toFixed(2));
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
cart = $(".nav_list .cart_info").parent().offset();
$('.cart').click(function() {
    var imgSrc = $(this).attr('temp_src');
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

// input输入时让菜单栏隐藏
$("input").focus(function() {
	clearTimeout(t);
	$(".nav_list").hide();
});
$("input").blur(function() {
	t = setTimeout(function () {
		$(".nav_list").show()
	}, 200)
});

// 提示框
$(".msg_mask a").click(function () {
	var __mask = $(this).parent().parent();
	__mask.animate({"opacity": 0}, function () {
		__mask.addClass("msg_dn");
	});
});

// 搜索热词
$(".search_part input").focus(function () {
	$(".hot_words").css("display","block");
});

// 搜索预测
function choose(display) {
	$(".pre_words").css("display", display);
	$(".click_hide").css("display", display);
}
$(".search_part input").change(function () {
	choose("block");
});
$(".pre_words p").click(function () {
	$(".search_part input").val(this.innerHTML);
	choose("none");
});
$(".click_hide").click(function () {
	choose("none");
})

