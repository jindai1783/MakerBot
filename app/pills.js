var _ = require('underscore')._;

function Pill(api){
 this.api = api;
 this.apiData = null;
 this.translatedData = null;
 this.pillLibrary = {};
}


Pill.prototype.getResponse = function(args, callback) {
 this.getInfo(function() {
   this.translate(function(data) {
     this.getLibrary(function(data){
       callback(this.decision(args[0]));
     });
   });
 });
};


Pill.prototype.decision = function(arg) {
 if(arg) {
   this.pillLibrary[arg[0]];
 } else {
   this.pillLibrary.keys;
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

Pill.prototype.translate = function(callback) {
 var data = JSON.parse(this.apiData);
 callback(this.translatedData = data);
};

Pill.prototype.getLibrary = function(callback) {
 var dataSize = this.translatedData.length;
 for(i = 0; i < dataSize; i++) {
   this.pillLibrary[this.translatedData[i].name] = this.translatedData[i].html_url;
 }
 callback(this.pillLibrary);
}

module.exports = Pill;
