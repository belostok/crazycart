import Swiper from 'swiper/bundle';
import { breakpoints } from '../helpers/helpers.js';

export default () => {
	const breakpoint = 768;
	const isMobile   = breakpoints( breakpoint );

	const sliderContainers = document.querySelectorAll( '.js-cc-gallery-slider' );
	if ( sliderContainers.length ) {
		let sliders = [];

		sliderContainers.forEach( ( el, index ) => {
			sliders[ index ] = null;
		} );

		const initSlider = (sliderContainer, index) => {
			const parent     = sliderContainer.parentNode;
				const slides     = sliderContainer.querySelectorAll( '.swiper-slide' );
				const autoplay   = {
					delay: 8000,
					disableOnInteraction: false
				};
				sliders[ index ] = new Swiper( sliderContainer, {
					slidesPerView: 1,
					spaceBetween: 40,
					loopedSlides: slides.length,
					loop: slides.length > 1,
					// autoplay: slides.length > 1 ? autoplay : false,
					navigation: {
						prevEl: parent.querySelector( '.js-cc-gallery-prev' ),
						nextEl: parent.querySelector( '.js-cc-gallery-next' ),
					},
					pagination: {
						el: parent.querySelector( '.js-cc-gallery-pagination' ) || null,
						clickable: true,
						renderBullet: ( index, className ) => {
							return '<button class="swiper-pagination-bullet cc-pagination__bullet"></button>';
						},
					},
					on: {
						resize: function( swiper ) {
							if ( swiper.size >= breakpoint ) {
								swiper.destroy();
							}
						}
					}
			} );
		}

		sliderContainers.forEach( ( sliderContainer, index ) => {
			if ( sliders[ index ] === null && isMobile ) {
				initSlider( sliderContainer, index );
			}

			let sliderCalled = false;

			window.addEventListener( 'resize', ( e ) => {
				const target = e.target;
				const width  = target?.innerWidth;

				if ( width < breakpoint && ! sliderCalled ) {
					initSlider( sliderContainer, index );
					sliderCalled = true;
				}

				if ( width >= breakpoint ) {
					sliderCalled = false;
				}
			} )
		} );
	}
}
