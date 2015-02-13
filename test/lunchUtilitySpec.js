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
     expect(lunch.response).to.contain('Mango');
     done();
    });
  });

 it('Should return names of places to eat for lunch', function(done){
    lunch.getResponse(['Bleecker St. Burger'], function(){
     expect(lunch.response).to.contain('65A Brushfield St');
     done();
    });
  });
});