/* 
/*     const loader = document.querySelector('.loader');
    setTimeout(function() {
      loader.style.display = 'none';
      window.location.href = "../index.html";
    }, 5000); 
		const draw = SVG().addTo('#canvas').size(740, 182);

		// Draw blocks
		const blockWidth = 185;
		const blockHeight = 182;
		const blockPadding = 10;
		const block1 = draw.rect(blockWidth, blockHeight).fill('red').move(0, 0);
		const block2 = draw.rect(blockWidth, blockHeight).fill('blue').move(blockWidth + blockPadding, 0);
		const block3 = draw.rect(blockWidth, blockHeight).fill('green').move(blockWidth * 2 + blockPadding * 2, 0);
		const block4 = draw.rect(blockWidth, blockHeight).fill('yellow').move(blockWidth * 3 + blockPadding * 3, 0);

		// Draw line with curves
		const linePadding = 20;
		const lineStartX = blockWidth / 2;
		const lineStartY = blockHeight / 2;
		const lineEndX = blockWidth * 3 + blockPadding * 3 + blockWidth / 2;
		const lineEndY = blockHeight / 2;
		const line = draw.polyline().fill('none').stroke({ color: '#000', width: 5 });

		line.plot([
			lineStartX, lineStartY,
			lineStartX + linePadding, lineStartY,
			lineStartX + linePadding, lineEndY,
			lineEndX - linePadding, lineEndY,
			lineEndX - linePadding, lineEndY,
			lineEndX, lineEndY
		]).marker('end', 15, 15, function(add) {
			add.polygon('0,0 15,7.5 0,15').fill('#000');
		}); */


$(document).ready(function(){
		$('.reviews__wrapper').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 3000,
			slidesToShow: 2,
			adaptiveHeight: true,
			responsive: [{
				breakpoint: 768,
				settings: {
				  slidesToShow: 1
				}
			  },
			  {
				breakpoint: 992,
				settings: {
				  slidesToShow: 1
				}
			  }
			]
		  });
		});

/* 		const timer = setTimeout(() => {
			// Показуємо діалогове вікно з запитанням
			const confirmClose = confirm("Ви ще тут?");
			// Якщо користувач підтверджує, що він ще тут, скидаємо таймер
			if (confirmClose) {
			  clearTimeout(timer);
			} else {
			  // Інакше закриваємо сторінку
			  window.close();
			}
		  }, 6000);  */