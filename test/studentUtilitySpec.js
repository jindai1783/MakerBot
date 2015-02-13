var chai = require('chai');
var expect = chai.expect;
var Student = require('../app/studentUtility.js');

describe('student', function() {

  var student;

  before(function() {
    student = new Student();
  });

  it('Should give the names of all students at Makers', function() {
    expect(student.getResponse([])).to.contain('Ptolemy');
  });

  it('Should return the quote from Ptolemy', function() {
    expect(student.getResponse(['Ptolemy'])).to.contain('a');
  });

});