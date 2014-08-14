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

});

