var chai = require('chai');
var expect = chai.expect;
var CommandParser = require('../app/CommandParser.js');

describe("Command Parser", function() {

  var commandParser;

  beforeEach(function(){
    commandParser = new CommandParser();
  });

  it("it should return the correct content for the 121 command", function() {
    commandParser.parse('!bot 121', function(err, data) {
      expect(data).to.equal('https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots');
    });
  });

  it("it should return the correct content for the calendar command",  function() {
    commandParser.parse('!bot lectures', function(err, data) {
      expect(data).to.equal('https://github.com/makersacademy/course/wiki/Calendar');
    });
  });

});