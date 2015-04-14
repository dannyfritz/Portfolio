var path = require('path');
var gulp = require('gulp');
var combiner = require('stream-combiner2');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var npmImportPlugin = require('less-plugin-npm-import');
var npmImport = new npmImportPlugin({});
var autoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new autoPrefixPlugin({ browsers: ["last 2 versions"] });

gulp.task(
	'css',
	[],
	function () {
		var combined = combiner.obj([
			gulp.src('./src/styles/main.less'),
			sourcemaps.init(),
			less({
				paths: [ path.join(__dirname, 'src', 'styles') ],
				plugins: [autoprefix, npmImport]
			}),
			sourcemaps.write('./'),
			gulp.dest('./dist')
		]);
		return combined;
	}
);
