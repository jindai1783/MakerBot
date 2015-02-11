var CommandParser = function() {

  this.commands = { '!bot 121': "https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots",
                    '!bot lectures': 'https://github.com/makersacademy/course/wiki/Calendar'
  }

};

// CommandParser.prototype._argumentParser = function(command, callback) {


// };

CommandParser.prototype.parse = function(command, callback) {
  // var command = argumentStripper(command);
  // var arguments= commandStripper(command); // return arguments in array

  if(this.commands[command] != null) {
    var response = this.commands[command];
    callback(null, response);
  } else {
    callback(true);
  }
};

module.exports = CommandParser;