I am MakerBot

## Tutorial

There was a major bug in async mocha testing at a stage. This is resolved, and the solution is written here in the test file and main file:

```javascript
var chai = require('chai');
var phantom = require('phantomjs');
var expect = chai.expect;
var MakersGitHub = require('../makersGitHub.js');

describe('Makers GitHub', function() {

  it('should pass', function() {
    var makers = new MakersGitHub();
    expect(makers.repo).to.not.equal(null);
  });

  it('should read a file from Makers GitHub', function(done) {
    var makers = new MakersGitHub();
    var expectedData;
    makers.readFileInfo('.gitignore', function(data) {
      expectedData = data;
      console.log(expectedData);

      //-------------------------------------------------
      //<1> expect sitting inside this callback, can work
      //-------------------------------------------------
      expect(expectedData).to.contain('DS');

      done();
    });
  });

});

//---------------------------------------------------------------
//<3> We need to let Sam to add makerbots into the course repo!!!
//---------------------------------------------------------------
```

```javascript
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
```