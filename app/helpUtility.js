var commands = require('./config/commandsList');

var HelpUtility = function() {


};

HelpUtility.prototype.getResponse = function(args, callback) {

  var newCommands = commands.map(function(command) {
    return 'You can say: mbot ' + command;
  });

  callback(null, newCommands.join('\n'));

};

module.exports = HelpUtility;