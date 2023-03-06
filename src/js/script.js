$(document).ready(function(){
		$('.reviews__wrapper').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 700,
			slidesToShow: 2,
			responsive: [{
				breakpoint: 768,
				settings: {
				  slidesToShow: 1,
				  dots: false,
				  arrows: true,
				  infinite: true,
				  speed: 3000,
				  slidesToShow: 1,
				}
			  },
			  {
				breakpoint: 1200,
				settings: {
				  slidesToShow: 1
				}
			  }
			]
		  });
		});

