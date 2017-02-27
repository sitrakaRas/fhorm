function createAdditionnalMenu() {
	var windowWidth = $(window).width();
	$('#search-icon .complement').css('width', (windowWidth - $('.container').outerWidth()) + 15);
	
	if (windowWidth < 768) {		
		if (!$('#top-menu').hasClass('hasAdditionnalMenu')) {
			$('#top-menu').addClass('hasAdditionnalMenu');
			$('#main-menu li').each(function() {
				$(this).clone().addClass('hidden-sm').addClass('hidden-md').addClass('hidden-lg').appendTo('#top-menu .nav');
			});
		}	
	}
}

var xpresshop = {
	sliderSlide: function(parent,arg){
        parent.slick(arg);
    }
}

$(function(){
	var arg_slide = {
		slidesToShow : 1,
		dots : false,
		arrows: true 
	};

	xpresshop.sliderSlide($('.slider-one'),arg_slide);
	
	$(window).on('resize',function(){
		createAdditionnalMenu();
		var marge = ($(window).width() - $('.container').width() )/2;
		$('.slider-full.section-top-slider .slider-one .slick-prev').css('left',marge + 'px');
		$('.slider-full.section-top-slider .slider-one .slick-next').css('right',marge + 'px');
	});

	$(window).trigger('resize');

	$('.check-list li').each(function() {
		$(this).click(function() {
			var targetInput = $(this).data('target');
			$(this).siblings().removeClass('clicked');
			$(this).addClass('clicked');
			$(targetInput).val($(this).data('value'));
			return false;
		});
	});
	$('#price-range').slider();
});
