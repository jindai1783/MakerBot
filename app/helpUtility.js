var commands = require('./config/commands');

var HelpUtility = function() {


};

HelpUtility.prototype.getResponse = function(args, callback) {

  callback(null, Object.keys(commands).join('\n'));

};

module.exports = HelpUtility;