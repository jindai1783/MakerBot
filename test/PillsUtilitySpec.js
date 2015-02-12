var chai = require('chai');
var expect = chai.expect;
var MakersGitHub = require('../app/makersGitHub.js');
var Pill = require('../app/pillsUtility.js');

describe('pill', function() {

 var makers, pill;

 before(function(){
   makers = new MakersGitHub();
   pill = new Pill(makers);
 });


 it('Should return names of pills', function(done){
    pill.getResponse([], function(){
      expect(pill.translatedData[0].name).to.contain('IoPill.md');
      done();
    });
 });

 it('Should return names of pills pillLibrary', function(done){
    pill.getResponse([], function(){
     expect(pill.pillLibrary['IoPill.md']).to.contain('https://github.com/makersacademy/course/blob/master/pills/IoPill.md');
     done();
    });
 });

});








