var slackbot = require('node-slackbot');
var bot = new slackbot('xoxb-3664957276-x4H5juXjVNiHKheMYsz1VdHa');

var commandParser = require('./commandParser');

var utilityHash = {}

var commandEngine = new commandParser(utilityHash);

bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {
  if (("message" === message.type) && (message.text.substring(0,5) === 'mbot ')) {
    commandEngine.parse(message.text, function(err, content) {
      bot.sendMessage(message.channel, content);
    });
  };
});

bot.connect();

