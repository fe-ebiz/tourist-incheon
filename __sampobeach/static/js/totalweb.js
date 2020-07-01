$(function() {  
    //배너
    $(window).resize(function() {
        var scltop = $(window).scrollTop();
        var wd = $(window).width();
        var rwBox = $('.rWing-2 .rw-box');
        var allWd = ((rwBox.width())*2) + (60*2) + 1180 ; //60 : 디자인상 콘텐츠와 배너 간격, 1180 : min-width
        var rwTop = 30;
        //console.log(allWd)
        
        if( $('.rWing-2').hasClass('type-2') ){
            //console.log('ok');
            rwTop = 130;
        }else{
            rwTop = 30;
        }

        $('.header, .footer, .contents').css({'min-width' : allWd +'px'})
        $('.rWing-2').css({'width' : allWd +'px'})
        rwBox.css({'top' : rwTop+'px'})

        $(window).scroll(function(){
            scltop = $(window).scrollTop();

            rwBox.css({'top' : (scltop+rwTop)+'px'})

        });

    }).resize();
	
});