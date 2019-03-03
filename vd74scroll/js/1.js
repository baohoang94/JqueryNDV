$(document).ready(function() {
	// tinh vi tri menu khi chua lam gi ca
	var vitrimenu = $('.menutren').offset().top;
	$(window).scroll(function(event) {
		var vitri = $('html').scrollTop();
		console.log(vitri);
		// code cho menu
		//  tinh vit tri menu
		console.log(vitri);
		if (vitri >= vitrimenu) {
			$('.menutren').addClass('mabubeo');
		}
		else {
			$('.menutren').removeClass('mabubeo');
		}
	});
});