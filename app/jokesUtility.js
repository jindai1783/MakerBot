var knockknock = require('knock-knock-jokes')
 
function Jokes(){
}

Jokes.prototype.getResponse = function(args, callback) {
  callback(null, knockknock())
};

module.exports = Jokes;