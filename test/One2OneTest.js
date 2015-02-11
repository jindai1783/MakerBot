
var chai = require('chai');
var expect = chai.expect;
var MakersGitHub = require('../app/makersGitHub.js');
var One2One = require('../app/One2One.js');


describe('One2One', function() {

  var makers, one2one;

  before(function(){
    makers = new MakersGitHub();
    one2one = new One2One(makers);
  });

  it('it should be initialized with an API', function() {
    expect(one2one.api).to.equal(makers);
  });

  
  it('should receive info from API', function(done) {
    one2one.getInfo(function(data) {
      console.log(data);
      expect(data).to.contain('.DS_Store');
      done();
    });  
  });

});