var chai = require('chai');
var expect = chai.expect;
var Jokes = require('../../app/utilities/jokesUtility.js');

describe('Jokes', function() {
  it('should return a joke',function(){
    joke = new Jokes();
    joke.getResponse([], function(err, data){
      expect(data).to.contain('knock')
    });
  });

});
