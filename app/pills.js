var _ = require('underscore')._;

function Pill(api){
  this.api = api;
  this.apiData = null;
  this.translatedData = null;
  this.sanitizedData = null;
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
  this.api.readFileInfo('pills.md', function(err, data){
    if(err) {
      callback(err);
    }
    self.apiData = data
     callback(self.apiData);
  });

};

Pill.prototype.translate = function(callback) {
  var data = this.apiData.match(/\[(.*?)\]/g);
  callback(this.translatedData = data);
};

Pill.prototype.linkGenerator = function(callback) {
  console.log(this.translatedData);
  var dataSize = this.translatedData.length;
  for(i=0; i < dataSize; i++){
    console.log('hello');
    console.log(i);
  };
  callback(this.sanitizedData);
};


module.exports = Pill;