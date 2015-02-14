var slackbot      = require('node-slackbot');
var bot           = new slackbot('xoxb-3664957276-x4H5juXjVNiHKheMYsz1VdHa');
var commandParser = require('./commandParser');

var commandLibrary = require('./config/commands');
var utilitiesApis = require('./config/apis');

var commandEngine = new commandParser(commandLibrary, utilitiesApis);

bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {
  if (("message" === message.type) && (message.text != undefined) && (message.text.substring(0,5) === 'mbot ')) {
    commandEngine.parse(message.text, function(err, content) {
      console.log(content);
      bot.sendMessage(message.channel, content);
    });
  }
});



bot.connect();

