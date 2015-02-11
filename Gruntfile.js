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
    },
    jshint: {
      all: ['test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['mocha_casperjs']);
  grunt.registerTask('run_jshint',  ['jshint']);
  grunt.registerTask('jasmine', ['jasmine_node']);
};
