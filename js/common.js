$(function() {

	$(document).ready(function(){
		$('.slider-main').owlCarousel({
			items:1,
			loop:true,
			nav:false,
			dots: true,
			autoplay: true
		});
		$('.experts-slider').owlCarousel({
			items:1,
			loop:true,
			nav:true,
			dots: false,
			autoplay: true,
			navText: ["<img src='../../img/arrow.png' alt='arrow'>","<img src='../../img/arrow.png' alt='arrow'>"]
		});
		$(window).scroll(function(){
			if($(this).scrollTop()>=636){
				$('.header-top').css('display','none');
			}else{
				$('.header-top').css('display','flex');
			}
		});
		$('.benefits-number').spincrement({
			from: 0,
			duration: 10000
		})
	})

});
