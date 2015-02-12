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
  console.log('hello');
    pill.getResponse([], function(){
      // console.log('hello2');
      // // console.log(pill.apiData);
      // expect(pill.translatedData).to.contain('IoPill.md');
      // console.log('hello after expect');
      // done();
      // console.log('hello after done');
    }); 
  console.log('hello outside pill response');
 });

 it('Should return names of pills pillLibrary', function(done){
    pill.getResponse([], function(){
     expect(pill.pillLibrary).to.contain('IoPill.md');
     done();
    }); 
 });

});
 







