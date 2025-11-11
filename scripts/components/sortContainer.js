import photographerGallery from './photographerGallery.js';
import adrLikesSubtotal from './adrLikesSubtotal.js';
import imageLightBox from './imageLightBox.js';

export const render = (photographersMedia) => {
	return `
    <section class='main__single-photographer--portfolio'>
	<div class='main__single-photographer--portfolio__container'>
		<div class='main__single-photographer--portfolio__container__filter-part'>
			<label>Trier par</label>
			<ul
				role='button'
				aria-label='Order By'
				aria-haspopup='listbox'
				aria-expanded
				data-sort='popularite'
			>
				<li role='listbox' data-sort='popularite' tabIndex=0>Popularité</li>
				<li role='listbox' data-sort='date' tabIndex=0>Date</li>
				<li role='listbox' data-sort='titre' tabIndex=0>Titre</li>
			</ul>
			<i class='fa-solid fa-chevron-up'></i>
		</div>
		<div class='main__single-photographer--portfolio__container__results-part'>
		${photographerGallery.render(photographersMedia)}
		</div>
		${adrLikesSubtotal.render()}
	</div>
</section>
    `;
};

export const events = (photographersMedia, singlePhotographer) => {
	const sortButtons = Array.from(
		document.querySelectorAll(
			'.main__single-photographer--portfolio__container__filter-part ul li',
		),
	);
	const chevronIcon = document.querySelector(
		'.main__single-photographer--portfolio__container__filter-part .fa-solid.fa-chevron-up',
	);

	let clickCount = 0;

	for (const button of sortButtons) {
		button.addEventListener('click', () => collapseSortButtons(button, photographersMedia));
		button.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				collapseSortButtons(button, photographersMedia);
			}
		});

		button.addEventListener('keydown', function(event) {
			if (event.key === 'ArrowUp') {
				event.preventDefault();
				const elements = button.parentElement.querySelectorAll('[tabindex]');
				const currentIndex = Array.prototype.indexOf.call(elements, document.activeElement);
				const previousIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
				elements[previousIndex].focus();
			} else if (event.key === 'ArrowDown') {
				event.preventDefault();
				const elements = button.parentElement.querySelectorAll('[tabindex]');
				const currentIndex = Array.prototype.indexOf.call(elements, document.activeElement);
				const nextIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
				elements[nextIndex].focus();
			}
		});

	}

	function collapseSortButtons(button, photographersMedia) {
		clickCount++;

		if (clickCount === 1) {
			for (const element of sortButtons) {
				element.style.display = 'flex';
				element.style.borderBottom = '1px solid white';
			}
			sortButtons[sortButtons.length - 1].style.borderBottom = 'none';
			chevronIcon.style.transform = 'rotate(180deg)';
			chevronIcon.style.transition = 'all 0.3s';
		}

		if (clickCount === 2) {
			for (const element of sortButtons) {
				element.style.display = 'none';
				element.style.borderBottom = '1px solid white';
			}
			button.style.display = 'flex';
			button.style.borderBottom = 'none';
			chevronIcon.style.transform = 'rotate(0deg)';
			chevronIcon.style.transition = 'all 0.3s';

			photographerGallery.events(button, photographersMedia, singlePhotographer);
			imageLightBox.events(photographersMedia);

			clickCount = 0;
		}
	}

	adrLikesSubtotal.events(photographersMedia, singlePhotographer);
};

export default {
	render,
	events,
};
