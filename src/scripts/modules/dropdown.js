import { addClasses, breakpoints, removeClasses } from '../helpers/helpers.js';

export default () => {
	const containerActiveCl = 'cc-dropdown-active';
	const itemActiveCl = 'cc-dropdown__list-button_active';
	const listActiveCl = 'cc-dropdown_active';
	const tabSectionPrepareCl = 'cc-rates__section_prepare';
	const tabSectionActiveCl = 'cc-rates__section_active';

	const containers = document.querySelectorAll( '.js-cc-dropdown' );
	const tabSections = document.querySelectorAll('.js-cc-age-section');

	if ( ! containers || ! containers.length ) {
		return null;
	}

	const closeAll = ( conts ) => {
		conts.forEach( ( container ) => {
			const list = container.querySelector( '.js-cc-dropdown-list' );

			if ( ! list || ! container.classList.contains( containerActiveCl ) || ! list.classList.contains( listActiveCl ) ) {
				return null;
			}

			container.classList.remove( containerActiveCl );
			list.classList.remove( listActiveCl );
		} );
	}

	document.addEventListener('click', (e) => {
		const target = e.target;

		if ( target?.classList.contains('js-cc-dropdown-title-button') ) {
			const container = target.closest('.js-cc-dropdown');
			const list = container?.querySelector('.js-cc-dropdown-list');

			if ( ! list ) {
				return null;
			}


			if ( ! container.classList.contains(containerActiveCl) && ! list.classList.contains(listActiveCl) ) {
				closeAll(containers);

				container.classList.add( containerActiveCl );
				list.classList.add( listActiveCl );
			} else {
				container.classList.remove( containerActiveCl );
				list.classList.remove( listActiveCl );
			}
		} else {
			closeAll(containers);
		}

		if ( target?.classList.contains('js-cc-dropdown-button') ) {
			const buttonTitle = target.textContent;
			const container = target.closest('.js-cc-dropdown');
			const items = container?.querySelectorAll('.js-cc-dropdown-button');
			const currentTitleContainer = container?.querySelector('.js-cc-dropdown-title');
			const currentTitle = currentTitleContainer?.textContent;
			const dataButtonId = target.dataset.ageButtonId;

			if ( ! items || ! items.length || ! buttonTitle || ! currentTitle ||
				buttonTitle.toLowerCase() === currentTitle.toLowerCase() ) {
				return null;
			}

			items.forEach((item) => item.classList.remove(itemActiveCl));
			target.classList.add(itemActiveCl);

			currentTitleContainer.innerText = buttonTitle;

			if ( dataButtonId !== null && tabSections && tabSections.length && breakpoints(992) ) {
				tabSections.forEach((section) => {
					const dataAttr = section.dataset.ageId;

					if ( dataAttr === null ) {
						return null;
					}

					if ( dataAttr === dataButtonId ) {
						addClasses(section, tabSectionActiveCl, tabSectionPrepareCl);
					} else {
						removeClasses(section, tabSectionActiveCl, tabSectionPrepareCl);
					}
				});
			}
		}
	});
}
