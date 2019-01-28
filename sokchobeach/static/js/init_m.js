$(function () {
	
	sliderFn();
	
    if( $('div').hasClass('topbn-wrap') && $('.topbn-wrap').css('display') != 'none' ){
        tbnheaderFn();
    }
	
});

function sliderFn() {
	var slider = $(".contents .slide-container");
	slider.bxSlider({
//		mode: 'vertical',
		mode: 'fade',
		auto: true,
		autoControls: true,
		speed: 800,
		duration: 5000,
		onSliderLoad: function(currentIndex){
			slider.children().addClass("active");
			slider.children().eq(currentIndex + 1).removeClass("active");
		},
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			slider.children().removeClass("active");
			$slideElement.addClass("active");
		}
	});
	
}

/* 상단띠배너 존재 시 헤더 */
function tbnheaderFn() {
    $(document).ready(function(){
        var hd = $('header');
        var tbn = $('.topbn-wrap');
        var tbnH = tbn.height();
        //console.log(tbnH, 'a')

        hd.css({'padding-top' : tbnH +'px'}).find('.wrap').css({'position' : 'relative'});

        $(window).scroll(function(){
            var num = $(this).scrollTop();


             if( num > (tbnH-1) ){
                 hd.css({'position' : 'fixed'})
                 tbn.css({'position' : 'fixed'});
             }else{
                //console.log(tbnH)
                 hd.css({'position' : 'absolute'})
                 tbn.css({'position' : 'relative'});
             }
        });
    });
}