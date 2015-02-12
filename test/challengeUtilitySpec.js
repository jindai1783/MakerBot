var chai = require('chai');
var expect = chai.expect;
var MakersGitHub = require('../app/makersGitHub.js');
var Challenge = require('../app/challengeUtility.js');

describe('challenge', function() {

  var challenge;

  before(function() {
    challenge = new Challenge(MakersGitHub);
  });

  it('Should return names of challenges', function(done) {
    challenge.getResponse([], function() {
      expect(challenge.translatedData[0].name).to.contain('blocks_procs_lambdas.md');
      done();
    });
  });

  it('Should return names of challenge challengeLibrary', function(done){
    challenge.getResponse([], function(){
      expect(challenge.fileLibrary['blocks_procs_lambdas.md']).to.contain('https://github.com/makersacademy/course/blob/master/challenges/blocks_procs_lambdas.md');
      done();
     });
  });

});