/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    "public/components/jquery/jquery.min.js",
                    "public/components/select2/select2.js",
                    "public/components/angular/angular.js",
                    "public/components/angular-elastic/elastic.js",
                    "public/components/angular-animate/angular-animate.js",
                    "public/components/ngScrollTo/ng-scrollto.js",
                    "public/components/angular-route/angular-route.js",
                    "public/components/angular-cookies/angular-cookies.js",
                    "public/components/underscore/underscore.js",
                    "public/components/bootstrap/dist/js/bootstrap.js",
                    "public/components/angular-strap/dist/angular-strap.js",
                    "public/js/lib/ui-bootstrap-tpls-pagination.js",
                    "public/components/ngUpload/ng-upload.js",
                    "public/components/uri.js/src/URI.js",
                    "public/components/momentjs/moment.js",
                    "public/components/stringjs/lib/string.js",
                    "public/components/angular-ui-select2/src/select2.js",
                    "public/components/angular-xeditable/dist/js/xeditable.js",
                    "public/js/lib/ng-tags-input.min.js",
                    "public/js/app.js",
                    "public/js/filters.js",
                    "public/js/services.js",
                    "public/js/directives.js",
                    "public/js/controllers/index.js",
                    "public/js/controllers/adjuncts-profile.js",
                    "public/js/controllers/job-profile.js",
                    "public/js/controllers/institutions-profile.js",
                    "public/js/controllers/home.js",
                    "public/js/controllers/basic-profile.js",
                    "public/js/controllers/home.js",
                    "public/js/controllers/confirm-email.js",
                    "public/js/controllers/signup.js",
                    "public/js/controllers/search-results.js",
                    "public/js/controllers/signin.js",
                    "public/js/controllers/jobs.js",
                    "public/js/controllers/contact-us.js",
                    "public/js/controllers/about.js"
                ],
                dest: 'public/dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'public/dist/<%= pkg.name %>.map'
                },
               files: {
                    'public/dist/<%= pkg.name %>.min.js': ['public/dist/<%= pkg.name %>.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // on watch events configure jshint:all to only run on changed file
    grunt.event.on('watch', function (action, filepath) {
        grunt.config('jshint.all.src', filepath);
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify']);

};
