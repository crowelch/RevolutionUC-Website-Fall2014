module.exports = function(grunt) {

	grunt.initConfig({

		// Allows for referencing of package property values
		pkg: grunt.file.readJSON('package.json'),

		bower: {
			install: {
				options: {
					cleanBowerDir: false,
					copy: false,
					install: true,
					verbose: true
				}
			}
		},

		copy: {
			dist: {
				files: [
					// Make all targets in 'RevolutionUC\-F2014' directory copy to a location
					// in 'dist' relative to own directory
					
					// { expand:true, cwd:'RevolutionUC\-F2014/', RevolutionUC\-F2014:['*.html','*.png','*.ico'], dest:'dist' },
					// { expand:true, cwd:'RevolutionUC\-F2014/js/', RevolutionUC\-F2014:['**'], dest:'dist/js' },
					// { expand:true, cwd:'RevolutionUC\-F2014/img/', RevolutionUC\-F2014:['*.svg','*.png','*.jpg','*.jpeg'], dest:'dist/img' },
					// { expand:true, cwd:'RevolutionUC\-F2014/fonts/', RevolutionUC\-F2014:['**'], dest:'dist/fonts' }
					
					{	// html
						expand: true,
						flatten: false,
						cwd: 'RevolutionUC\-F2014/',
						RevolutionUC\-F2014: ['**/*.html'],
						dest: 'dist'
					},
					{	// favicon
						expand: true,
						flatten: false,
						cwd: 'RevolutionUC\-F2014/',
						RevolutionUC\-F2014: ['*.png', '*.ico'],
						dest: 'dist'
					},
					{	// images
						expand: true,
						flatten: false,
						cwd: 'RevolutionUC\-F2014/images/',
						RevolutionUC\-F2014: ['**/*'],
						dest: 'dist/images'
					},
					{	// media
						expand: true,
						flatten: false,
						cwd: 'RevolutionUC\-F2014/media/',
						RevolutionUC\-F2014: ['**/*'],
						dest: 'dist/media'
					},
					{
						// fonts
						expand: true,
						flatten: false,
						cwd: 'RevolutionUC\-F2014/fonts/',
						RevolutionUC\-F2014: ['**'],
						dest: 'dist/fonts'
					}
				]
			}
		},

		concat: {
			jquery: { files: {
				// jquery.min.js
				'dist/js/vendor/jquery/jquery.min.js':
					['bower_components/jquery/dist/jquery.min.js'],
				// jquery.min.map
				'dist/js/vendor/jquery/jquery.min.map':
					['bower_components/jquery/dist/jquery.min.map']
			}},
			waypoint: { files: {
				// jquery-waypoints.min.js
				'dist/js/vendor/jquery/plugins/jquery-waypoints.min.js':
					['bower_components/jquery-waypoints/waypoints.min.js']
			}},
			scrollit: { files: {
				// jquery-scrollIt.min.js
				'dist/js/vendor/jquery/plugins/jquery-scrollIt.min.js':
					['bower_components/ScrollIt/scrollIt.min.js']
			}}
		},

		sass: {
			options: {
				// Helps Sass task resolve Foundation dependencies
				loadPath: 'bower_components/foundation/scss',
				style: 'compressed',
				quiet: true
			},
			dist: { files: {
				// startup-sass.min.css
				'dist/css/startup-sass.min.css': 'RevolutionUC\-F2014/scss/main.scss'
			}}
		},

		watch: {
			grunt: { files: ['Gruntfile.js'] },
			copy: {
				files: ['RevolutionUC\-F2014/**'],
				tasks: ['copy']
			},
			sass: {
				files: 'RevolutionUC\-F2014/scss/**/*.scss',
				tasks: ['sass'],
				livereload: true
			},

		}

	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('build', ['bower:install', 'concat', 'copy', 'sass']);
	grunt.registerTask('default', ['watch']);

}