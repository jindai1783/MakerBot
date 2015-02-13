var One2One           = require('../one2OneUtility.js');
var TalksUtility      = require('../talksUtility');
var WolframUtility    = require('../wolframUtility');
var PillsUtility      = require('../pillsUtility');
var ChallengeUtility  = require('../challengeUtility');
var JokesUtility      = require('../jokesUtility');
var LunchUtility      = require('../lunchUtility');
var StudentUtility    = require('../studentUtility');
var HelpUtility       = require('../helpUtility');


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