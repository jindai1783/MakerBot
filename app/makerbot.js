var slackbot      = require('node-slackbot');
var commandParser = require('./commandParser');

var bot           = new slackbot('xoxb-3664957276-x4H5juXjVNiHKheMYsz1VdHa', 
                                  commandParser);

var commandLibrary = require('./config/commands');
var utilitiesApis  = require('./config/apis');


bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {
  if (('message' === message.type) && (message.command != undefined)) {
  }
  cb();
});

bot.connect();

