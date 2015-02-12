var wolfram = require('wolfram-node').init('UUKEGR-LKX2822GK6');

var WolframAPI = function() {

};

WolframAPI.prototype.getResponse = function(question, callback) {
  var question = question.join(" ");
  this.ask(question, function(err, answer) {
    callback(null, answer);
  });
};

WolframAPI.prototype.ask = function(question, callback) {

  var data = {
    query: question,
    primary: true
  };

  wolfram.ask(data, function(err, results) {
    if(results.$.success === 'false' || err) {
      callback(true, "Sorry, I don't know what you mean.");
    } else {
      callback(null, results.pod[1].subpod[0].plaintext[0]);
    }
  });

};

module.exports = WolframAPI;