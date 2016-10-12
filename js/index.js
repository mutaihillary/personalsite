(function () {
	$(window).scroll(function () {

		if ($(this).scrollTop() > 180) {
			$('.navbar').addClass('nav--sticky');
		} else {
			$('.navbar').removeClass('nav--sticky');
		}
	});
})();



function fader() {
	var r = $('.blurred')
		, wh = $(window).height()
		, dt = $(document).scrollTop()
		, elView, opacity;

	// Loop elements with class "blurred"
	r.each(function () {
		elView = wh - ($(this).offset().top - dt + 200);
		if (elView > 0) { // Top of DIV above bottom of window.
			opacity = 1 / (wh + $(this).height()) * elView * 2
			if (opacity < 1) // Bottom of DIV below top of window.
				$(this).css('opacity', opacity);
		}
	});
}

$(document).bind('scroll', fader);

$(document).ready(function () {
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900);
	});
});

jQuery(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#to-top').fadeIn('slow');
		} else {
			$('#to-top').fadeOut('slow');
		}
	});
});

var flkty = new Flickity('.main-gallery', {
	cellAlign: 'left'
	, wrapAround: true
	, prevNextButtons: true
	, autoPlay: 5000
});

$(document).ready(function () {

	var currentTime = new Date()
	var year = currentTime.getFullYear();
	$("#currentYear").html(year);
});
