import { getPhotographersList } from '../utils/api.js';
import PhotographersThumbnail from '../components/PhotographersThumbnail.js';

const displayPage = (photographersList) => {
	const PHOTOGRAPHER_SECTION = document.querySelector('.main__photograph--section__container');

	PHOTOGRAPHER_SECTION.innerHTML = `
	${photographersList.map((el) => PhotographersThumbnail.render(el)).join('')}
	`;
};

const main = async () => {
	const photographersList = await getPhotographersList();

	displayPage(photographersList);
};

main();
