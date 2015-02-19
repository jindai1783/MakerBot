var chai = require('chai');
var expect = chai.expect;
var One2One = require('../../app/utilities/one2OneUtility');

describe('One2One', function() {

  it("return the link for the 121", function(done) {
    var one2One = new One2One();
    one2One.getResponse(null, function(err, answer) {
      expect(answer).to.contain("https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots");
      done();
    });
  });

});
