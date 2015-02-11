var slackbot = require('node-slackbot');
var bot = new slackbot('xoxb-3664957276-x4H5juXjVNiHKheMYsz1VdHa');

var One2One       = require('./One2One.js');
var commandParser = require('./commandParser');

var utilityHash = { '121': One2One }
var commandEngine = new commandParser(utilityHash);

bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {
  if ("message" === message.type) {
    commandEngine.parse(message.text, function(err, content) {
      console.log(content);
      bot.sendMessage(message.channel, content);
    });
  };
});

bot.connect();
