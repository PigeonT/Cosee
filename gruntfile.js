module.exports = function(grunt) {
    grunt.initConfig({
//        pkg:grunt.file.readJSON('package.json'),
        less : {
            complie : {
                files : {
                    'css/style.css' : 'css/style.less'
                }
            }
        },
        watch : {
            less : {
                files : 'css/style.less',
                tasks : 'less'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
}
