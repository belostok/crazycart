import Swiper from 'swiper/bundle';
import { breakpoints } from '../helpers/helpers.js';

export default () => {
	if ( breakpoints(992, false) ) {
		return null;
	}

	const sliderContainers = document.querySelectorAll( '.js-cc-filligs-slider' );
	if ( sliderContainers.length ) {
		let sliders = [];
		sliderContainers.forEach( ( el, index ) => {
			sliders[ index ] = null;
		} );

		sliderContainers.forEach( ( sliderContainer, index ) => {
			if ( sliders[ index ] === null ) {
				const parent     = sliderContainer.parentNode;
				const slides     = sliderContainer.querySelectorAll( '.swiper-slide' );
				const autoplay   = {
					delay: 8000,
					disableOnInteraction: false
				};
				sliders[ index ] = new Swiper( sliderContainer, {
					slidesPerView: 1,
					spaceBetween: 20,
					loopedSlides: slides.length,
					loop: slides.length > 1,
					// autoplay: slides.length > 1 ? autoplay : false,
					navigation: {
						prevEl: parent.querySelector( '.jc-cc-fillings-prev' ),
						nextEl: parent.querySelector( '.jc-cc-fillings-next' )
					},
					pagination: {
						el: parent.querySelector( '.js-cc-fillings-pagination' ) || null,
						clickable: true,
						renderBullet: ( index, className ) => {
							return '<button class="swiper-pagination-bullet cc-pagination__bullet"></button>';
						},
					}
				} );
			}
		} );
	}
}
