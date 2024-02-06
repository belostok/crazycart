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
}
