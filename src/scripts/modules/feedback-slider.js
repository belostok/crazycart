import Swiper from 'swiper/bundle';

export default () => {
	const sliderContainers = document.querySelectorAll( '.js-cc-feedback-slider' );
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
					slidesPerView: 3,
					spaceBetween: 40,
					loopedSlides: slides.length,
					loop: slides.length > 3,
					// autoplay: slides.length > 1 ? autoplay : false,
					navigation: {
						prevEl: parent.querySelector( '.js-cc-feedback-nav-prev' ),
						nextEl: parent.querySelector( '.js-cc-feedback-nav-next' ),
					},
					pagination: {
						el: parent.querySelector( '.js-cc-feedback-pagination' ) || null,
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
