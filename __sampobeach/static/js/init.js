$(function () {
	$(".contents .slide-container").bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true,
		speed: 1000,
		duration: 6000,
		onSliderLoad: function(currentIndex){
			$(".slide").eq(currentIndex).addClass("active");
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex) {
			$(".slide").eq(oldIndex).removeClass("active");
		},
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			$slideElement.addClass("active");
		}
	});
});