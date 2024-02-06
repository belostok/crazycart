export default () => {
	const container         = document.querySelector( '.js-cc-select-container' );
	const groups = document.querySelectorAll('.js-cc-select-group');
	const containerActiveCl = 'cc-contacts__select-container_active';
	const groupPrepareCl = 'cc-contacts__items-group_prepare';
	const groupActiveCl = 'cc-contacts__items-group_active';

	if ( ! container || ! groups.length ) {
		return null;
	}

	const selectHandler = ( e ) => {
		const target = e.target;

		if ( target?.classList.contains( 'js-cc-select' ) || target?.closest( '.js-cc-select' ) ) {
			return container.classList.toggle( containerActiveCl );
		}

		if ( target?.classList.contains('js-cc-select-item') ) {
			const current = target.innerText;
			let selectTitle = container.querySelector('.js-cc-select-title')?.innerText;
			const itemData = target.getAttribute('data-item');

			if ( ! selectTitle || ! current || current.toLowerCase() === selectTitle.toLowerCase() || ! itemData ) {
				return container.classList.remove( containerActiveCl );
			}

			groups.forEach((group) => {
				group.classList.remove(groupActiveCl, groupPrepareCl);

				if ( itemData === group.getAttribute('data-group') ) {
					container.querySelector('.js-cc-select-title').innerHTML = current;
					group.classList.add(groupPrepareCl);
					setTimeout(() => group.classList.add(groupActiveCl), 0);
				}
			});
		}

		container.classList.remove( containerActiveCl );
	}

	document.addEventListener( 'click', selectHandler );
	window.addEventListener( 'scroll', () => container.classList.remove( containerActiveCl ) );


}
