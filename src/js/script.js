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

/////////////////////////progress-bar
window.addEventListener('scroll', function() {
	let documentHeight = document.documentElement.scrollHeight;
	let windowHeight = window.innerHeight;
	let scrollTop = window.scrollY;
	let progress = document.querySelector('.progress-bar');
	let progressHeight = (scrollTop / (documentHeight - windowHeight)) * 100;
	progress.style.width = progressHeight + '%';
});
/////////////////////////////
setTimeout(function() {
	document.querySelector('.loader').style.display = 'none';
  }, 5000);
  
/////////////////////////////////////anim-news
  const newsCards = document.querySelectorAll('.news-card');

  function checkCards() {
  const triggerBottom = window.innerHeight / 8 * 4;
  
  newsCards.forEach(card => {
  const cardTop = card.getBoundingClientRect().top;
  if (cardTop < triggerBottom) {
	card.classList.add('news-card--show');
  } else {
	card.classList.remove('news-card--show');
  }
  });
  }
  
  window.addEventListener('scroll', checkCards);
  window.addEventListener('resize', checkCards);
  window.addEventListener('load', checkCards);
  ////////////////////
const currentYear = new Date().getFullYear();
const rights = document.getElementById("rights");
rights.textContent = `Copyright @ ${currentYear} Brandoxide. All rights reserved.`;