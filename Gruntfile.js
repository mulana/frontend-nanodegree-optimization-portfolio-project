module.exports = function(grunt) {
  // Load all plugin that provides.
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      }
    },
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'small',
            width: 320,
            height: 240
            },{
            name: 'medium',
            width: 500
            },{
            name: 'large',
            width: 800
            },{
            name: "large",
            width: 1600,
            separator: "-",
            suffix: "_x2",
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'img/',
          dest: 'src/img'
        }]
      }
    }
  });
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'responsive_images']);

};