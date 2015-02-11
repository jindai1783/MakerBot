//---------------------------------------------------------------
//<4> Check the username, is it mis-spelled as "makersbot"? Yeah?
//---------------------------------------------------------------

// var Github = require('github-api');
// var github = new Github({
//   username: "makerbots",
//   password: '1qwerty',
//   auth: "basic"
// });

//----------------------------------------
//<5> Remember to RETYPE the password here
//----------------------------------------
var Github = require('github-api'); var github = new Github({username: "jindai1783",password: "xxxxxxxxxxxx",auth: "basic"});

//----------------------------------------------------------------
//<2> Private Repo issue - makerbots cannot access PRIVATE course
//    You can try to run on terminal - the data will be 'NULL'!!!
//----------------------------------------------------------------

function MakersGitHub(){
  this.repo = github.getRepo('makersacademy', 'course');
}

MakersGitHub.prototype.readFileInfo = function(fileName, callback) {
  
  this.repo.read('master', fileName, function(err, data) {
    if (err) throw err;
    callback(data);
  });
};

module.exports = MakersGitHub;