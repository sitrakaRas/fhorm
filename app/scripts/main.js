jQuery(document).ready(function($) {
	createAdditionnalMenu();
	$(window).on('resize', function(){
		createAdditionnalMenu();
	});
});

function createAdditionnalMenu() {
	var windowWidth = $(window).width();
	$('#search-icon .after-icon').css('width', (windowWidth - $(".container").outerWidth()) + 15);
	
	if (windowWidth < 768) {		
		if (!$('#top-menu').hasClass('hasAdditionnalMenu')) {
			$('#top-menu').addClass('hasAdditionnalMenu');
			$('#main-menu li').each(function() {
				$(this).clone().addClass('hidden-sm').addClass('hidden-md').addClass('hidden-lg').appendTo('#top-menu .nav');
			});
		}	
	}
}