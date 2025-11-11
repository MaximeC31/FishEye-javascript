import { getPhotographersList } from '../utils/api.js';
import photographersThumbnail from '../components/photographersThumbnail.js';

const displayPage = (photographersList) => {
	const PHOTOGRAPHER_SECTION = document.querySelector('.main__photograph--section__container');

	PHOTOGRAPHER_SECTION.innerHTML = `
	${photographersList.map((el) => photographersThumbnail.render(el)).join('')}
	`;
};

const main = async () => {
	const photographersList = await getPhotographersList();

	displayPage(photographersList);
};

main();
