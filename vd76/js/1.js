$(document).ready(function() {
	$(window).scroll(function(event) {
		var vitribody = $('html').scrollTop();
		var vitrigiaodien = $('.giaodien').offset().top - 400;
		if (vitribody >= vitrigiaodien) {
			console.log('ahihi');
			// doan nay add class
			// $('.giaodien').addClass('fadeInRight animated');
			$('.giaodien .khoi:nth-child(1)').addClass('fadeInRight animated');
			$('.giaodien .khoi:nth-child(2)').addClass('rotateInDownLeft animated');
			$('.giaodien .khoi:nth-child(3)').addClass('rotateInDownRight animated');
			$('.giaodien .khoi:nth-child(4)').addClass('lightSpeedIn animated');
			$('.giaodien .khoi:nth-child(5)').addClass('bounceInUp animated');
			$('.giaodien .khoi:nth-child(6)').addClass('bounceInDown animated');
		}
	});
});