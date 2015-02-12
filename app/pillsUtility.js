var _ = require('underscore')._;

function Pill(api){
 this.api = api;
 this.apiData = null;
 this.translatedData = null;
 this.pillLibrary = {};
}


Pill.prototype.getResponse = function(args, callback) {
  var self = this; 
 self.getInfo(function() {
    self.translate();
    self.getLibrary();
    callback(self.decision(args[0]));
 });
};

Pill.prototype.decision = function(arg) {
 if(arg) {
   return this.pillLibrary[arg];
 } else {
   return Object.keys(this.pillLibrary);
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
