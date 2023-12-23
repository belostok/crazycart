import documentReady from './helpers/documentReady.js';
import * as flsFunctions from './modules/functions.js';
import lazyImages from './modules/lazyImages.js';

flsFunctions.isWebp();

documentReady(() => {
	lazyImages();
});
