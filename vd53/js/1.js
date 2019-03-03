$(document).ready(function() {
	$('.noidung').addClass('noidunghienra');
		// xy ly cho momo hien ra
		$('.momo').addClass('noidunghienra');
		var thongbao = setInterval(function() {
		/* process class */
		$('.noidung').removeClass('noidunghienra');
		// xy ly cho momo hien ra
		$('.momo').removeClass('noidunghienra');
		clearInterval(thongbao);
		},4000);
	// xu ly click vao nut 
	$('.nut').click(function(event) {
		/* process class */
		$('.noidung').addClass('noidunghienra');
		// xy ly cho momo hien ra
		$('.momo').addClass('noidunghienra');
	});

	// xu ly nut close & momo
	$('.donglai, .momo').click(function(event) {
		/* process class */
		$('.noidung').removeClass('noidunghienra');
		// xy ly cho momo hien ra
		$('.momo').removeClass('noidunghienra');
	});
});