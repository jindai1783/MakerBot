
var TalksUtility = function() {};

TalksUtility.prototype.nextEvent = function() {
  return 'Bot Party';
};

TalksUtility.prototype.getResponse = function(args) {
  return 'The next event will be Bot Party'
};

module.exports = TalksUtility;