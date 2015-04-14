var gulp = require('gulp');
var batch = require('gulp-batch');

module.exports = function runBatchTasks(tasks)
	{
		return batch(function (events, done) {
			events
				.on('error', done)
				.on('end', done)
				.on('close', done)
				.on('data', function (){
					gulp.start(tasks);
				});
		});
	}
