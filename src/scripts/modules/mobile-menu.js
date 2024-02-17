export default () => {
	const openBtn = document.querySelector('.js-cc-menu-button');
	const closeBtn = document.querySelector('.js-cc-mobile-menu-close');
	const menu = document.querySelector('.js-cc-mobile-menu');
	const menuActiveCl = 'cc-mobile-menu_active';

	if ( ! openBtn || ! closeBtn || ! menu ) {
		return null;
	}

	openBtn.addEventListener('click', () => {
		if ( ! menu.classList.contains(menuActiveCl) ) {
			menu.classList.add(menuActiveCl);
			document.body.style.position = 'fixed';
		}
	});

	closeBtn.addEventListener('click', () => {
		if ( menu.classList.contains(menuActiveCl) ) {
			menu.classList.remove(menuActiveCl);
			document.body.style.position = '';
		}
	});
}
