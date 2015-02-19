var chai = require('chai');
var expect = chai.expect;
var MakersGitHub = require('../../app/makersGitHub.js');
var Pill = require('../../app/utilities/pillsUtility.js');

describe('pill', function() {

 var pill;

 before(function(){
   pill = new Pill(MakersGitHub);
 });


 it('Should return names of pills', function(done){
    pill.getResponse([], function(){
      expect(pill.translatedData[0].name).to.contain('IoPill.md');
      done();
    });
 });

 it('Should return names of pills pillLibrary', function(done){
    pill.getResponse([], function(){
     expect(pill.fileLibrary['IoPill.md']).to.contain('https://github.com/makersacademy/course/blob/master/pills/IoPill.md');
     done();
    });
 });

});
