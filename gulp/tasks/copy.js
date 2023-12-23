export const copy = () => {
	return app.gulp.src(app.path.src.assets)
		.pipe(app.gulp.dest(app.path.build.assets))
}
export const fontsCopy = () => {
	return app.gulp.src(app.path.src.fonts)
		.pipe(app.gulp.dest(app.path.build.fonts))
}
