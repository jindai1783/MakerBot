var One2One         = require('../one2OneUtility.js');
var TalksUtility    = require('../talksUtility');
var WolframUtility  = require('../wolframUtility');
var PillsUtility    = require('../pillsUtility');

var commands   = { '121': One2One,
                   'talks' : TalksUtility,
                   'q' : WolframUtility,
                   'pills' : PillsUtility
                  }

module.exports = commands;