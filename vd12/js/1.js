$(document).ready(function() {
	console.log('code da chay roi , ahihi');
	console.log('ham tinh vi tri');
	console.log($('.chapter1').offset().top);
	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({ scrollTop: $('.chapter1').offset().top}, 1500, 'easeOutCubic');
	});
	$('.menutren ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({ scrollTop: $('.chapter2').offset().top}, 1000, 'easeInOutExpo');
	});
	$('.menutren ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({ scrollTop: $('.chapter3').offset().top}, 1400, 'easeInOutCubic');
	});
	$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({ scrollTop: $('.chapter4').offset().top}, 1400, 'easeOutCubic');
	});
	// code back to top
	$('.nutlentren').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({ scrollTop: 0}, 2400, 'easeOutCubic');
	});
});