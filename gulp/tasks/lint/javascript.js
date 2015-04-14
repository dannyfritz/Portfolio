var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task(
	'lint:javascript',
	function () {
		return gulp.src(['src/scripts/**/*.js'])
				.pipe(eslint())
				.pipe(eslint.format())
				.pipe(eslint.failOnError());
	}
);
