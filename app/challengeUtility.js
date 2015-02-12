function Challenge(api) {
  this.api = new api();
  this.apiData = null;
  this.translatedDate = null;
  this.challengeLibrary = {};
}

Challenge.prototype.getResponse = function(args, callback) {
  var self = this;
  self.getInfo(function() {
    self.translate();
    self.getLibrary();
    callback(null, self.decision(args[0]));
  });
};

Challenge.prototype.decision = function(arg) {
  if(arg) {
    return this.challengeLibrary[arg];
  } else {
    var keys = Object.keys(this.challengeLibrary);
    return keys.join("\n");
  }
};

Challenge.prototype.getInfo = function(callback) {
  var self = this;
  this.api.readFileInfo('challenges', function(err, data) {
    if (err) callback(err);
    self.apiData = data;
    callback(self.apiData);
  });
};

Challenge.prototype.translate = function() {
  return this.translatedData = JSON.parse(this.apiData);
};

Challenge.prototype.getLibrary = function() {
  var dataSize = this.translatedData.length;
  for (i = 0; i < dataSize; i++) {
    this.challengeLibrary[this.translatedData[i].name] = this.translatedData[i].html_url;
  }
  return this.challengeLibrary;
};

module.exports = Challenge;