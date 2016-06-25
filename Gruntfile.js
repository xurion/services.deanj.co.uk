module.exports = function(grunt) {

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
                        'js/src/cbpAnimatedHeader.js',
                        'js/src/contact.js',
                        'js/src/main.js'
                    ]
                }
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "css/main.min.css": "less/main.less"
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'less', 'copy']);

};