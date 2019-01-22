$(function() {
    //함수실행
    sliderFn();
    //tourHeightFn();
    
	$(window).resize(function(){
        tourHeightFn();
	}).resize();
});

// 관광지 슬라이드
function sliderFn() {
    var slider = $('#tour-slider').bxSlider({
        slideWidth : 'auto',
        startSlide : 0,
        moveSlides : 1,
        minSlides : 1,
        maxSlides : 1,
        slideMargin : 0,
        speed : 800,
        auto : false,
        pager : true,
        pagerCustom : '#slider-pager',
        controls : false,
        onSlideAfter : function(){
            slidertitFn();
        }
    });
}

// 관광지 제목 변경
function slidertitFn() {
    var tit = $('.con-area .tit').find('.tit-txt');
    var onPager = $('#slider-pager').find('a.active').text();
    
    tit.text(onPager);
    
    //console.log(onPager)
}

//리스트 박스 높이값 동일하게
function tourHeightFn() {
    
    var maxLiH = 0;
    var tourLi = $('.tour-list > li[class^="nth-"]').length-2;
    var tourConLi = $('.tour-con-list > li[class^="li-"]');
    var tourConLiLen = $('.tour-con-list > li:last-child').attr('class').substring(3);
    //var tourConH = $('.tour-con-list').height();

    for( var i = 0 ; i < tourLi ; i++ ){
        for( var j = 0 ; j < tourConLiLen ; j++ ){
            if( i == 0 ){
                tourConLi.find('.txt-box').css({'height' : 'auto'});
                //console.log(tourConLi.find('.txt-box').height())
            }else{
                if( maxLiH <=  $('.tour-list > li.nth-'+ i +' .tour-con-list li.li-'+ (j+1) +' .txt-box').innerHeight() ){
                    maxLiH = $('.tour-list > li.nth-'+ i +' .tour-con-list li.li-'+ (j+1) +' .txt-box').innerHeight()
                }
                //console.log(i, (j+1), maxLiH);
            }
        }
    }
    tourConLi.find('.txt-box').css({'height' : maxLiH + 'px'});
    $('.bx-viewport').css({'height' : 'auto'});
    //console.log(maxLiH)

    maxLiH = 0;
}