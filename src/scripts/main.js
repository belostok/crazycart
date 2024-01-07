import documentReady from './helpers/documentReady.js';
import * as flsFunctions from './modules/functions.js';
import lazyImages from './modules/lazyImages.js';
import heroSlider from './modules/hero-slider.js';
import datePicker from './modules/date-picker.js';
import forms from './modules/forms.js';
import autoComplete from './modules/auto-complete.js';
import inputMask from './modules/input-mask.js';
import video from './modules/video.js';

flsFunctions.isWebp();

documentReady(() => {
	lazyImages();
	heroSlider();
	datePicker();
	autoComplete();
	forms();
	inputMask();
	video();
});
