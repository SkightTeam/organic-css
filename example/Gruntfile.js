module.exports = function(grunt) {

	grunt.initConfig({
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded'
				},
				files: {                         // Dictionary of files
					'css/styles.css': './sass/site.scss'
				}
			}
		},
		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass']
			},
			organic: {
				files: ['../src/**/*.scss'],
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);

}