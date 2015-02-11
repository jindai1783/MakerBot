var CommandParser = function(hash) {

  this.commands = hash;

};

// CommandParser.prototype._argumentParser = function(command, callback) {


// };

CommandParser.prototype.parse = function(command, callback) {
  // var command = argumentStripper(command);
  // var arguments= commandStripper(command); // return arguments in array

  if(this.commands[command] != null) {
    var responseObject = new this.commands[command];
    response = responseObject.getResponse();
    callback(null, response);
  } else {
    callback(true);
  }
};

module.exports = CommandParser;