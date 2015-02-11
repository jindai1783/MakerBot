var chai = require('chai');
var expect = chai.expect;
var CommandParser = require('../app/CommandParser.js');

describe("Command Parser", function() {

  var commandParser;
  var hash;

  beforeEach(function(){

    var OneToOneDouble = function(arguments) {
      this.arguments = arguments;
    };

    var LecturesDouble = function(arguments) {
      this.arguments = arguments;
    };

    LecturesDouble.prototype.getResponse = function(args) {
         return "https://github.com/makersacademy/course/wiki/Calendar";
    };   

    OneToOneDouble.prototype.getResponse = function(args) {
      if (this.arguments[0] == 'henry') {
        return 'Available';
      }
      return "https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots";
    };



    var utilityHash = { '121': OneToOneDouble,
                    'lectures': LecturesDouble
    }

    commandParser = new CommandParser(utilityHash);
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

  it("return the correct content for the lecture command",  function() {
    commandParser.parse('!bot lectures', function(err, data) {
      expect(data).to.equal('https://github.com/makersacademy/course/wiki/Calendar');
    });
  });

  it("return the root command", function() {
    expect(commandParser._commandStripper('!bot 121 henry')).to.equal('121')
  });
});