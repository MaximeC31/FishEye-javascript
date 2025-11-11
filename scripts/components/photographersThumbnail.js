export const render = (photographer) => {
	return `
	<article class="main__photograph--section__container__photograph--container">
	<div
		class="main__photograph--section__container__photograph--container__link">
		<a href="./photographer.html?photographerId=${photographer.id}">
		<img
		class="main__photograph--section__container__photograph--container__link__image"
		src="./assets/images-webp/${photographer.portrait}"
		alt="${photographer.name}"/>
		<h2 class="main__photograph--section__container__photograph--container__link__title">${photographer.name}</h2>
		</a>
	</div>

	<ul class="main__photograph--section__container__photograph--container__link__list">
		<li class="main__photograph--section__container__photograph--container__link__element">${photographer.city}, ${photographer.country}</li>
		<li class="main__photograph--section__container__photograph--container__link__element">${photographer.tagline}</li>
		<li class="main__photograph--section__container__photograph--container__link__element">${photographer.price}€/jour</li>
	</ul>
	</article>
    `;
};

export const events = () => {};

export default {
	render,
	events,
};
