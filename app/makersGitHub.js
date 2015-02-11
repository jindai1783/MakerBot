var Github = require('github-api');
var github = new Github({
  token: process.env.MAKERBOT_TOKEN,
  auth: "oauth"
});



function MakersGitHub(){
  this.repo = github.getRepo('makersacademy', 'course');
}

MakersGitHub.prototype.readFileInfo = function(fileName, callback) {
  
  this.repo.read('master', fileName, function(err, data) {
    if (err) throw err;
    if (callback){
      callback(data)
    }else{
      return data
    };
  });
};

module.exports = MakersGitHub;