module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {},
      files: {
        src: ['test/features/**/*.js']
      }
    },
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['test/spec/']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['mocha_casperjs']);
  grunt.registerTask('jasmine', ['jasmine_node']);
};