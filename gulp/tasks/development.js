var gulp = require('gulp');

gulp.task(
	'development',
	['clean', 'javascript:vendor', 'javascript:app', 'css', 'html']
);
