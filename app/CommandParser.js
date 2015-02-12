var CommandParser = function(utilitiesHash, utilitiesApiHash) {
  this.utilities     = utilitiesHash;
  this.utilitiesApis = utilitiesApiHash;
};

CommandParser.prototype.parse = function(command, callback) {
  var rootCommand = this._commandStripper(command);
  var arguments   = this._argumentStripper(command);

  if(this.utilities[rootCommand] != null) {
    var responseObject = new this.utilities[rootCommand](this.utilitiesApis[rootCommand]);

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