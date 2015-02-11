var MakersGitHub = require('../makersGitHub.js');
var One2One = require('../One2One.js');


describe('One2One', function() {

  var makers, one2one;

  before(function(){
    makers = new MakersGitHub();
    one2one = new One2One(makers);
  });

  it('it should be initialized with an API', function() {
    expect(one2one.api).to.equal(makers);;
  });

  it('should be able to get info from github', function(){
    one2one.getInfo(function(data) {
      expect(data).to.contain('Store');
      done();
    })
  });
});