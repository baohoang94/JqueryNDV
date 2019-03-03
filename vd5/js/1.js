$(document).ready(function() {
	$('body').click(function(event) {
		$('h1').animate({
			marginLeft: 500,
			marginTop: 500,
			opacity: 0},
			5000, function() {
			// console.log($);
		});
	});
});
