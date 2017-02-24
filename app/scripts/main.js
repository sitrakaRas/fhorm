jQuery(document).ready(function($) {
	createAdditionnalMenu();
	$(window).on('resize', function(){
		createAdditionnalMenu();
	});

	$('.check-list li').each(function() {
		$(this).click(function() {
			var targetInput = $(this).data('target');
			$(this).siblings().removeClass('clicked');
			$(this).addClass('clicked');
			$(targetInput).val($(this).data('value'));
			return false;
		});
	});
	$("#price-range").slider({});
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