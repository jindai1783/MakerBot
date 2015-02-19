module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['test/spec/']
    },
    jshint: {
      all: ['test/**/*.js']
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['test/**/*.js']
      }
    }  
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['mochaTest']);
  grunt.registerTask('run_jshint',  ['jshint']);
  grunt.registerTask('jasmine', ['jasmine_node']);
};
