/**
 * Random custom scripts.
 */

// Runs when everything's done being loaded
jQuery(document).ready(function($){

	// When clicking on a logo, destroy it.
	//
	// Minor tweak so people can preview one logo or
	// another.
	$('img.logo').click(function(){
		$(this).remove();
	});

	// Auto hides the top navbar when scrolling
	$('.navbar-fixed-top').autoHidingNavbar({
		showOnUpScroll: true,
		showOnBottom:   true
	});

});

