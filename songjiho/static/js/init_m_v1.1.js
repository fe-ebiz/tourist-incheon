$(function () {
    //함수실행
    comFn();
    
    //메인일 경우
    if( $('body').hasClass('Main') ){
        //visual 배경
        for( var i = 0 ; i < 4 ; i++ ){
            // 4 = number of bg visual 
            $("#mainVisual").append('<div class="slide slide-'+(i+1)+'"></div>'); 
        }
        
        visualFn();
        viewFn();
    }
    
    $(window).load(function() {
        //리사이즈
        $(window).resize(function() {
            comFn();
            if( $('body').hasClass('Main') ){
                visualFn();
                viewFn();
            }
        }).resize();
    });
});

/* common */
function comFn(){
    var content = $(".contents"), visualTxt = $('#visual .visual-txt');
    var ht = $(window).height();
    var hdH = $('.header-area').height();
    var topBnH = $('.topbn-wrap').height();
    var visualTxtH = visualTxt.height();
    var mapWid = $('.wap-map').width();
    
    //header
    $('.header').css({'height' : hdH +'px'});	
    
    //visual
    $(".Main #visual .bx-viewport, .Main #visual .bg-visual").css({'height' : ((ht/2)+topBnH) +'px'});	
    visualTxt.css({'margin-top' : -(visualTxtH/2) +'px'});
    
    //waycome
    $('.wap-map a').css({'height' : mapWid +'px'});
    
    menuFn(topBnH);
}

/* 메뉴 */
function menuFn(topBnH){
    var hd = $('.header');
    var scltop = $(window).scrollTop();
    var hdH = hd.innerHeight();
    var time = 1200;
    //console.log(hdH)
        
    scrollMenu(scltop, hd);
    
    //menu click
    hd.find('a').on('click', function(e){
        
        if( $('body').hasClass('Main') ){
            if( $(this).parent().hasClass('page-move') ){
                //console.log('page move')
            }else{
                e.preventDefault();
                var target = $(this).attr('href');
                var offsetTop;

                if( target == '#top' ){
                    $('html, body').stop().animate({
                        scrollTop : 0
                    }, time);

                }else{
                    offsetTop = $(target).offset().top;

                    $('html, body').stop().animate({
                        scrollTop : (offsetTop-(hdH+topBnH))
                    }, time);
                }

                return false;
            }
        }
    });
    
    //scroll
    $(window).scroll(function(){
        scltop = $(window).scrollTop();
        //target.offset().top;
        scrollMenu(scltop, hd);
    });
}

/* menu scroll function */
function scrollMenu(scltop, hd){
    var section = $('section[class*="-sec"]');
    var menu = $('.header .menu li');
    var topBn = $('.topbn-wrap');
    var topBnH = $('.topbn-wrap').height();
    var visualH = $("#visual").height();
    var hdH = hd.innerHeight();
    
    //header
    if( scltop < topBnH ){
        hd.removeClass('on').find('.header-area').css({'top' : 0+'px'});
        topBn.removeClass('on');
    }else {
        hd.addClass('on').find('.header-area').css({'top' : topBnH+'px'});
        topBn.addClass('on');
    }
    
    //scroll
    if( $('body').hasClass('Main') ){
        $.each(section, function(idx, item){
            var target = section.eq(idx);
            var secId = ( '#'+String(target.attr('id')) );
            var targetTop = target.offset().top;
            var plusH = hdH+topBnH+1;

            if ( scltop < (visualH-topBnH) ) {
                menu.removeClass('on'); 
            }
            if ( (targetTop-plusH) <= scltop ) {
                menu.removeClass('on');
                menu.find('a[href="'+secId+'"]').parents('li').addClass('on');
            }

        });
    }

}

/* visual slide */
function visualFn(){
    var visual = $("#mainVisual");
    
    //슬라이드
    visual.bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: false,
        pager: false,
        speed: 800,
        duration: 4000
    });
    
}

//view function
function viewFn(){
    var view = $('.Main .view-sec .gs-list');
    var viewLen = view.length;
    var viewTxtH, viewTxtMaxH = [0, 0];
        
    view.find('li .txt-box').css({'height' : 'auto'});
    
    viewTxtMaxH = [0, 0];
    for( var i = 0 ; i < viewLen ; i++ ){
        for( var j = 0 ; j < (view.eq(i).find('li .txt-box').length) ; j++ ){
            viewTxtH = view.eq(i).find('li .txt-box:eq('+j+')').innerHeight();
            //console.log(i, j, viewTxtMaxH[i])
            
            if ( viewTxtMaxH[i] < viewTxtH ) {
                viewTxtMaxH[i] = viewTxtH;
            }
        }
        
        view.eq(i).find('li .txt-box').css({'height' : viewTxtMaxH[i]+'px'});
    }
    
}