var RepoUtility = require('./repoUtility.js');

function Pill(api) {
  this.api = new api();
  this.apiData = null;
  this.translatedData = null;
  this.fileLibrary = {};
  this.directory = 'pills';

  RepoUtility.call(this);
}

Pill.prototype = Object.create(RepoUtility.prototype);
Pill.prototype.constructor = Pill;

module.exports = Pill;

