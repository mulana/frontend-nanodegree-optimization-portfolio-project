module.exports = function(grunt) {
  // Load all Grunt plugins
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Minify JavaScript files
    uglify: {
      my_target: {
        files: {
          'dist/js/perfmatters.js': ['js/perfmatters.js'],
          'dist/views/js/main.js': ['views/js/main.js']
        }
      }
    },
    //Minify CSS files
    cssmin: {
      my_target: {
        files: {
          'dist/css/style.css': ['css/style.css'],
          'dist/css/print.css': ['css/print.css'],
          'dist/views/css/bootstrap-grid.css': ['views/css/bootstrap-grid.css'],
          'dist/views/css/style.css': ['views/css/style.css']
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
                'dist/views/pizza.html': 'views/pizza.html'
            }
        }
    },
    //Minify html document
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          // 'dist/index.html': 'index.html',
          'dist/project-2048.html': 'project-2048.html',
          'dist/project-mobile.html': 'project-mobile.html',
          'dist/project-webperf.html': 'project-webperf.html',
          'dist/views/pizza.html': 'views/pizza.html',
        }
      },
    }
  });
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'inlinecss', 'htmlmin']);

};