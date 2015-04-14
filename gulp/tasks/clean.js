var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var trash = require('trash');

gulp.task(
	'clean',
	[],
	function (done) {
		trash(['dist/*'], function (error) {
			if (error)
			{
				gulpUtil.log(gulpUtil.colors.red('Clean Error:'), error.message);
				gulpUtil.log('This is most likely caused by removing a directory that doesn\'t exist and is usually safe to ignore.');
				gulpUtil.log(error.stack);
			}
			done();
		});
	}
);
