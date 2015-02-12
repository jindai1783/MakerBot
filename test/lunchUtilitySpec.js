var chai = require('chai');
var expect = chai.expect;
var Lunch = require('../app/lunchUtility.js');

describe('Lunch', function() {

 var lunch;

 before(function(){
   lunch = new Lunch;
 });


 it('Should return names of places to eat for lunch', function(done){
    lunch.getResponse([], function(){
     expect(lunch.apiData.businesses[0]).to.be.a(Object());
     done();
    });
 });

});