$(document).ready(function() {
	// ham tu dong chuyen
	thoigian = setInterval(function(){
		$('.next').trigger('click');
	}, 3000)
    // code nut next
    $('.next').click(function(event) {
    	// huy chay tu dong
    	clearInterval(thoigian);
        var sau = $('.active').next();
        // xu ly cho phan nut
        var vitri = $('.xanh').index()+1;
        $('.nutslide ul li').removeClass('xanh');
        if (vitri == $('.nutslide ul li').length) {
        	vitri = 0;
        }
        $('.nutslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');
        // xu ly cho phan slide
        // kiem tra slide cuoi cung
        if (sau.length == 0) {
            $('.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
                $('.bienmatobentrai').removeClass('bienmatobentrai');
            });
            $('.anhslide ._1slide:first-child').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
                // bo active di
                $('.active').removeClass('active');
                // cho cais sau active
                $('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
            });
        } else {
            // code cho phan addclass ban dau
            $('.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
                $('.bienmatobentrai').removeClass('bienmatobentrai');
            });
            sau.addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
                // bo active di
                $('.active').removeClass('active');
                // cho cais sau active
                $('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
            });
        }
    });
    // end nut next
    // begin nut prev
    $('.prev').click(function(event) {
    	// huy chay tu dong
    	clearInterval(thoigian);
        var truoc = $('.active').prev();
        // xu ly cho phan nut
        var vitri = $('.xanh').index()+1;
        $('.nutslide ul li').removeClass('xanh');
        if (vitri == 1) {
        	vitri = $('.nutslide ul li').length + 1;
        }
        $('.nutslide ul li:nth-child('+(vitri-1)+')').addClass('xanh');
        // xu ly cho phan slide
        if (truoc.length == 1) {
            $('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
                $('.bienmatobenphai').removeClass('bienmatobenphai');
            });
            truoc.addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
                // bo active di
                $('.active').removeClass('active');
                // cho cais sau active
                $('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
            });
        } else {
            $('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
                $('.bienmatobenphai').removeClass('bienmatobenphai');
            });
            $('.anhslide ._1slide:last-child').addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
                // bo active di
                $('.active').removeClass('active');
                // cho cais sau active
                $('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
            });
        }
    });
    // code cho nut chuyen skide ben duoi
    $('.nutslide ul li').click(function(event) {
        // tat ca ko nut nao xanh
        $('.nutslide ul li').removeClass('xanh');
        $(this).addClass('xanh');
        // nut xu ly cho slide
        // cho slide hien tai bien mat
        $('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
            $('.bienmatobenphai').removeClass('bienmatobenphai');
        });
        console.log($(this).index() + 1);
        $('.anhslide ._1slide:nth-child('+($(this).index() + 1)+')').addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
            // bo active di
            $('.active').removeClass('active');
            // cho cais sau active
            $('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
        });
    });
});