var chai         = require('chai');
var expect       = chai.expect;
var WolframAPI = require('../app/wolframUtility.js');

describe("wolframUtility", function() {

  var wolframAPI;

  before(function() {
    wolframAPI = new WolframAPI();
  });

  it("it should return the correct response", function(done) {
    this.timeout(10000);
    wolframAPI.getResponse("What is the airspeed velocity of an unladen swallow?", function(answer) {
      console.log(answer);
      expect(answer).to.contain('25 mph');
      done();
    });
  });

});