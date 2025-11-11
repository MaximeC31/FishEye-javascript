export const render = () => {
	return `
    <dialog class="main__single-photographer--portfolio__container__carrousel">
        <i class="fa-solid fa-chevron-left" aria-label="Previous Image" aria-hidden="true"></i>
        <div class="main__single-photographer--portfolio__container__carrousel__img-part">
        </div>
        <i class="fa-solid fa-chevron-right" aria-label="Next Image" aria-hidden="true"></i>
        <i class="fa-solid fa-xmark" aria-label="Close Image" aria-hidden="true"></i>
    </dialog>
    `;
};

export const events = (photographersMedia) => {
	const dialogPictureSelector = document.querySelector(
		'.main__single-photographer--portfolio__container__carrousel',
	);
	const dialogContainer = document.querySelector(
		'.main__single-photographer--portfolio__container__carrousel__img-part',
	);

	let imageIndex = 0;

	const imagesArticleCarrousel = document.querySelectorAll(
		'.main__single-photographer--portfolio__container__results-part__result__media',
	);
	imagesArticleCarrousel.forEach((element, index) => {
		element.addEventListener('click', () => {
			imageIndex = showLightBox(index, photographersMedia);
		});
		element.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				imageIndex = showLightBox(index, photographersMedia);
			}
		});
	});

	const nextIconSelector = dialogPictureSelector.querySelector('.fa-solid.fa-chevron-right');
	nextIconSelector.addEventListener('click', () => {
		imageIndex = nextImageLightBox(imageIndex, photographersMedia);
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowRight') {
			imageIndex = nextImageLightBox(imageIndex, photographersMedia);
		}
	});

	const prevIconSelector = dialogPictureSelector.querySelector('.fa-solid.fa-chevron-left');
	prevIconSelector.addEventListener('click', () => {
		imageIndex = prevImageLightBox(imageIndex, photographersMedia);
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowLeft') {
			imageIndex = prevImageLightBox(imageIndex, photographersMedia);
		}
	});

	const closeButton = dialogPictureSelector.querySelector('.fa-solid.fa-xmark');
	closeButton.addEventListener('click', () => closeLightBoxPopup());
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeLightBoxPopup();
		}
	});

	function showLightBox(index, photographersMedia) {
		dialogPictureSelector.style.display = 'flex';
		dialogContainer.innerHTML = '';

		if (photographersMedia[index].image) {
			dialogContainer.innerHTML = `
			<img src="./assets/images-webp/${photographersMedia[index].image}" alt="${photographersMedia[index].title}">
			<p>${photographersMedia[index].title}</p>
			`;
		} else {
			dialogContainer.innerHTML = `
			<video src="./assets/images-webp/${photographersMedia[index].video}" controls autoplay>
			<p>${photographersMedia[index].title}</p>
			`;
		}

		return index;
	}

	function nextImageLightBox(index, photographersMedia) {
		index++;
		if (index >= photographersMedia.length) {
			index = 0;
		}

		if (photographersMedia[index].image) {
			dialogContainer.innerHTML = `
			<img src="./assets/images-webp/${photographersMedia[index].image}">
			<p>${photographersMedia[index].title}</p>
			`;
		} else {
			dialogContainer.innerHTML = `
			<video src="./assets/images-webp/${photographersMedia[index].video}" controls autoplay>
			<p>${photographersMedia[index].title}</p>
			`;
		}

		return index;
	}

	function prevImageLightBox(index, photographersMedia) {
		index--;
		if (index < 0) {
			index = photographersMedia.length - 1;
		}

		if (photographersMedia[index].image) {
			dialogContainer.innerHTML = `
			<img src="./assets/images-webp/${photographersMedia[index].image}">
			<p>${photographersMedia[index].title}</p>
			`;
		} else {
			dialogContainer.innerHTML = `
			<video src="./assets/images-webp/${photographersMedia[index].video}" controls autoplay>
			<p>${photographersMedia[index].title}</p>
			`;
		}

		return index;
	}

	function closeLightBoxPopup() {
		dialogPictureSelector.style.display = 'none';
	}
};

export default {
	render,
	events,
};
