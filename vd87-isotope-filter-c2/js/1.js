$(document).ready(function() {
	$('.conten').isotope({
		itemSelector: 'li'
	});
	// code cho phan nut
	$('nav ul li a').click(function(event) {
		var danhmuc = $(this).data('category');
		// danhmuc = "."+danhmuc;
		var ten = $(this).text();
		// console.log(danhmuc);
		if (danhmuc == 'all') {
			$('section h1').text('Tat ca anh');
			$('.conten ul').isotope({filter:'*'});
		}
		else {
			// dat ten vao h1
			$('section h1').text(ten);
			$('.conten ul').isotope({filter:danhmuc});
		}
		return false;
	});
});