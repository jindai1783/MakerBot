function Pill(api){
  this.api = api;
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
     callback(data);
  });

};

Pill.prototype.translate = function(callback) {
  var translated = this.apiData.match(/\[(.*?)\]/g);
  callback(translated);
};


module.exports = Pill;