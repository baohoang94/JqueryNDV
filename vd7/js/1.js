$(document).ready(function() {
	// cho tat ca noi fdung thu lai
	$('.nd1khoi').slideUp();
	// click vao the h3
	$('.motkhoi h3').click(function(event) {
		/* Act on the event */
		// cho tat ca noi dung co lai truoc
		// $('.nd1khoi').slideUp();
		$(this).next().slideToggle();
		$(this).toggleClass('xanh');
	});
});