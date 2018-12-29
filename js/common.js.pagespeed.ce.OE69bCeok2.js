"use strict";

(function ($) {

	/*-------------------------------------
	Preloader
	-------------------------------------*/
	$(window).on('load',function() {
		$('.loader_inner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
	});

	/*-------------------------------------
	Top menu - Superfish
	-------------------------------------*/
	$('ul.sf-menu').superfish({
		delay: 50,
		speed: 'fast',
		cssArrows: true,
		disableHI: false,
		easing: 'fade',
		touchMove: false,
		swipe: false
	});
	
	/*-------------------------------------
	Top menu - Textillate
	-------------------------------------*/
	setTimeout(function() { 
		// $('.heading-title-big').textillate({ in: { effect: 'rollIn' } }); 
		$('.tlt').textillate({
			// the default selector to use when detecting multiple texts to animate
			selector: '.texts',

			// enable looping
			loop: true,

			// sets the minimum display time for each text before it is replaced
			minDisplayTime: 500,

			// sets the initial delay before starting the animation
			// (note that depending on the in effect you may need to manually apply
			// visibility: hidden to the element before running this plugin)
			initialDelay: 0,

			// set whether or not to automatically start animating
			autoStart: true,

			// custom set of 'in' effects. This effects whether or not the
			// character is shown/hidden before or after an animation
			inEffects: [],

			// custom set of 'out' effects
			outEffects: [ 'hinge' ],

			// in animation settings
			in: {
			// set the effect name
			effect: 'rollIn',

			// set the delay factor applied to each consecutive character
			delayScale: 0.4,

			// set the delay between each character
			delay: 50,

			// set to true to animate all the characters at the same time
			sync: false,

			// randomize the character sequence
			// (note that shuffle doesn't make sense with sync = true)
			shuffle: false,

			// reverse the character sequence
			// (note that reverse doesn't make sense with sync = true)
			reverse: false,

			// callback that executes once the animation has finished
			callback: function () {}
			},

			// out animation settings.
			out: {
				effect: 'fadeOutDown',
				delayScale: 0.5,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: false,
				callback: function () {}
			},

			// callback that executes once textillate has finished
			callback: function () {},

			// set the type of token to animate (available types: 'char' and 'word')
			type: 'char'
		});

	}, 3000);
						
	/*-------------------------------------
	Sticky menu
	-------------------------------------*/
	$('#top-nav').sticky({
		topSpacing:0,
		zIndex: 40
	});

	/*-------------------------------------
	Portfolio
	-------------------------------------*/
	$('.link-portfolio').magnificPopup({
		type:'image',
		gallery:{enabled:true},
		zoom:{enabled: true, duration: 300}
	});

	$('#portfolio').mixItUp({
		controls: {
			toggleFilterButtons: false,
		},
		load: {
			filter: '*'
		}
	});

	/*-------------------------------------
	Drag images restagt
	-------------------------------------*/
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

	/*-------------------------------------
	Smooth Scroll to link
	-------------------------------------*/
	$('a.smooth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

	/*-------------------------------------
	Full screen slider - Slick
	-------------------------------------*/
	$('.full-slider').slick({
		dots: true,
		fade: true,
		appendDots: '#dots-control-full-slider',
		dotsClass: 'dots',
		autoplay: true,
		autoplaySpeed: 8000,
		autoHeight: false,
		adaptiveHeight: true,
		mobileFirst: true,
		touch: false,
		cssEase: 'linear',
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	$('.back-slider').slick({
		dots: false,
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		autoHeight: false,
		adaptiveHeight: true,
		mobileFirst: true,
		touch: false,
		cssEase: 'linear'
	});

	/*-------------------------------------
	Background slider function
	-------------------------------------*/
	$('.slide, .fixed-image, .bg-image').each(function(){
		var url = $(this).attr('data-image');
		if(url){
			$(this).css('background-image', 'url(' + url + ')');
		}
	});

	/*-------------------------------------
	Particles
	-------------------------------------*/
	$('#particles-js').particleground({
		dotColor: 'rgba(255, 255, 255, 0.40)',
		lineColor: 'rgba(255, 255, 255, 0.21)',
		parallaxMultiplier: 5,
		particleRadius: 5,
		proximity: 130,
		density: 12000
	});

	/*-------------------------------------
	Back to top link
	-------------------------------------*/
	$(document).on('scroll',function() {
		var y = $(this).scrollTop();
		if (y > 500) {
			$('.top').fadeIn('slow');
		} else {
			$('.top').fadeOut('slow');
		}
	});

	/*-------------------------------------
	Animation blocks
	-------------------------------------*/
	if (typeof $.fn.animated !== 'undefined') {
		$(function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else {
				$('.iphone-nalf').animated('fadeInUp');
				$('.section-class-image > img').animated('fadeInUp');
				$('.iphones > .right-mob-back, .left-mob-back').animated('fadeInUp');
				$('.heading-title > h2').animated('fadeInDown');
				$('.heading-title > p').animated('fadeInUp');
			}
		}());
	}

	/*-------------------------------------
	Mobile menu - full screen menu
	-------------------------------------*/
	$(function() {

		var $menu = $('#mobile-menu'),
			$body = $('body'),
			$fn = $('#mobile-menu'),
			$fnToggle = $('.toggle-mnu'),
			$window = $(window);

			$menu.find('.menu-item-has-children > a').on('click', function(e) {
				e.preventDefault();
				if ($(this).next('ul').is(':visible')) {
					$(this).removeClass('sub-active').next('ul').slideUp(250);
				} else {
					$('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
					$(this).addClass('sub-active').next('ul').slideToggle(250);
				}
			});

			var fnOpen = false;

			var fnToggleFunc = function() {
				fnOpen = !fnOpen;
				$body.toggleClass('fullscreen-nav-open');
				$fn.stop().fadeToggle(500);
				$fn.toggleClass("active");
				$('.toggle-mnu').toggleClass('on');
				$('.logo').toggleClass('dark-logo');

				return false;
			};

			$fnToggle.on('click', fnToggleFunc);

			$(document).on('keyup', function(e) {
				if (e.keyCode == 27 && fnOpen) {
					fnToggleFunc();
				}
			});

			$fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
				fnToggleFunc();
				return true;
			});

			$menu.on('click', function(){
				fnToggleFunc();
				return true;
			});

			$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
				e.stopPropagation();
			});
	});

	/*-------------------------------------
	YouTube player
	-------------------------------------*/
	if (typeof $.fn.mb_YTPlayer !== 'undefined') {
		$("#bgndVideo").mb_YTPlayer();
	}

	/*-------------------------------------
	Form activation
	-------------------------------------*/
	$('#contact-form').on('submit',function() {
		var form = $(this);
		var error = false;
	if (!error) {
		var data = form.serialize();
		$.ajax({
			type: 'POST',
			url: 'form.php',
			dataType: 'json',
			data: data,
			beforeSend: function(data) {
				form.find('input[type="submit"]').attr('disabled', 'disabled');
				form.trigger('reset');
			},
			success: function(data){
				if (data['error']) {
					alert(data['error']);
				} else {
					$('#success').slideToggle('slow');
					setTimeout(function() { 
						$('#success').slideToggle('hide');
					}, 3000);
				}
				},
			error: function (xhr, ajaxOptions, thrownError) {
				$('#error').slideToggle('slow');
			},
			complete: function(data) {
				form.find('input[type="submit"]').prop('disabled', false);
				}
			});
		}
		return false;
	});

	/*-------------------------------------
	Testimonials
	-------------------------------------*/
	$('.testimonials-items').slick({
		dots: true,
		dotsClass: 'dots',
		appendDots: '#dots-control-testimonials',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 3,
		prevArrow: $('#control-testimonials > .prev'),
		nextArrow: $('#control-testimonials > .next'),
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				dots: true
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});

	// Blog sidebar height
		
	if ($(window).width() > 768) {
		$('#sidebar, .single-post').matchHeight();		
	}

})(jQuery);