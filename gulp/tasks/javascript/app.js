var gulp = require('gulp');
var _ = require('lodash');
var gulpUtil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var bulkify = require('bulkify');
var hjsonify = require('hjsonify');
var partialify = require('partialify/custom');
var getBundleName = require('../../utils/getBundleName.js');

gulp.task(
	'javascript:app',
	['lint:javascript'],
	function (done) {
		var bundler = browserify({
			entries: ['./src/scripts/'],
			debug: true
		});
		var npmPackage = require('../../utils/getPackageJson.js');
		var bundle = function () {
			_(npmPackage.dependencies)
				.keys()
				.each(function (moduleName) {
					bundler.external(moduleName);
				})
				.value();
			return bundler
					.transform(babelify)
					.transform(partialify.alsoAllow(['vue']))
					.transform(bulkify)
					.transform(hjsonify)
					.bundle()
					.on('error', function (error) {
						gulpUtil.log(gulpUtil.colors.red('Browserify Error:'), error.message);
						done(error);
					})
					.pipe(source(getBundleName() + '.js'))
					.pipe(buffer())
					.pipe(sourcemaps.init({loadMaps: true}))
					.pipe(uglify())
					.pipe(sourcemaps.write('./'))
					.pipe(gulp.dest('./dist'));
		};
		return bundle();
	}
);
