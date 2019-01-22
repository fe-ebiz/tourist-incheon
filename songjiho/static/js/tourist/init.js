$(function() {
    //함수실행
    sliderFn();
    
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
        pager : true,
        pagerCustom : '#slider-pager',
        controls : true,
        nextSelector : '#slider-next',
        prevSelector : '#slider-prev',
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
