$(document).ready(function() {
	$('.conten').isotope({
		itemSelector: 'li'
	});
	// code cho phan .tukhoa
	$('.tukhoa').keypress(function(event) {
		if (event.keyCode == '13') {
			tu1 = $('.tukhoa').val();
			tu1 = '.'+tu1;
			$('.conten ul').isotope({filter:tu1});
			console.log(tu1);
		}
	});
	// tu dong tim khi an tu khoa
	thoigian = setInterval(function(){
		tu1 = $('.tukhoa').val();
		tu1 = '.'+tu1;
		$('.conten ul').isotope({filter:tu1});
	},200);
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