var MakersGithub = require('./makersGithub.js');

function One2One(api){
  this.api = new api();
  this.apiData = null;
}

One2One.prototype.getResponse = function(args, callback) {

  this.api.readFileInfo('.gitignore', function(err, data){
    if(err) {
      callback(err);
    }
    this.apiData = data;
    callback(err, this.apiData);
  });

};


module.exports = One2One;