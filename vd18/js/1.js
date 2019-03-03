$(document).ready(function() {
	// xu ly doi mau khi clich vao khoi
	$('.tdkhoi').click(function(event) {
		 // Act on the event 
		$(this).toggleClass('xanh');
		// khi click vao cho noi dung hien ra
		$(this).next().slideToggle(900, 'easeInOutExpo');
		// su dung ham animate de chuyen noi dung len
		$('html').animate({scrollTop: $(this).offset().top}, 900, 'easeInOutExpo');
	});
	// code cho anh phong to
	$('.vaicaianh a').fancybox({'transitionIn'	: 'elastic'});

	// xu ly co dan noi dung accordion
	$('.ndkhoi').slideUp();
});