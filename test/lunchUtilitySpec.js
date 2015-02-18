var chai = require('chai');
var expect = chai.expect;
var Lunch = require('../app/utilities/lunchUtility.js');

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

 it('Should return the address of a specific restaurant', function(done){
    lunch.getResponse(['Bleecker', 'St.', 'Burger'], function(){
     expect(lunch.response).to.contain('65A Brushfield St');
     done();
    });
  });

 it('Should return a random restaurant', function(done){
    lunch.getResponse(['random'], function(){
      expect(lunch.response).not.to.equal(null);
      done();
    });
  });
});
