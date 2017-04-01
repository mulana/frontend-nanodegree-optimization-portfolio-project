module.exports = function(grunt) {
  // Load all Grunt plugins
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Minify JavaScript files
    uglify: {
      build: {
        src: 'js/perfmatters.js',
        dest: 'dist/js/perfmatters.min.js'
      },
      build: {
        src: 'views/js/main.js',
        dest: 'dist/views/js/main.min.js'
      }
    },
    //Minify CSS files
    cssmin: {
      my_target: {
        files: {
          'dist/css/style.min.css': ['css/style.css'],
          'dist/css/print.min.css': ['css/print.css'],
          'dist/views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
          'dist/views/css/style.min.css': ['views/css/style.css']
        }
      }
    },
    //Minify images
    imagemin: {
      dist: {
        options: {
          optimizeationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'img',
          src: ['*.{png,jpg,gif}'],
          dest: 'dist/img/'
        },
        {
          expand: true,
          cwd: 'views/images',
          src: ['*.{png,jpg,gif}'],
          dest: 'dist/views/images/'
        }]
      }
    },
    //Inline CSS into html
    inlinecss: {
        main: {
            files: {
                'dist/index.html': 'index.html',
                // 'dist/views/pizza.html': 'views/pizza.html'
            }
        }
    }
  });
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'inlinecss']);

};