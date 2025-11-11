export const fetcher = async (url, method = 'GET') => {
	try {
		const response = await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			return response.json();
		} else {
			throw new Error(`Erreur HTTP ${response.status}`);
		}
	} catch (error) {
		console.error('Error in fetcher : ', error.message);
	}
};

const BASE_URL = './data/photographers.json';

export const getPhotographersList = async () => {
	const data = await fetcher(BASE_URL);
	const photographersList = data?.photographers;
	return photographersList;
};

export const getPhotographerById = async (paramsID) => {
	const data = await fetcher(BASE_URL);
	const photographerById = data?.photographers.find(({ id }) => id === paramsID);
	return photographerById;
};

export const getPhotographersMediaById = async (paramsID) => {
	const data = await fetcher(BASE_URL);
	const photographersMediaById = data?.media
		.filter(({ photographerId }) => photographerId === paramsID)
		.sort((a, b) => a.likes - b.likes);
	return photographersMediaById;
};
