export default () => {
	const items = document.querySelectorAll('.js-cc-faq-item');
	const activeCl = 'cc-faq__item_active';

	if ( ! items.length ) {
		return null;
	}

	items.forEach((item) => {
		const answer = item.querySelector('.js-cc-faq-answer');

		if ( ! answer ) {
			return null;
		}

		answer.style.height = 'auto';
		const height = answer.offsetHeight;
		answer.style.height = '0';
		answer.style.transition = 'height 0.3s';

		item.addEventListener('click', () => {
			if ( ! item.classList.contains(activeCl) ) {
				item.classList.add( activeCl );
				answer.style.height = `${height}px`;
			} else {
				answer.style.height = '0';
				item.classList.remove( activeCl );
			}
		});
	});
}
