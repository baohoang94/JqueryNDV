$(document).ready(function() {
	// xu ly click vao nut 
	$('.nut').click(function(event) {
		/* process class */
		$('.noidung').addClass('noidunghienra');
		// xy ly cho momo hien ra
		// $('.momo').addClass('noidunghienra');
	});

	// xu ly nut close & momo
	$('.donglai, .momo').click(function(event) {
		/* process class */
		$('.noidung').removeClass('noidunghienra');
		// xy ly cho momo hien ra
		// $('.momo').removeClass('noidunghienra');
	});
});