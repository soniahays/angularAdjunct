/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['public/js/libs/tinypubsub/jquery.ba-tinypubsub.js',
                    'public/js/libs/slickgrid/jquery.event.drag-2.0.min.js',
                    'public/js/libs/slickgrid/slick.core.js',
                    'public/js/libs/slickgrid/slick.rowselectionmodel.js',
                    'public/js/libs/slickgrid/slick.grid.js',
                    'public/js/common/card-games.common.namespace.js',
                    'public/js/common/card-games.common.constants.js',
                    'public/js/common/card-games.common.utils.js',
                    'public/js/common/card-games.common.socket-manager.js',
                    'public/js/common/card-games.common.lobby.js',
                    'public/js/common/card-games.common.game.js'],
                dest: 'public/dist/<%= pkg.name %>.js'
            }
        },
        min: {
            dist: {
                src: ['public/dist/<%= pkg.name %>.js'],
                dest: 'public/dist/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['public/js/**/*.js'],
                tasks: ['jshint', 'concat', 'min'],
                options: {
                    spawn: false
                }
            }
        },
        jshint: {
            all: {
                src: ['public/js/**/*.js']
            }
        }
    });

    // on watch events configure jshint:all to only run on changed file
    grunt.event.on('watch', function (action, filepath) {
        grunt.config('jshint.all.src', filepath);
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['concat', 'min']);

};
