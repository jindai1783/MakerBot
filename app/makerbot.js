var slackbot      = require('node-slackbot');
var bot           = new slackbot('xoxb-3664957276-x4H5juXjVNiHKheMYsz1VdHa');
var commandParser = require('./commandParser');

var One2One       = require('./One2One.js');
var One2OneApi    = require('./makersGithub.js');

var WolframUtility  = require('./wolframUtility');
var TalksUtility    = require('./talksUtility');
var MakersGithub    = require('./makersGithub');
var TalksUtilityApi = require('public-google-calendar');
var PillsUtility    = require('./pillsUtility');

var utilityHash   = { '121': One2One, 'talks' : TalksUtility, 'q' : WolframUtility, 'pills' : PillsUtility }

var utilitiesApis = { '121': One2OneApi, 'talks' : TalksUtilityApi, 'pills' : MakersGithub }

var commandEngine = new commandParser(utilityHash, utilitiesApis);

bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {
  if (("message" === message.type) && (message.text.substring(0,5) === 'mbot ')) {
    commandEngine.parse(message.text, function(err, content) {
      console.log(content);
      bot.sendMessage(message.channel, content);
    });
  };
});

bot.connect();

