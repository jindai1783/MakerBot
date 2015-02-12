var chai = require('chai');
var expect = chai.expect;
var MakersGitHub = require('../app/makersGitHub.js');
var Challenge = require('../app/challengeUtility.js');

describe('challenge', function() {

  var makers, challenges;

  before(function() {
    makers = new MakersGitHub();
    challenge = new Challenge(makers);
  });

  it('Should return names of challenges', function(done) {
    challenge.getResponse([], function() {
      expect(challenge.translatedData[0].name).to.contain('');
      done();
    });
  });



});