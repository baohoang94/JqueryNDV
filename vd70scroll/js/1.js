$(document).ready(function() {
	$(window).scroll(function(event) {
		// console.log('Ban vua cuon chuot den vi tri');
		// console.log($('html').scrollTop());
		var vitri = $('html').scrollTop();
		if (vitri >= 400) {
			// console.log('Xu ly giao dien menu di');
			$('.menutren').addClass('bienhinh');
		}
		else {
			$('.menutren').removeClass('bienhinh');
		}
	});
});