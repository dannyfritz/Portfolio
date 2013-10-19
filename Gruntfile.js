module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {},
			files: {
				src: ['app/**/*.js']
			},
		},
		copy: {
			bower: {
				files: [
					{
						cwd: 'bower_components/',
						expand: true,
						src: [
							'requirejs/require.js',
							'requirejs-text/text.js',
							'lodash/dist/lodash.compat.min.js',
							'zepto/zepto.min**',
							'backbone/backbone-min**',
							'handlebars/handlebars.js',
							'less.js/dist/less-1.4.2.min.js',
							'font-awesome/css/font-awesome.min.css'
						],
						dest: 'vendor/',
						flatten: true
					},
					{
						cwd: 'bower_components/',
						expand: true,
						src: [
							'font-awesome/font/*'
						],
						dest: 'font/',
						flatten: true
					}
				]
			}
		},
		connect: {
			server: {
				options: {
					port: 80,
					keepalive: true,
					livereload: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/**', 'styles/**', 'index.html'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['copy:bower']);
};
