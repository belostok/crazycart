import Swiper from 'swiper/bundle';

export default () => {
	const sliderContainers = document.querySelectorAll( '.js-cc-events-hero-slider' );
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
					spaceBetween: 40,
					loopedSlides: slides.length,
					loop: slides.length > 1,
					// autoplay: slides.length > 1 ? autoplay : false,
					navigation: {
						prevEl: parent.querySelector( '.js-cc-events-hero-nav-prev' ),
						nextEl: parent.querySelector( '.js-cc-events-hero-nav-next' ),
					},
					pagination: {
						el: parent.querySelector( '.js-cc-events-hero-pagination' ) || null,
						clickable: true,
						renderBullet: ( index, className ) => {
							return '<button class="swiper-pagination-bullet cc-pagination__bullet cc-events-hero-slider__bullet"></button>';
						},
					}
				} );
			}
		} );
	}
}
