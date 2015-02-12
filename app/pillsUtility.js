var _ = require('underscore')._;

function Pill(api){
 this.api = new api();
 this.apiData = null;
 this.translatedData = null;
 this.pillLibrary = {};
}


Pill.prototype.getResponse = function(args, callback) {
  var self = this;
  self.getInfo(function() {
    self.translate();
    self.getLibrary();
    callback(null, self.decision(args[0]));
  });
};

Pill.prototype.decision = function(arg) {
  if(arg) {
   return this.pillLibrary[arg];
  } else {
   var keys = Object.keys(this.pillLibrary)
   return keys.join("\n");
  }
};

Pill.prototype.getInfo = function(callback) {
 var self = this;
 this.api.readFileInfo('pills', function(err, data){
   if(err) callback(err);
   self.apiData = data;
   callback(self.apiData);
 });
};

Pill.prototype.translate = function() {
 return this.translatedData = JSON.parse(this.apiData);
};

Pill.prototype.getLibrary = function() {
 var dataSize = this.translatedData.length;
 for(i = 0; i < dataSize; i++) {
   this.pillLibrary[this.translatedData[i].name] = this.translatedData[i].html_url;
 }
 return this.pillLibrary;
};



module.exports = Pill;
