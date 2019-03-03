$(document).ready(function() {
	// viet cho nut
	$('nav ul li a').click(function(event) {
		// console.log('ahihi');
		// phat hien data-class cua nut dc click
		var danhmuc = $(this).data('class');
		console.log(danhmuc);
		var ten = $(this).text();
		$('section h1').text(ten);

		$('.conten ul li').each(function(index, el) {
			if ($(this).hasClass(danhmuc)) {
				$(this).fadeIn();
			}
			else {
				$(this).fadeOut();
			}
		});
		return false;
	});
});