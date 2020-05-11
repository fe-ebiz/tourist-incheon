$(function () {

	headerFn();
	scrollFn();
	
});

function headerFn() {
	var	hdHt = $('.header').height(),
        topbnHt = $('.topbn-wrap').height();
	
	$('.header .gnb .menu a').bind('click', function(event) {
        var $_anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($_anchor.attr('href')).offset().top - (hdHt+topbnHt)
        });
        event.preventDefault();
    });
}

function scrollFn () {
	var btnTop	= $(".btn-top"),
//		top		= $(".main .slide").height();
		top		= 320,
		gnb		= $(".gnb"),
		hd = $(".header"),
		hdHt = $(".header").height(),
        topbnHt = $('.topbn-wrap').height();
    
	$(window).scroll(function() {
		var scr = $(window).scrollTop();
		if ( scr > hdHt ) {
			hd.addClass("fixed").find('.wrap').css({'top' : topbnHt+'px'});;
			$('.topbn-wrap').addClass('fixed');
		} else {
			hd.removeClass("fixed").find('.wrap').css({'top' : 0+'px'});;
			$('.topbn-wrap').removeClass('fixed');
		}
		if ( scr > top ) {
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
		
		
	});
	btnTop.on("click", function() {
		$("html, body").stop().animate({
			scrollTop: 0
		}, 500);
		return false;
	});
}

function pager() {
	$("#pagenation a").on("click", function () {
		var idx = $(this).index();
		var lastIdx = $(this).closest("div").find("a").length;
		lastIdx--;
		//console.log(lastIdx);
		if (idx != 0 && idx != lastIdx) {
			$(this).addClass("on").siblings().removeClass("on");
		}
		event.preventDefault();
	});
}
