var chai         = require('chai');
var expect       = chai.expect;
var WolframAPI = require('../../app/utilities/wolframUtility.js');

describe("wolframUtility", function() {

  var wolframAPI;

  before(function() {
    wolframAPI = new WolframAPI();
  });

  it("return the correct response", function(done) {
    this.timeout(10000);
    wolframAPI.getResponse("What is the airspeed velocity of an unladen swallow?".split(" "), function(err, answer) {
      expect(answer).to.contain('25 mph');
      done();
    });
  });

  it("return an error if no question is provided", function(done) {
    this.timeout(10000);
    wolframAPI.getResponse([], function(err, answer) {
      expect(answer).to.contain("Please ask a question e.g. 'mbot q \'How much does the earth weigh?\''");
      done();
    });
  });

});
