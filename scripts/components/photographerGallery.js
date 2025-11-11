import adrLikesSubtotal from './adrLikesSubtotal.js';

export const render = (photographersMedia) => {
	const GALLERY_ELEMENT = document.querySelector(
		'.main__single-photographer--portfolio__container__results-part',
	);
	let galleryHTML = '';

	photographersMedia.forEach((media) => {
		const mediaType = mediaFactory(media);
		galleryHTML += `
		<article class="main__single-photographer--portfolio__container__results-part__result">
		${mediaType.template(media)}
		<div class="main__single-photographer--portfolio__container__results-part__result__details">
			<h2>${media.title}</h2>
			<div
				class="main__single-photographer--portfolio__container__results-part__result__details__likes"
			>
				<p>${media.likes}</p>
				<i
					class="fa-solid fa-heart"
					aria-label="likes"
					tabIndex=0
				></i>
			</div>
		</div>
	</article>
		`;
	});

	if (GALLERY_ELEMENT) {
		GALLERY_ELEMENT.innerHTML = galleryHTML;
	} else {
		return galleryHTML;
	}
};

export const events = (button, photographersMedia, singlePhotographer) => {
	const galleryContainer = document.querySelector(
		'.main__single-photographer--portfolio__container__results-part',
	);
	galleryContainer.innerHTML = '';

	const updateDataSortUL = document.querySelector('[aria-label="Order By"]');
	updateDataSortUL.dataset.sort = button.dataset.sort;
	switch (button.dataset.sort) {
		case 'popularite':
			photographersMedia = photographersMedia.sort((a, b) => a.likes - b.likes);
			break;
		case 'date':
			photographersMedia = photographersMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
			break;
		case 'titre':
			photographersMedia = photographersMedia.sort((a, b) => a.title.localeCompare(b.title));
			break;
	}

	render(photographersMedia);
	adrLikesSubtotal.events(photographersMedia, singlePhotographer);
};

export default {
	render,
	events,
};

const imageTemplate = () => ({
	template: (media) => `
	  <img
		src="./assets/images-webp/${media.image}"
		alt="${media.title}"
		class="main__single-photographer--portfolio__container__results-part__result__media"
		tabIndex=0
	  />
	`,
});

const videoTemplate = () => ({
	template: (media) => `
	  <video
		src="./assets/images-webp/${media.video}"
		class="main__single-photographer--portfolio__container__results-part__result__media"
		tabIndex=0
	  ></video>
	`,
});

const mediaFactory = (media) => {
	if (media.image) {
		return imageTemplate();
	}

	if (media.video) {
		return videoTemplate();
	}
};
