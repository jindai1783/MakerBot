var chai = require('chai');
var expect = chai.expect;
var CommandParser = require('../app/CommandParser.js');

describe("Command Parser", function() {

  var commandParser;
  var messageObject;

  beforeEach(function(){
    commandParser = new CommandParser();
    MessageObject = function() {
      this.text = '!mbot 121 henry' 
    }
  });

  it('returns a message object with command attribute set correctly', function() {
    var message = new MessageObject();

    expect(commandParser.parse(message).command).to.eq('121');
  });

  it('returns a message object with arugment attribute set correctly', function() {
    var message = new MessageObject();

    expect(commandParser.parse(message).args[0]).to.eq('henry');
  });

  it("return the root command", function() {
    expect(commandParser._commandStripper('!bot 121 henry')).to.equal('121')
  });











});
