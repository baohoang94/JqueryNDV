 $(function(){
	 $('body').scrollspy({target:'.menutren'});
	 // ap dung ham click
	 $('.menutren ul li a').click(function(event) {
	 	var vitri = $(this).attr('href');
	 	var toado = $(vitri).offset().top;
	 	console.log(toado);
	 	$('html').animate({scrollTop:toado});
	 	return false;
	 });
})  
 