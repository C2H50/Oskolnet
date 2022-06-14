$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHieght: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		speed: 800,
		easing: '_linear_',
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
	});
});
$(document).ready(function () {
	$('.slider-2').slick({
		arrows: true,
		dots: true,
		adaptiveHieght: true,
		slidesToShow: 1,
		slidesToScroll: 2,
		speed: 800,
		easing: '_linear_',
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 1255,
				settings: {
					arrows: false
				}
			}
		]
	});
});
$(document).ready(function () {
	$('.slider-3').slick({
		arrows: false,
		dots: true,
		adaptiveHieght: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		easing: '_linear_',
		infinite: false,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
	});
});