function Pill(api){
 this.api = api;
 this.apiData = null;
 this.translatedData = null;
 this.library = {};
}


Pill.prototype.getResponse = function(args, callback) {
  var self = this; 
 self.getInfo(function() {
    self.translate();
    self.library();
    callback(self.decision(args[0]));
 });
};

Pill.prototype.decision = function(arg) {
 if(arg) {
   return this.library[arg];
 } else {
   return Object.keys(this.library);
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
   this.library[this.translatedData[i].name] = this.translatedData[i].html_url;
 }
 return this.library;
};



module.exports = Pill;
