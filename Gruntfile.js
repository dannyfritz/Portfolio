module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			target: {
				rjsConfig: 'app/config.js'
			}
		},
		jshint: {
			options: {},
			files: {
				src: ['app/**/*.js']
			},
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
	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['bower']);
};
