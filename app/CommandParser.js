var CommandParser = function(utilityHash) {
  this.commands = utilityHash;
};

CommandParser.prototype.parse = function(command, callback) {
  var rootCommand = this._commandStripper(command);
  var arguments = this._argumentStripper(command);

  if(this.commands[rootCommand] != null) {
    var responseObject = new this.commands[rootCommand];
    response = responseObject.getResponse(arguments, function(err, response) {
      callback(null, response);
    });
  } else {
    callback(true);
  }
};

CommandParser.prototype._argumentStripper = function(command) {
  return command.split(" ").slice(2);
};

CommandParser.prototype._commandStripper = function(command) {
  return command.split(" ")[1];
};

module.exports = CommandParser;