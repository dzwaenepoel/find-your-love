module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev 
  
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
      sass: {
        options: {
          noCache:true
        },
        dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
          }
      },

      minified: {
        files: {
          src: [
           'src/js/*.js'
          ],
            dest: 'js/'
          },
            options : {
              sourcemap: false,
              allinone: false
          }
      },
      watch: {
        scripts: {
          files: ['**/*.js'],
          tasks: ['minified'],
          options: {
            spawn: false,
          },
        },
        sass:{
          files: ['**/*.scss'],
          tasks: ['sass'],
          options: {
          spawn: false,
        },
        }
      },

     



    });


    grunt.registerTask('default', ['watch']);
}