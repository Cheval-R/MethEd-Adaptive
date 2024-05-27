const items = document.querySelectorAll('.about__card');
	let currentIndex = 0;

	function showItem(index) {
		items[currentIndex].classList.remove('active');
		items[index].classList.add('active');
		currentIndex = index;
	}

	document.querySelector('.slider-wrapper').addEventListener('click', function (event) {
		if (event.target.closest('.prev-button')) {
			let index = currentIndex - 1;
			if (index < 0) {
				index = items.length - 1;
			}
			showItem(index);
		} else if (event.target.closest('.next-button')) {
			let index = currentIndex + 1;
			if (index >= items.length) {
				index = 0;
			}
			showItem(index);
		}
	});

	showItem(currentIndex);