var _ = require('underscore')._;

function Pill(api){
  this.api = api;
  this.apiData = null;
  this.translatedData = null;
  this.pillNames = [];
  this.pillLinks
}

Pill.prototype.getResponse = function(name, callback) {
  var self = this;
    this.getInfo(function(){
      self.translate(function(data){
        callback(data);
      });
    });
};

Pill.prototype.getInfo = function(callback) {
  var self = this;
  this.api. readFileInfo('pills', function(err, data){
    if(err) {
      callback(err);
    }
    self.apiData = data
     callback(self.apiData);
  });

};

Pill.prototype.translate = function(callback) {
  var data = JSON.parse(this.apiData);
  callback(this.translatedData = data);
};

Pill.prototype.getNames = function(callback) {
  var dataSize = this.translatedData.length
  for(i=0; i<dataSize; i++){
    this.pillNames.push(this.translatedData[i].name)
  };
  callback(this.pillNames)
};

Pill.prototype.getLinks = function(callback) {
  var dataSize = this.translatedData.length
  for(i=0; i<dataSize; i++){
    this.pillNames.push(this.translatedData[i].html_url)
  };
  callback(this.pillNames)
};


module.exports = Pill;