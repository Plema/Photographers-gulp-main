module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/jquery.fancybox.min.js': ['dist/js/plugin/jquery.fancybox.js'],
				'../markup/js/video-js.min.js': ['dist/js/plugin/video-js.js'],
				'../markup/js/jquery-ui.autocomplete.min.js': ['dist/js/plugin/jquery-ui.autocomplete.js'],
				'../markup/js/jquery.matchHeight.min.js': ['dist/js/plugin/jquery.matchHeight.js'],
				'../markup/js/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'],
				'../markup/js/sly.min.js': ['dist/js/plugin/sly.js'],
				'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
				'../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
				'../markup/js/jcf.radio.min.js': ['dist/js/plugin/jcf.radio.js'],
				'../markup/js/jquery.ui.touch-punch.min.js': ['dist/js/plugin/jquery.ui.touch-punch.js'],
				'../markup/js/jquery.mCustomScrollbar.min.js': ['dist/js/plugin/jquery.mCustomScrollbar.js'],
				'../markup/js/fileinput.min.js': ['dist/js/plugin/fileinput.js'],
				
				
				
				


				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/score.min.js': ['dist/js/score.js'],
				'../markup/js/profile.min.js': ['dist/js/profile.js'],
				'../markup/js/search.min.js': ['dist/js/search.js'],
				'../markup/js/projects.min.js': ['dist/js/projects.js'],
				'../markup/js/project_сard-customer.min.js': ['dist/js/project_сard-customer.js'],
				'../markup/js/project_сard-participant.min.js': ['dist/js/project_сard-participant.js'],
				'../markup/js/project_сard.min.js': ['dist/js/project_сard.js'],
				'../markup/js/events.min.js': ['dist/js/events.js'],
				'../markup/js/organizations.min.js': ['dist/js/organizations.js'],
				'../markup/js/specialists.min.js': ['dist/js/specialists.js'],
				'../markup/js/profile-unregistered.min.js': ['dist/js/profile-unregistered.js'],
				'../markup/js/profile-non-expert.min.js': ['dist/js/profile-non-expert.js'],
				'../markup/js/profile-expert.min.js': ['dist/js/profile-expert.js'],
				'../markup/js/profile-setting.min.js': ['dist/js/profile-setting.js'],
				'../markup/js/profile-messages.min.js': ['dist/js/profile-messages.js'],
				'../markup/js/setting-company.min.js': ['dist/js/setting-company.js'],


				'../markup/js/profile-editing.min.js': ['dist/js/profile-editing.js'],
				'../markup/js/personal-area-projects.min.js': ['dist/js/personal-area-projects.js'],
				'../markup/js/promotion.min.js': ['dist/js/promotion.js'],
				'../markup/js/projectsPopup.min.js': ['dist/js/projectsPopup.js'],
				'../markup/js/creatingAlbum.min.js': ['dist/js/creatingAlbum.js'],
				'../markup/js/photoDescr.min.js': ['dist/js/photoDescr.js'],
				'../markup/js/viewPhoto.min.js': ['dist/js/viewPhoto.js'],
				'../markup/js/viewVideo.min.js': ['dist/js/viewVideo.js'],

				'../markup/js/profile-reviews.min.js': ['dist/js/profile-reviews.js'],
				'../markup/js/post-changes.min.js': ['dist/js/post-changes.js'],
				'../markup/js/profile-bookmarks.min.js': ['dist/js/profile-bookmarks.js'],

				'../markup/js/create-project.min.js': ['dist/js/create-project.js'],
				'../markup/js/createEvent.min.js': ['dist/js/createEvent.js'],

				'../markup/js/event-card.min.js': ['dist/js/event-card.js'],
				'../markup/js/event-editing.min.js': ['dist/js/event-editing.js'],
				'../markup/js/profile-events.min.js': ['dist/js/profile-events.js'],
				'../markup/js/my-company-profile.min.js': ['dist/js/my-company-profile.js'],
				'../markup/js/control.min.js': ['dist/js/control.js'],

				'../markup/js/complain-popup.min.js': ['dist/js/complain-popup.js'],
				'../markup/js/feedback.min.js': ['dist/js/feedback.js'],
				

			

				

				
				
				
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/**/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
					templates: '<%= fixturesPath %>/*.html',
					layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						userHeader: '<%= fixturesPath %>/templates/user-header.html',
						companyHeader: '<%= fixturesPath %>/templates/company-header.html',
                    	shopHeader: '<%= fixturesPath %>/templates/shop-header.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						pagination:'<%= fixturesPath %>/templates/pagination.html',
						notifications:'<%= fixturesPath %>/templates/notifications.html',
						header_notification_popup:'<%= fixturesPath %>/templates/header-notification-popup.html',
						popup_to_delete_messages:'<%= fixturesPath %>/templates/popup-to-delete-messages.html',
						popup_to_delete_single_message:'<%= fixturesPath %>/templates/popup-to-delete-single-message.html',
						creation_chat:'<%= fixturesPath %>/templates/creation-chat.html',
						publication:'<%= fixturesPath %>/templates/publication.html',
						publication_repost:'<%= fixturesPath %>/templates/publication-repost.html',
						attachments_popup:'<%= fixturesPath %>/templates/popup-attachments.html',
						popup_share:'<%= fixturesPath %>/templates/popup-share.html',
						project_popups:'<%= fixturesPath %>/templates/project-popups.html',
						upload_popup:'<%= fixturesPath %>/templates/upload-popup.html',
						event_popup:'<%= fixturesPath %>/templates/popup-events.html',
						company_popup:'<%= fixturesPath %>/templates/createCompany.html',
						contacts_popup:'<%= fixturesPath %>/templates/popup-contacts.html',
						
					}
                },
            }
        }
    }


});
// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
