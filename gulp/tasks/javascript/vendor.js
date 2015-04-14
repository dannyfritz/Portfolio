var gulp = require('gulp');
var _ = require('lodash');
var gulpUtil = require('gulp-util');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var resolve = require('resolve');

gulp.task(
	'javascript:vendor',
	[],
	function () {
		var bundler = browserify({
			noParse: ['jquery']
		});
		var npmPackage = require('../../utils/getPackageJson.js');
		var bundle = function () {
			_(npmPackage.dependencies)
				.keys()
				.each(function (moduleName) {
					bundler.require(resolve.sync(moduleName), { expose: moduleName });
				})
				.value();
			return bundler
					.bundle()
					.on('error', function (error) {
						gulpUtil.log(gulpUtil.colors.red('Browserify Error:'), error.message);
					})
					.pipe(source('vendor.js'))
					.pipe(buffer())
					.pipe(uglify())
					.pipe(gulp.dest('./dist'));
		};
		return bundle();
	}
);
