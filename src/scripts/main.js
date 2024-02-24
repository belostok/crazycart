import documentReady from './helpers/documentReady.js';
import * as flsFunctions from './modules/functions.js';
import lazyImages from './modules/lazyImages.js';
import heroSlider from './modules/hero-slider.js';
import datePicker from './modules/date-picker.js';
import forms from './modules/forms.js';
import autoComplete from './modules/auto-complete.js';
import inputMask from './modules/input-mask.js';
import video from './modules/video.js';
import emotionsSlider from './modules/emotions-slider.js';
import feedbackSlider from './modules/feedback-slider.js';
import faq from './modules/faq.js';
import eventsHeroSlider from './modules/events-hero-slider.js';
import shows from './modules/shows.js';
import banquetSlider from './modules/banquet-slider.js';
import dishSlider from './modules/dish-slider.js';
import popup from './modules/popup.js';
import animatorsSlider from './modules/animators-slider.js';
import relatedSlider from './modules/related-slider.js';
import gallerySlider from './modules/gallery-slider.js';
import contacts from './modules/contacts.js';
import animations from './modules/animations.js';
import vipShowSlider from './modules/vip-show-slider.js';
import dropdown from './modules/dropdown.js';
import mobileMenu from './modules/mobile-menu.js';
import fillingsSlider from './modules/fillings-slider.js';
import decorSlider from './modules/decor-slider.js';

flsFunctions.isWebp();

documentReady(() => {
	lazyImages();

	animations();

	datePicker();
	autoComplete();
	forms();
	inputMask();
	video();
	faq();
	shows();
	popup();
	contacts();
	dropdown();
	mobileMenu();

	heroSlider();
	emotionsSlider();
	feedbackSlider();
	eventsHeroSlider();
	banquetSlider();
	dishSlider();
	animatorsSlider();
	relatedSlider();
	gallerySlider();
	vipShowSlider();
	fillingsSlider();
	decorSlider();
});
