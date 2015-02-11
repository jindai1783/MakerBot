var chai = require('chai');
var expect = chai.expect;
var TalksUtility = require('../app/talksUtility.js')

describe('Talks Utility', function() {

  var talksUtility;

  before(function() {
    talksUtility = new TalksUtility();
  });

  it('returns the next event', function() {
    expect(talksUtility.getResponse(['next'])).to.equal('The next event will be Bot Party');
  });
});