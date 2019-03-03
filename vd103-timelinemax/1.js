 $(function() {
 	// dinh nghia 1 dong thoi gian
    cd1 = new TimelineMax();
    cd1.to($('.nut1'),1,{x:-300})
    .to($('.nut1'),1,{y:300},"+=1")
    .to($('.nut1'),1,{x:0},"+=1")
    .to($('.nut1'),1,{rotationX:360})
    .to($('.nut1'),1,{rotationX:0,y:0})
    // code cho nut stop
    $('.nutstop').click(function(event) {
    	cd1.stop();
    });
    // code cho nut play
    $('.nutplay').click(function(event) {
    	cd1.play();
    });
    // code cho nut dao nguoc cd
    $('.nutdaonguoc').click(function(event) {
    	cd1.reverse();
    });
})