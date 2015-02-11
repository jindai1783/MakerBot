function One2One(api){
  this.api = api;
  this.apiData = null;
}

One2One.prototype.getInfo = function(callback) {
  
  this.api.readFileInfo('.gitignore', function(err, data){
    if(err) {
      callback(err);
    }
    this.apiData = data;
    callback(this.apiData);
  });

};


module.exports = One2One;