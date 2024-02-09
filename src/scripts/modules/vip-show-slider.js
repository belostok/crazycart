import Swiper from 'swiper/bundle';

export default () => {
	const sliderContainers = document.querySelectorAll( '.js-cc-vip-show-slider' );
	const activeItemCl = 'cc-vip-show__pagination-item_active';

	if ( sliderContainers.length ) {
		let sliders = [];
		sliderContainers.forEach( ( el, index ) => {
			sliders[ index ] = null;
		} );

		sliderContainers.forEach( ( sliderContainer, index ) => {
			if ( sliders[ index ] === null ) {
				const container = sliderContainer.closest('.js-cc-vip-show');
				const pagItems = container?.querySelectorAll('.js-cc-vip-show-pagination-item');

				if ( ! pagItems.length ) {
					return null;
				}

				sliders[ index ] = new Swiper( sliderContainer, {
					effect: 'fade',
					fadeEffect: {
						crossFade: true
					},
					allowTouchMove: false
				} );

				pagItems.forEach((item, i) => {
					item.addEventListener('click', () => {
						if ( ! item.classList.contains(activeItemCl) ) {
							sliders[ index ].slideTo(i);

							pagItems.forEach((it) => it.classList.remove(activeItemCl));
							item.classList.add(activeItemCl);
						}
					});
				});
			}
		} );
	}

}
