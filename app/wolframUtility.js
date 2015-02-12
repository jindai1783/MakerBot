var wolfram = require('wolfram-node').init('UUKEGR-LKX2822GK6');

var WolframAPI = function() {

};

WolframAPI.prototype.getResponse = function(question, callback) {

  var data = {
      query: question,
      primary: true
  };

  wolfram.ask(data, function(err, results) {
    if(err) {
      err;
    }
    if (results.pod[1].subpod[0].plaintext[0] === null) {
      return callback("I couldn't find that.");
    } else {
      return callback(results.pod[1].subpod[0].plaintext[0]);
    }
  });

};

module.exports = WolframAPI;