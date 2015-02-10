// var CommandParser = require('../src/CommandParser.js');

describe("Command Parser", function() {

  var commandParser;

  beforeEach(function(){
    commandParser = new CommandParser();
  });

  it("it should return the correct content for the 121 command", function() {
    commandParser.parse('!bot 121', function(data) {
      expect(data).toEqual('https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots');
    });
  });

});