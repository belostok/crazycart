import { addClasses, removeClasses } from '../helpers/helpers.js';

export default () => {
	const prepareCl = 'cc-video-section__video-container_prepare';
	const activeCl = 'cc-video-section__video-container_active';

	document.addEventListener('click', (e) => {
		const target = e.target;

		if ( target?.classList.contains('js-cc-video-button') ) {
			const container = target?.closest('.js-cc-video-container');
			const video = container?.querySelector('video');

			if ( ! video || ! video.src ) {
				return null;
			}

			addClasses(container, activeCl, prepareCl, 300);
			video.play();

			video.addEventListener( 'pause', () => {
				removeClasses(container, activeCl, prepareCl);
			} );
		}
	});
}
