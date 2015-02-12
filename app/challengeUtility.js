function Challenge(api) {
  this.api = api;
  this.apiData = null;
  this.translatedDate = null;
  this.challengeLibrary = {};
}

Challenge.prototype.getResponse = function(args, callback) {
  var self = this;
  self.getInfo(function() {
    self.translate();
    self.getLibrary();
  });
}