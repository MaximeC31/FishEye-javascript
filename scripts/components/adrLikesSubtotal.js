const render = () => {
	return `
    <div class='main__single-photographer--portfolio__container__totals-part'>
	<div class='main__single-photographer--portfolio__container__totals-part__number'>
		<p></p>
		<i
			class='fa-solid fa-heart'
			aria-label='likes'
		></i>
	</div>
	<div class='main__single-photographer--portfolio__container__totals-part__daily-cost'>
		<p></p>
	</div>
</div>
    `;
};

const events = (photographersMedia, singlePhotographer) => {
	const ADRSelector = document.querySelector(
		'.main__single-photographer--portfolio__container__totals-part__daily-cost p',
	);
	ADRSelector.textContent = `${singlePhotographer.price}€ / jour`;

	calcTotalLikes(photographersMedia);

	const galleryHeartIcon = document.querySelectorAll(
		'.main__single-photographer--portfolio__container__results-part__result__details__likes i',
	);
	galleryHeartIcon.forEach((icon, index) => {
		icon.addEventListener('click', () => likeCounter(index, photographersMedia));
		icon.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				likeCounter(index, photographersMedia)
			}
		});
	});
};

function likeCounter(index, photographersMedia) {
	const galleryLikeCounter = document.querySelectorAll(
		'.main__single-photographer--portfolio__container__results-part__result__details__likes p',
	);

	let likeCounter = Number(galleryLikeCounter[index].textContent);
	likeCounter++;
	galleryLikeCounter[index].textContent = likeCounter;

	photographersMedia[index].likes = likeCounter;

	calcTotalLikes(photographersMedia);
}

function calcTotalLikes(photographersMedia) {
	const totalLikes = photographersMedia
		.map((media) => media.likes)
		.reduce((acc, likes) => acc + likes);
	const totalLikesSelector = document.querySelector(
		'.main__single-photographer--portfolio__container__totals-part__number p',
	);

	totalLikesSelector.textContent = totalLikes;
}

export default {
	render,
	events,
};
