$(function() {

var posMenu = $('.menu nav').offset().top;
var posTabled = $('.header-tabled').offset().top;
$(window).scroll(function() {
	if($(window).width() > '768') {
		if($(this).scrollTop() >= posMenu) {
			var hh = $('header').outerHeight(true);
			$('header').css('height', hh);
			$('.menu').addClass('scrollTop');
		}
		else{
			$('.menu').removeClass('scrollTop');
		}

		if($(this).scrollTop() >= posTabled) {
			var hh = $('header').outerHeight(true);
			$('header').css('height', hh);
			$('.header-tabled').addClass('scrollTop');
		}
		else{
			$('.header-tabled').removeClass('scrollTop');
		}
	}
});

$("#input-1").rating({
	'size' : 'xs',
	'step' : 0.25,
	'theme' : 'krajee-fa',
	emptyStar: '<i class="fa fa-star" aria-hidden="true"></i>',
	filledStar: '<i class="fa fa-star" aria-hidden="true"></i>',
	starCaptions: function(val) {
	    if (val <= 1) return '20%';
		else if (val <= 2) return '40%';
		else if (val <= 3) return '60%';
		else if (val <= 4) return '80%';
		else return '100%';
	},
	showClear : false,
	showCaption : false
	});

$("#input-2").rating({
	'size' : 'xs',
	'step' : 0.25,
	'theme' : 'krajee-fa',
	emptyStar: '<i class="fa fa-star" aria-hidden="true"></i>',
	filledStar: '<i class="fa fa-star" aria-hidden="true"></i>',
	starCaptions: function(val) {
	    if (val <= 1) return '20%';
		else if (val <= 2) return '40%';
		else if (val <= 3) return '60%';
		else if (val <= 4) return '80%';
		else return '100%';
	},
	showClear : false,
	showCaption : false
	});

$('.owl-carousel').owlCarousel({
	nav : true,
    loop : true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    navSpeed: 500,
    dots: true,
    dotsSpeed: 500,
    items: 1
});

$(window).ready(function(){
	var hh = $('header').outerHeight(true);
	var fh = $('footer').outerHeight(true);
	var wh = $(window).outerHeight(true); 
	var сh = wh - hh - fh; 
	$('.content').css('min-height', сh); 
});

$( ".cross" ).hide();
$( ".mob-menu" ).hide();
$( ".hamburger" ).click(function() {

	$( ".mob-menu" ).slideToggle( "slow", function() {

		$( ".hamburger" ).hide();
		$( ".cross" ).show();

	});

	$( ".search-mob-wrap" ).hide( "slow", function() {
		$( ".cross-search" ).hide();
		$( ".button-search" ).show();
	});

});
$( ".cross" ).click(function() {

	$( ".mob-menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});

});

$( ".cross-search" ).hide();
$( ".search-mob-wrap" ).hide();
$( ".button-search" ).click(function() {

	$( ".search-mob-wrap" ).slideToggle( "slow", function() {

		$( ".button-search" ).hide();
		$( ".cross-search" ).show();

	$( ".mob-menu" ).hide( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});

	});

});
$( ".cross-search" ).click(function() {

	$( ".search-mob-wrap" ).slideToggle( "slow", function() {
		$( ".cross-search" ).hide();
		$( ".button-search" ).show();
	});

});

if($(window).width() <= '768') {
	$('footer ul:not(.social-links) .li-first').click(function() {

		$(this).toggleClass('active');
		$(this).parent().children('li:not(.li-first)').slideToggle('slow');

	});
}


});
