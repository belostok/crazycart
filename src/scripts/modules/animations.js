import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export default () => {
	// VIP Hero
	gsap.to( '.js-cc-vip-hero-container', {
		delay: 0.3,
		duration: 1,
		opacity: 1,
		transform: 'translateY(0)',
		ease: 'power2.inOut'
	} );

	// Parallax
	gsap.to( '.js-cc-parallax-element', {
		yPercent: -30, // Adjust this value to control the parallax effect
		ease: 'none',
		scrollTrigger: {
			trigger: '.js-cc-parallax-container',
			start: 'bottom bottom',
			end: 'bottom top',
			scrub: true // Smooth scrolling effect
		}
	} );

	// VIP Limousine
	ScrollTrigger.create( {
		trigger: '.js-cc-vip-limousine-container',
		start: 'bottom bottom', // Adjust the start position as needed
		onEnter: () => {
			gsap.to( '.js-cc-vip-limousine', { transform: 'translateX(0)', duration: 1.5, ease: 'power2.out' } );
		}
	} );

	// VIP Photo Zone
	gsap.to( '.js-cc-vip-photo-zone', {
		xPercent: -100, // Adjust this value to control the parallax effect
		ease: 'none',
		scrollTrigger: {
			trigger: '.js-cc-vip-photo-zone-container',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true // Smooth scrolling effect
		}
	} );

	// VIP Video Photo
	gsap.to( '.js-cc-vip-video-photo', {
		transform: 'translateX(0)',
		ease: 'none',
		scrollTrigger: {
			trigger: '.js-cc-vip-video-photo-container',
			start: 'top bottom',
			end: 'bottom 80%',
			scrub: true // Smooth scrolling effect
		}
	} );

	// Main parallax
	const mainParallaxContainers = document.querySelectorAll('.js-cc-parallax-main-container');

	if ( mainParallaxContainers.length ) {
		mainParallaxContainers.forEach((container) => {
			const items = container.querySelectorAll('.js-cc-parallax-main-item');

			if ( ! items.length ) {
				return null;
			}

			items.forEach((item) => {
				const data = item.getAttribute('data-range');

				if ( ! data ) {
					return null;
				}

				item.style.transform = `translateY(${data / 2}%)`;

				gsap.to( item, {
					yPercent: `-${data}`, // Adjust this value to control the parallax effect
					ease: 'none',
					scrollTrigger: {
						trigger: container,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true // Smooth scrolling effect
					}
				} );
			} );
		});
	}

	const discoContainer = document.querySelector('.js-cc-parallax-disco-container');
	const discoItems = discoContainer?.querySelectorAll( '.js-cc-parallax-main-item' );

	if ( ! discoItems.length ) {
		return null;
	}

	discoItems.forEach( ( item ) => {
		const data = item.getAttribute( 'data-range' );

		if ( ! data ) {
			return null;
		}

		item.style.transform = `translateY(${ data / 2 }%)`;

		gsap.to( item, {
			y: `-${ data }`, // Adjust this value to control the parallax effect
			ease: 'none',
			scrollTrigger: {
				trigger: discoContainer,
				start: 'top 60%',
				end: 'bottom',
				scrub: true, // Smooth scrolling effect
			}
		} );
	} );
}
