function One2One(api){
  this.api = api;
  this.data = null;
}

One2One.prototype.getInfo = function() {
  this.api.readFileInfo('.gitignore', function(data){
    this.data = data;
  });
};

module.exports = One2One;