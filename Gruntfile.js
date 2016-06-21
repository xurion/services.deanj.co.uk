module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'js/main.js',
                dest: 'js/main.min.js'
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
                    cwd: 'font-awesome/fonts',
                    src: ['*'],
                    dest: 'fonts/',
                    filter: 'isFile'
                }]
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'less', 'copy']);

};