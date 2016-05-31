$(document).ready(function(){

	// grid.gridify(options);
	var grid = $('.grid').masonry({
		itemSelector: '.item',
		singleMode: false,
		isResizable: true,
		isAnimated: true,
		animationOptions: { 
			queue: false, 
			duration: 500 
		}
	}); 

	var web = $(".web");
	var grafic =$(".grafic");
	var portfolioCategory = $(".portfolio-category");
	portfolioCategory.on('click', 'li', function(event) {
		event.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		var thisId = $(this).data('web');
		if(thisId == "all") {
			$(".item").show();
		} else {
			$(".item:not(."+thisId+")").hide();
			$(".item."+thisId).show();
		}

		grid.masonry('destroy');
			
	});
});


