$(function() {
	$(window).resize(function(){
        heightFn();
	}).resize();
});

//리스트 박스 높이값 동일하게
function heightFn() {
    var maxLiH = 0;
    var li = $('.gs-list > li');
    var liLen = li.length;
    //var tourConH = $('.tour-con-list').height();

    for( var i = 0 ; i < liLen ; i++ ){
        if( i == 0 ){
            li.find('.txt-box').css({'height' : 'auto'});
        }else{
            if( maxLiH <=  $('.gs-list > li.li-'+ i +' .txt-box').innerHeight() ){
                maxLiH = $('.gs-list > li.li-'+ i +' .txt-box').innerHeight()
            }
        }
        //console.log(i+1, maxLiH);
    }
    li.find('.txt-box').css({'height' : maxLiH + 'px'});
    //console.log(maxLiH)

    maxLiH = 0;
}