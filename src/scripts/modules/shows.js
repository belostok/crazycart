export default () => {
	const containers = document.querySelectorAll('.js-cc-shows-items');
	const hideItemsCl = 'cc-shows__items_hide-items';
	const showButtonCl = 'cc-shows__items_show-button';

	if ( ! containers.length ) {
		return null;
	}

	containers.forEach((container) => {
		const items = container.querySelectorAll('.js-cc-shows-item');
		const button = container.querySelector('.js-cc-shows-button');

		if ( items.length < 13 || ! button ) {
			return null;
		}

		container.classList.add( showButtonCl );
		container.classList.remove( hideItemsCl );

		button.addEventListener('click', () => {
			container.classList.remove( showButtonCl );
		});
	});
}
