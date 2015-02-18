var RepoUtility = require('./repoUtility.js');

function Challenge(api) {
  this.api = new api();
  this.apiData = null;
  this.translatedData = null;
  this.fileLibrary = {};
  this.directory = 'challenges';

  RepoUtility.call(this);
}

Challenge.prototype = Object.create(RepoUtility.prototype);
Challenge.prototype.constructor = Challenge;

module.exports = Challenge;
