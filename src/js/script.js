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

window.addEventListener('scroll', function() {
	let documentHeight = document.documentElement.scrollHeight;
	let windowHeight = window.innerHeight;
	let scrollTop = window.scrollY;
	let progress = document.querySelector('.progress-bar');
	let progressHeight = (scrollTop / (documentHeight - windowHeight)) * 100;
	progress.style.width = progressHeight + '%';
});

setTimeout(function() {
	document.querySelector('.loader').style.display = 'none';
  }, 5000);
  