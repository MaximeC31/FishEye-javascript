import contactForm from './contactForm.js';

export const render = (photographer) => {
	return `
		<section class="main__single--photographer--pres__container">
		<div class="main__single--photographer--pres__container__infos--container">
			<h1 class="main__single--photographer--pres__container__infos--container__title">${
				photographer.name
			}</h1>
			<p class="main__single--photographer--pres__container__infos--container__city">${
				photographer.city
			}, ${photographer.country}</p>
			<p class="main__single--photographer--pres__container__infos--container__text">${
				photographer.tagline
			}</p>
		</div>
		<button
			class="main__single--photographer--pres__container__button"
			aria-label="Contact Me">
			Contactez-moi
		</button>
		<div>
		<img class="main__single--photographer--pres__container__image" src="./assets/images-webp/${
			photographer.portrait
		}" alt="${photographer.name}" />
		</div>
		</section>
		${contactForm.render(photographer)}
    `;
};

export const events = () => {
	contactForm.events();
};

export default {
	render,
	events,
};
