var One2OneApi      = require('../makersGithub.js');
var TalksUtilityApi = require('public-google-calendar');
var MakersGithub    = require('../makersGithub');


var utilitiesApis = { '121'       : One2OneApi,
                      'talks'     : TalksUtilityApi,
                      'pills'     : MakersGithub,
                      'challenge' : MakersGithub
                    }

module.exports = utilitiesApis;