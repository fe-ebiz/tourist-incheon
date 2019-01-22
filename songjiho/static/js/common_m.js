$(function() {
    
	$(window).resize(function(){
        var gnb = $('.header .gnb');
        var main = $('.main');
        var con = $('.contents');
        
		var winW = $(window).width();
		var winH = $(window).height();
        var hdH = $('.header .header-box').outerHeight();
        var fH = $('.footer').outerHeight();
        var mainBox = main.find('.wrap').height();
        
        var baseH = hdH + fH;
        var ht = winH - baseH;
        
        gnb.css({'top' : hdH + 'px'});
        con.css({'min-height' : ht +'px', 'margin-top' : hdH +'px'}); //콘텐츠 최소 높이, 메뉴 fixed만큼의 마진값 줌
        main.css({'height' : ht +'px', 'padding-top' : ( (ht / 2) - (mainBox / 2) ) +'px'}); //메인 높이 및 컨텐츠 가운데 정렬
        
	}).resize();
    
    
    $('.nav-tab').on('click', function(){
        var gnbMargin =  $(".gnb-box").find('.gnb').width();
        
        $(this).toggleClass('on');
        $(".gnb-box").stop().fadeToggle();
        
        if( $(this).hasClass('on') ){
            //console.log('on')
            $(".gnb-box").find('.gnb').stop().delay(100).animate({'margin-right' : 0+'px'});
        }else{
            //console.log('off')
            $(".gnb-box").find('.gnb').stop().delay(0).animate({'margin-right' : -gnbMargin});
        }
    });
})