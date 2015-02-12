var chai = require('chai');
var expect = chai.expect;
var MakersGitHub = require('../app/makersGitHub.js');
var Pill = require('../app/pills.js');

describe('pill', function() {

 var makers, pill;

 before(function(){
   makers = new MakersGitHub();
   pill = new Pill(makers);
 });

 it('it should be initialized with an API', function() {
   expect(pill.api).to.equal(makers);
 });

 
 it('should receive info from API', function(done) { 
   pill.getInfo(function(data) {
     expect(data).to.contain('IoPill.md');
     done(); 
   });   
 });

 it('translate data', function(done) {
   pill.getInfo(function(){
     pill.translate();
     expect(data[0].name).to.contain('IoPill.md');
     done(); 
    });
 });


 it('it should make good decision', function(done) {
   pill.getResponse(function(data){
     expect(pill.decision(['strings.md']).to.contain('https://github.com/makersacademy/course/blob/master/pills/strings.md'));
     done();
   });
 });
});

