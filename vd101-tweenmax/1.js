 $(function() {
    // TweenMax.fromTo($('.btn'), 1, { y: 200, opacity:0 }, { y: 0, opacity:1 });
    vdstaggerfrom();
    function vdstaggerto() {
    	TweenMax.staggerTo($('.btn'),2,{x:-300,opacity:0},0.5);
    }
    function vdstaggerfrom() {
    	TweenMax.staggerFrom($('.btn'),2,{y:300,opacity:0,ease:Bounce.easeOut},0.5);
    }
})