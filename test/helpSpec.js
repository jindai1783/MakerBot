var commandsFile = require('../app/config/commandsList');
var HelpUtility = require('../app/helpUtility');
var chai = require('chai');
var expect = chai.expect;


describe("Help", function() {

  it("should return a list of the commands", function(done) {
    var newCommands = commandsFile.map(function(command) {
      return 'You can say: mbot ' + command;
    });

    var helpUtility = new HelpUtility();
    helpUtility.getResponse(null, function(err, commands) {
      expect(commands).to.equal(newCommands.join('\n'));
      done();
    });
  });

});