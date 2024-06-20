export const render = (photographer) => {
	return `
    <dialog class="main__contact-part__contact-dialog">
    <h1>Contactez-moi ${photographer.name}</h1>
    <form class="main__contact-part__contact-dialog__form">
        <label for="prenom">Prénom</label>
        <input
            type="text"
            id="prenom"
            name="prenom"
            aria-label="First Name" />
        <label for="nom">Nom</label>
        <input
            type="text"
            id="nom"
            name="nom"
            aria-label="Last Name" />
        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            aria-label="Email" />
        <label for="message">Votre Message</label>
        <textarea
            id="message"
            name="message"
            aria-label="Your Message"></textarea>
        <button
            type="submit"
            aria-label="Send">
            Envoyer
        </button>
    </form>
    <i
        class="fa-solid fa-xmark"
        aria-label="Close Contact form"
        tabIndex = 0></i>
    </dialog>
    `;
};

export const events = () => {
	const contactFormDialog = document.querySelector('.main__contact-part__contact-dialog');
	const contactButton = document.querySelector(
		'.main__single--photographer--pres__container__button',
	);
	const contactFormCloseButton = document.querySelector(
		'.main__contact-part__contact-dialog .fa-xmark',
	);
	contactButton.addEventListener('click', () => showContactModal(contactFormDialog));
	contactFormCloseButton.addEventListener('click', () => closeContactModal(contactFormDialog));
	contactFormCloseButton.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			closeContactModal(contactFormDialog);
		}
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeContactModal(contactFormDialog);
		}
	});

	const contactFormSubmitButton = document.querySelector(
		'.main__contact-part__contact-dialog__form button[type="submit"]',
	);
	contactFormSubmitButton.addEventListener('click', (event) => logsContactFormData(event));
};

function showContactModal(HTMLSelector) {
	HTMLSelector.style.display = 'flex';
}

function closeContactModal(HTMLSelector) {
	HTMLSelector.style.display = 'none';
}

function logsContactFormData(event) {
	event.preventDefault();

	const contactFormData = {
		prenom: document.querySelector('#prenom').value,
		nom: document.querySelector('#nom').value,
		email: document.querySelector('#email').value,
		message: document.querySelector('#message').value,
	};
	console.log('contactFormData', contactFormData);
}

export default {
	render,
	events,
};
