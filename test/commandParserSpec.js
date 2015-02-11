var chai = require('chai');
var expect = chai.expect;
var CommandParser = require('../app/CommandParser.js');

describe("Command Parser", function() {

  var commandParser;
  var hash;

  beforeEach(function(){

    var OneToOneDouble = function() {
    };

    OneToOneDouble.prototype.getResponse = function(args) {
        return "https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots"
    };

    hash = { '!bot 121': OneToOneDouble,
             '!bot lectures': 'https://github.com/makersacademy/course/wiki/Calendar'
    }

    commandParser = new CommandParser(hash);
  });

  it("return the correct content for the 121 command", function() {
    commandParser.parse('!bot 121', function(err, data) {
      expect(data).to.equal('https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots');
    });
  });

   it("return the correct content when an argument is used", function() {
    commandParser.parse('!bot 121 henry', function(err,data) {
      expect(data).to.equal('Available');
    });
  });

  it("return the correct content for the calendar command",  function() {
    commandParser.parse('!bot lectures', function(err, data) {
      expect(data).to.equal('https://github.com/makersacademy/course/wiki/Calendar');
    });
  });



});