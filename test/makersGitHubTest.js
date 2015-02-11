var chai = require('chai');
var phantom = require('phantomjs');
var expect = chai.expect;
var MakersGitHub = require('../makersGitHub.js');

describe('Makers GitHub', function() {

  it('should pass', function() {
    var makers = new MakersGitHub();
    expect(makers.repo).to.not.equal(null);
  });

  it('should read a file from Makers GitHub', function(done) {
    var makers = new MakersGitHub();
    var expectedData;
    makers.readFileInfo('.gitignore', function(data) {
      expectedData = data;
      console.log(expectedData);

      //-------------------------------------------------
      //<1> expect sitting inside this callback, can work
      //-------------------------------------------------
      expect(expectedData).to.contain('DS');

      done();
    });
  });

});

//---------------------------------------------------------------
//<3> We need to let Sam to add makerbots into the course repo!!!
//---------------------------------------------------------------