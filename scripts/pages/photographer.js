import * as getPhotographer from '../utils/api.js';
import photographerHeadline from '../components/photographerHeadline.js';
import sortContainer from '../components/sortContainer.js';
import imageLightBox from '../components/imageLightBox.js';

export const displayPage = (singlePhotographer, photographersMedia) => {
	const MAIN_ELEMENT = document.querySelector('#main');
	MAIN_ELEMENT.innerHTML = `
		${photographerHeadline.render(singlePhotographer)}
		${sortContainer.render(photographersMedia)}
		${imageLightBox.render()}
	`;

	photographerHeadline.events();
	sortContainer.events(photographersMedia, singlePhotographer);
	imageLightBox.events(photographersMedia);
};

const main = async () => {
	const currentURL = new URL(window.location.href);
	const paramPhotographerID = Number(currentURL.searchParams.get('photographerId'));

	const photographersID = await getPhotographer.getPhotographerById(paramPhotographerID);
	const photographersMedia = await getPhotographer.getPhotographersMediaById(paramPhotographerID);

	displayPage(photographersID, photographersMedia);
};

main();
