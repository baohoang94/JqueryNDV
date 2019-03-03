$(document).ready(function() {
	// code here
	$('.noidungthem').slideUp(0);
	TweenMax.staggerFrom($('.noidungbandau .to'), .5, {top: 100, opacity: 0}, 0.1);
	$('.nutload').click(function(event) {
		/* Act on the event */
		$('.noidungthem').slideDown(200);
		TweenMax.staggerFrom($('.noidungthem .to'), .8, {left: 100, opacity: 0}, 0.2);
	});
});