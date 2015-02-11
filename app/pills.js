function Pill(api){
  this.api = api;
  this.apiData = null;
  this.translatedData = null;
}

// Pill.prototype.getResponse = function() {
//   return this.getInfo(this.translate);
// };

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
  this.translatedData = this.apiData.match(/\[(.*?)\]/g);
  callback(this.translatedData)
};


module.exports = Pill;