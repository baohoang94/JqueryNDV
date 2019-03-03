$(document).ready(function() {
	$('#menutren ul li:nth-child(1) a').click( function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({	scrollTop: $('#home').offset().top }, 666, 'easeInQuint');
	});
	$('#menutren ul li:nth-child(2) a').click( function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({	scrollTop: $('#destin').offset().top }, 666, 'easeInQuint');
	});
	$('#menutren ul li:nth-child(3) a').click( function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({	scrollTop: $('#packge').offset().top }, 666, 'easeInQuint');
	});
	$('#menutren ul li:nth-child(4) a').click( function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({	scrollTop: $('#special').offset().top }, 666, 'easeInQuint');
	});
	$('#menutren ul li:nth-child(5) a').click( function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({	scrollTop: $('#blog').offset().top }, 666, 'easeInQuint');
	});
	$('#menutren ul li:nth-child(6) a').click( function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html').animate({	scrollTop: $('#sub').offset().top }, 666, 'easeInQuint');
	});
});