import Swiper from 'swiper/bundle';

export default () => {
	const sliderContainers = document.querySelectorAll( '.js-cc-banquet-slider' );
	if ( sliderContainers.length ) {
		let sliders = [];
		sliderContainers.forEach( ( el, index ) => {
			sliders[ index ] = null;
		} );

		sliderContainers.forEach( ( sliderContainer, index ) => {
			if ( sliders[ index ] === null ) {
				const slides     = sliderContainer.querySelectorAll( '.swiper-slide' );
				const autoplay   = {
					delay: 8000,
					disableOnInteraction: false
				};
				sliders[ index ] = new Swiper( sliderContainer, {
					loopedSlides: slides.length,
					loop: slides.length > 1,
					spaceBetween: 20,
					// autoplay: slides.length > 1 ? autoplay : false,
					navigation: {
						prevEl: sliderContainer.querySelector( '.js-cc-banquet-prev' ),
						nextEl: sliderContainer.querySelector( '.js-cc-banquet-next' )
					}
				} );
			}
		} );
	}

}
