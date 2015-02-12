function RepoUtility(){
}

RepoUtility.prototype.getResponse = function(args, callback) {
  var self = this;
  self.getInfo(function() {
    self.translate();
    self.getLibrary();
    callback(null, self.decision(args[0]));
  });
};

RepoUtility.prototype.decision = function(arg) {
  if (arg) {
    return this.fileLibrary[arg];
  } else {
    var keys = Object.keys(this.fileLibrary);
    return keys.join("\n");
  }
};

RepoUtility.prototype.getInfo = function(callback) {
  var self = this;
  this.api.readFileInfo(this.directory, function(err, data) {
    if (err) callback(err);
    self.apiData = data;
    callback(self.apiData);
  });
};

RepoUtility.prototype.translate = function() {
  return this.translatedData = JSON.parse(this.apiData);
};

RepoUtility.prototype.getLibrary = function() {
 var dataSize = this.translatedData.length;
 for(i = 0; i < dataSize; i++) {
   this.fileLibrary[this.translatedData[i].name] = this.translatedData[i].html_url;
 }
 return this.fileLibrary;
};

module.exports = RepoUtility;