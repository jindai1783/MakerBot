var chai = require('chai');
var expect = chai.expect;
var Student = require('../app/utilities/studentUtility.js');

describe('student', function() {

  var student;

  before(function() {
    student = new Student();
  });

  it('Should give the names of all students at Makers', function() {
    student.getResponse([], function(err, data) {
      expect(data).to.contain('Ptolemy');
    });
  });

  it('Should return the quote from Ptolemy', function() {
    student.getResponse(['Ptolemy'], function(err, data) {
      expect(data).to.contain('a');
    });
  });

});
