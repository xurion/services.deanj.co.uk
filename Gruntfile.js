module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                files: {
                    'js/compiled/main.min.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                        'bower_components/jquery-easing-original/jquery.easing.js',
                        'bower_components/jqBootstrapValidation/src/jqBootstrapValidation.js',
                        'bower_components/classie/classie.js',
                        'js/third-party/cbpAnimatedHeader.js',
                        'js/src/contact.js',
                        'js/src/main.js'
                    ]
                }
            }
        },
        less: {
            main: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            }
        },
        copy: {
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/font-awesome/fonts',
                    src: ['*'],
                    dest: 'fonts/',
                    filter: 'isFile'
                }]
            },
            libs: {
                files: [{
                    expand: true,
                    cwd: 'bower_components',
                    src: [
                        'html5shiv/dist/html5shiv.min.js',
                        'respond/dest/respond.min.js'
                    ],
                    dest: 'js/',
                    filter: 'isFile',
                    flatten: true
                }]
            }
        },
        lesshint: {

            options: {

                lesshintrc: true
            },
            main: {

                src: 'less/**/*.less'
            }
        },
        jshint: {

            options: {

                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'js/src/**/*.js'
            ]
        },
        jscs: {

            main: {

                files: {

                    src: [
                        'Gruntfile.js',
                        'js/src/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-lesshint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('default', ['jscs', 'lesshint', 'uglify', 'less', 'copy']);

};
