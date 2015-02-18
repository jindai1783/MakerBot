var One2One           = require('../utilities/one2OneUtility.js');
var TalksUtility      = require('../utilities/talksUtility');
var WolframUtility    = require('../utilities/wolframUtility');
var PillsUtility      = require('../utilities/pillsUtility');
var ChallengeUtility  = require('../utilities/challengeUtility');
var JokesUtility      = require('../utilities/jokesUtility');
var LunchUtility      = require('../utilities/lunchUtility');
var StudentUtility    = require('../utilities/studentUtility');
var HelpUtility       = require('../utilities/helpUtility');


var commands   = { '121'        : One2One,
                   'talks'      : TalksUtility,
                   'q'          : WolframUtility,
                   'pills'      : PillsUtility,
                   'challenges' : ChallengeUtility,
                   'knockknock' : JokesUtility,
                   'lunch'      : LunchUtility,
                   'students'    : StudentUtility,
                   'help'       : HelpUtility
                  }

module.exports = commands;
