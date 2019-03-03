$(document).ready(function() {
	// moi class tinto se di tu doi len 0.5s va len lan luot cach nhau 0.1s
	TweenMax.staggerFrom($('.tinto'), 0.5, {top: 100, opacity: 0}, 0.1);
});