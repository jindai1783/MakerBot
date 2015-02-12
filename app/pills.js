var _ = require('underscore')._;

function Pill(api){
  this.api = api;
  this.apiData = null;
  this.translatedData = null;
  this.sanitizedData = [];
}

Pill.prototype.getResponse = function(callback) {
  var self = this;
    this.getInfo(function(){
      self.translate(function(data){
        callback(data);
      });
    });
};

Pill.prototype.getInfo = function(callback) {
  var self = this;
  this.api.readFileInfo('pills', function(err, data){
    if(err) {
      callback(err);
    }
    self.apiData = data
     callback(self.apiData);
  });

};

Pill.prototype.translate = function(callback) {
  var data = 'derp';
  console.log(this.apiData);
  console.log(this.apiData.length);
  callback(this.translatedData = data);
};

// Pill.prototype.getSanitizedData = function(callback) {
//   var dataSize = this.translatedData.length;
//   for(i=0; i < dataSize; i++){

//     this.sanitizedData.push(this.translatedData[i].slice(1, -1));
//   };
//   console.log(this.sanitizedData);
//   callback(this.sanitizedData);
// };


module.exports = Pill;