import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { copy, fontsCopy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { plugins } from './gulp/config/plugins.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { ftp } from './gulp/tasks/ftp.js';

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

function watcher() {
	gulp.watch(path.watch.assets, copy);
	gulp.watch(path.watch.html, html); // gulp.watch(path.watch.html, gulp.series(html, ftp));
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(
	otfToTtf,
	ttfToWoff,
	fontsStyle
)

const mainTasks = gulp.series(
	fonts,
	fontsCopy,
	gulp.parallel(
		copy,
		html,
		scss,
		js,
		images
	)
);

const dev = gulp.series(
	clean,
	mainTasks,
	gulp.parallel(
		watcher,
		server
	)
);
const build = gulp.series(
	clean,
	mainTasks
);
const deployFTP = gulp.series(
	clean,
	mainTasks,
	ftp
);

export { dev }
export { build }
export { svgSprive }
export { deployFTP }

gulp.task('default', dev);
