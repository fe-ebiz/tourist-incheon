$(function() {
    
	headerFn();
	scrollFn();
//	visualHt();
	pager();
	
});

function visualHt() {
	var visual = $('.visual'),
		hdHt = $('.header').height(),
		topbnHt = $('.topbn-wrap').height();

	var visualHt = $(window).height() - hdHt - topbnHt;
//	console.log($(window).height());
//	console.log(hdHt);
//	console.log(topbnHt);
//	console.log(visualHt);
	visual.height(visualHt);
}

function scrollFn() {
	var	topbnHt = $('.topbn-wrap').height(),
		setTop = topbnHt;
	
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
//		console.log(scr);
//		console.log(setTop);
		
		if (scr < setTop) {
			$('.header').removeClass('fixed').find('.wrap').css({'top' : 0+'px'});
			$('.topbn-wrap').removeClass('fixed');
		}
		if (scr >= setTop) {
			$('.header').addClass('fixed').find('.wrap').css({'top' : topbnHt+'px'});;
			$('.topbn-wrap').addClass('fixed');
		}
	});
}

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
