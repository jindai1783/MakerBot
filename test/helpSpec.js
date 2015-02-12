var commandsFile = require('../app/config/commands');
var HelpUtility = require('../app/helpUtility');
var chai = require('chai');
var expect = chai.expect;


describe("Help", function() {

  it("should return a list of the commands", function(done) {
    var helpUtility = new HelpUtility();
    helpUtility.getResponse(null, function(err, commands) {
      console.log(commands);
      expect(commands).to.equal(Object.keys(commandsFile).join('\n'));
      done();
    });
  });

});