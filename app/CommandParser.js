var CommandParser = function(utilitiesHash, utilitiesApiHash) {
  this.utilities     = utilitiesHash;
  this.utilitiesApis = utilitiesApiHash;
};

CommandParser.prototype.parse = function(messageObject) {
  var command     = messageObject.text;
  messageObject.command = this._commandStripper(command);
  messageObject.args    = this._argumentStripper(command);
  console.log(typeof messageObject.args);

  return messageObject;
};

CommandParser.prototype._argumentStripper = function(command) {
  return command.split(" ").slice(2,10);
};

CommandParser.prototype._commandStripper = function(command) {
  return command.split(" ")[1];
};

module.exports = CommandParser;
