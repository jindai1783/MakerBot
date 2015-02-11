var MakersGithub = require('./makersGithub.js');

function One2One(){
  this.api = new MakersGithub();
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

One2One.prototype.returnResponse = function(data) {
  return data;
}

One2One.prototype.getResponse = function() { 
  return this.getInfo(this.returnResponse);
}


module.exports = One2One;