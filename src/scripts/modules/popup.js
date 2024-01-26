import { insertAfter } from '../helpers/helpers.js';

export default () => {
	const galleryItems = document.querySelectorAll( '.js-cc-gallery-item' );
	const footer       = document.querySelector( 'footer' )
	const textFormatContainer = document.querySelector('.cc-text-format');

	if ( ( ! galleryItems.length || ! footer ) && ! textFormatContainer ) {
		return null;
	}

	const singleModal = document.querySelectorAll( '.js-cc-gallery-single-mode' );
	const isSingle    = singleModal?.length;
	const sliderModal = document.querySelectorAll( '.js-cc-gallery-slider-mode' );
	const isSlider    = sliderModal?.length;

	if ( isSingle || textFormatContainer ) {
		const modal       = document.createElement( 'div' );
		const container   = document.createElement( 'div' );
		const closeBtn    = document.createElement( 'div' );
		const mediaCont   = document.createElement( 'div' );
		const captionNode = document.createElement( 'div' );
		modal.classList.add( 'cc-gallery-modal', 'cc-gallery-modal_single' );
		container.classList.add( 'cc-gallery-modal__container' );
		mediaCont.classList.add( 'cc-gallery-modal__image' );
		captionNode.classList.add( 'cc-gallery-modal__caption' );
		closeBtn.classList.add( 'cc-gallery-modal__close', 'cc-hover' );
		container.appendChild( mediaCont );
		container.appendChild( captionNode );
		modal.appendChild( closeBtn );
		modal.appendChild( container );
		insertAfter( modal, footer );

		const closeEvent = () => {
			modal.classList.remove( 'cc-gallery-modal_active' );
			setTimeout( () => {
				modal.classList.remove( 'cc-gallery-modal_prepare' );
				mediaCont.innerHTML   = '';
				captionNode.innerHTML = '';
			}, 300 );
		}

		closeBtn.addEventListener( 'click', closeEvent );

		document.addEventListener( 'click', ( e ) => {
			let target = e.target;

			if ( target?.classList.contains( 'cc-gallery-modal_active' ) ) {
				closeEvent();
			}

			const isImgTag = target?.tagName?.toLowerCase() === 'img';
			const isTextFormat = isImgTag && target.closest('.cc-text-format');

			target = isTextFormat ? target :
					( target?.closest( '.js-cc-gallery-item' ) ?
					target?.closest( '.js-cc-gallery-item' ) :
					target?.classList.contains( 'js-cc-gallery-item' ) ? target : false );

			if ( ! target ) {
				return null;
			}

			mediaCont.innerHTML   = '';
			captionNode.innerHTML = '';

			let video     = target.querySelector( 'video' );
			const iframe  = target.querySelector( 'iframe' );
			video         = video ? video : iframe;
			const image   = isTextFormat ? target  : target.querySelector( '.js-cc-gallery-item-full-image' );
			const caption = ( isImgTag ? target.parentNode : target ).querySelector( '.js-cc-gallery-item-caption' );

			const currentItems = target.querySelectorAll( '[data-src]' );
			if ( currentItems.length ) {
				currentItems.forEach((item) => {
					item.setAttribute( 'src', item.getAttribute( 'data-src' ) );
					item.removeAttribute( 'data-src' );
				});
			}

			if ( video && video.src ) {
				mediaCont.appendChild( video.cloneNode( true ) );
			} else if ( image && image.src ) {
				mediaCont.appendChild( image.cloneNode( true ) );
			}

			if ( caption && caption.innerHTML ) {
				captionNode.innerHTML = caption.innerHTML;
			}

			if ( ! modal.classList.contains( 'cc-gallery-modal_active' ) ) {
				modal.classList.add( 'cc-gallery-modal_prepare' );
				setTimeout( () => modal.classList.add( 'cc-gallery-modal_active' ), 0 );
			}
		} );
	}

	if ( isSlider ) {
		const modal     = document.createElement( 'div' );
		const container = document.createElement( 'div' );
		const wrapper   = document.createElement( 'div' );
		const prevBtn   = document.createElement( 'div' );
		const nextBtn   = document.createElement( 'div' );
		const closeBtn  = document.createElement( 'div' );
		modal.classList.add( 'cc-gallery-modal', 'cc-gallery-modal_slider' );
		container.classList.add( 'cc-gallery-modal__container', 'js-cc-gallery-slider' );
		wrapper.classList.add( 'swiper-wrapper' );
		prevBtn.classList.add( 'cc-gallery-modal__nav', 'cc-gallery-modal__nav_prev', 'js-cc-gallery-modal-prev' );
		nextBtn.classList.add( 'cc-gallery-modal__nav', 'cc-gallery-modal__nav_next', 'js-cc-gallery-modal-next' );
		closeBtn.classList.add( 'cc-gallery-modal__close', 'cc-hover' );
		container.appendChild( wrapper );
		modal.appendChild( closeBtn );
		modal.appendChild( prevBtn );
		modal.appendChild( nextBtn );
		modal.appendChild( container );
		insertAfter( modal, footer );

		const closeEvent = () => {
			modal.classList.remove( 'cc-gallery-modal_active' );
			setTimeout( () => {
				modal.classList.remove( 'cc-gallery-modal_prepare' );
				wrapper.innerHTML = '';
			}, 300 );
		}

		closeBtn.addEventListener( 'click', closeEvent );

		document.addEventListener( 'click', ( e ) => {
			let target = e.target;

			if ( target?.classList.contains( 'cc-gallery-modal_active' ) ) {
				closeEvent();
			}

			target = target?.closest( '.js-cc-gallery-item' ) ?
				target?.closest( '.js-cc-gallery-item' ) :
				target?.classList.contains( 'js-cc-gallery-item' ) ? target : false;

			if ( ! target ) {
				return null;
			}

			const parent = target.closest( '.js-cc-gallery-slider-mode' );

			if ( ! parent ) {
				return null;
			}

			wrapper.innerHTML = '';

			const items        = parent.querySelectorAll( '.js-cc-gallery-item' );
			const currentIndex = [ ...parent.children ].indexOf( target ) || 0;

			const currentItems = items[ currentIndex ]?.querySelectorAll( '[data-src]' );

			if ( currentItems.length ) {
				currentItems.forEach((item) => {
					item.setAttribute( 'src', item.getAttribute( 'data-src' ) );
					item.removeAttribute( 'data-src' );
				});
			}

			if ( ! items.length ) {
				return null;
			}

			items.forEach( ( item, i ) => {
				const isVideo = item.querySelector( 'video' ) || item.querySelector( 'iframe' );

				const slide      = document.createElement( 'div' );
				const pagination = document.createElement( 'div' );
				slide.classList.add( 'swiper-slide' );
				pagination.classList.add( 'cc-gallery-modal__pagination' );
				pagination.innerHTML = `${ i + 1 }<span class="cc-gallery-modal__pagination-total">/${ items.length }</span>`;
				const itemClone      = item.cloneNode( true );
				itemClone.classList  = 'cc-gallery-modal__slide-item';
				isVideo && itemClone.classList.add( 'cc-gallery-modal__slide-item_video' );
				const imageContainer = itemClone.querySelector( '.cc-gallery-grid__item-image-container' );
				if ( imageContainer ) imageContainer.classList = 'cc-gallery-modal__image-container';
				const caption = itemClone.querySelector( '.js-cc-gallery-item-caption' );
				if ( caption ) caption.classList = 'cc-gallery-modal__caption';

				caption.appendChild( pagination );
				slide.appendChild( itemClone );
				wrapper.appendChild( slide );
			} );

			if ( ! modal.classList.contains( 'cc-gallery-modal_active' ) ) {
				modal.classList.add( 'cc-gallery-modal_prepare' );
				setTimeout( () => modal.classList.add( 'cc-gallery-modal_active' ), 0 );
			}

			const slides = container.querySelectorAll('.swiper-slide');

			if ( slides.length < 2 ) {
				modal.classList.add('cc-gallery-modal_slider-disabled');
				return null;
			}

			const swiper = new Swiper( container, {
				slidesPerView: 'auto',
				loopedSlides: slides.length,
				initialSlide: currentIndex,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				navigation: {
					nextEl: '.js-cc-gallery-modal-next',
					prevEl: '.js-cc-gallery-modal-prev',
				},
				loop: true
			} );

			swiper.on('activeIndexChange', function () {
				const currentSlide = swiper?.slides[swiper.activeIndex];
				const currentItems = currentSlide?.querySelectorAll( '[data-src]' );

				if ( ! currentItems.length ) {
					return null;
				}

				currentItems.forEach( ( item ) => {
					item.setAttribute( 'src', item.getAttribute( 'data-src' ) );
					item.removeAttribute( 'data-src' );
				} );
			} );
		} );
	}
};
