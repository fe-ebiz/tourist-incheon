$(function() {
    
	$(window).resize(function(){
        var hd = $('.header');
        var main = $('.main');
        var con = $('.contents');
        
		var winW = $(window).width();
		var winH = $(window).height();
        var hdH = $('.header-area').height();
        var fH = $('.footer').outerHeight();
        var conH;
        
        var baseH = hdH + fH;
        
        main.css({'height' : (winH - fH) +'px'}); //메인 높이
        con.css({'min-height' : baseH +'px'}); //콘텐츠 최소 높이
        
        var conH = con.outerHeight();
        //header (창 높이가 일정크기보다 작을 경우 absolut로)
        if( winH < baseH ){
            hd.css({'position' : 'absolute', 'min-height' : baseH +'px', 'height' : conH + fH +'px'})
        }else{
            hd.css({'position' : 'fixed', 'height' : 100 +'%'})
        }
        
	}).resize();
    
})