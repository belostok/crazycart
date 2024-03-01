export default () => {
	const container = document.querySelectorAll('.js-cc-shows');
	const hideItemsCl = 'cc-shows_hide-items';
	const showButtonCl = 'cc-shows_show-button';

	if ( ! container.length ) {
		return null;
	}

	container.forEach((container) => {
		const items = container.querySelectorAll('.js-cc-shows-item');
		const button = container.parentNode.querySelector('.js-cc-shows-button');

		if ( items.length < 13 || ! button ) {
			return null;
		}

		container.classList.add( showButtonCl );
		container.classList.remove( hideItemsCl );
		container.classList.remove( hideItemsCl );

		button.addEventListener('click', () => {
			container.classList.remove( showButtonCl );
		});
	});
}
