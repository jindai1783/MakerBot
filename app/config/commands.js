var One2One           = require('../one2OneUtility.js');
var TalksUtility      = require('../talksUtility');
var WolframUtility    = require('../wolframUtility');
var PillsUtility      = require('../pillsUtility');
var ChallengeUtility  = require('../challengeUtility');
var JokesUtility      = require('../jokesUtility');
var LunchUtility     = require('../lunchUtility');  


var commands   = { '121'        : One2One,
                   'talks'      : TalksUtility,
                   'q'          : WolframUtility,
                   'pills'      : PillsUtility,
                   'challenges' : ChallengeUtility,
                   'knockknock' : JokesUtility,
                   'lunch'      : LunchUtility
                  }

module.exports = commands;