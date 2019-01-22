$(function() {

	//함수 실행
	randomBanner(); //로드시 배경 랜덤
    
    //시간마다 배경 랜덤
    setInterval(function() {
        randomBanner();
    }, 8000);
    
});

//배경 랜덤
function randomBanner(){
    
	var randomNum = Math.floor(Math.random()*4) + 1;

    $('.main').fadeTo('', 0.5, function(){
        $(this).css({'background-image': 'url(./../img/main/banner_0'+randomNum+'.jpg)', "background-size":"cover"});
    }).fadeTo('', 1);
}