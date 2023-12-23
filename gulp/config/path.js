import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	build: {
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/images/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		assets: `${buildFolder}/assets/`
	},
	src: {
		svgicons: `${srcFolder}/svgicons/*.svg`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/images/**/*.svg`,
		js: `${srcFolder}/scripts/main.js`,
		scss: `${srcFolder}/styles/main.scss`,
		html: `${srcFolder}/html/*.pug`, //.html
		assets: `${srcFolder}/assets/**/*.*`,
		fonts: `${srcFolder}/fonts/**/*.*`
	},
	watch: {
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
		js: `${srcFolder}/scripts/**/*.js`,
		scss: `${srcFolder}/styles/**/*.scss`,
		html: `${srcFolder}/**/*.pug`, //.html
		assets: `${srcFolder}/assets/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
}
