function One2One(api){
  this.api = api;
  this.apiData = null;
}

One2One.prototype.getInfo = function() {
  this.apiData = this.api.readFileInfo('.gitignore', function(){console.log(this.apiData)});
};


module.exports = One2One;