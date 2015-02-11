var chai         = require('chai');
var expect       = chai.expect;
var TalksUtility = require('../app/talksUtility.js')

describe('Talks Utility', function() {

  var talksUtility;

  before(function() {
    talksUtility = new TalksUtility();
  });

  it('returns the next event', function(done) {
    var EventDouble = function() { this.summary = "Bot Party" }
    var calEvent    = new EventDouble();

    expect(talksUtility.nextEvent([calEvent])).to.equal('The next event will be Bot Party');
    done();
  });

  it('returns todays events', function(done) {
    var steveEventDouble = function() { 
      this.summary = "Steve Jobs";
      this.start   = new Date(2015, 1, 11, 12, 30);
      }

    var billEventDouble = function() { 
      this.summary = "Bill Gates";
      this.start   = new Date(2015, 1, 11, 18, 0);
    }

    var futureEventDouble = function() { 
      this.summary = "Elon Musk";
      this.start   = new Date(2016, 1, 11, 18);
    }

    var steveEvent   = new steveEventDouble();
    var billEvent    = new billEventDouble();
    var futureEvent  = new futureEventDouble();

    expect(talksUtility.todaysEvents([steveEvent, billEvent, futureEvent], new Date(2015, 1, 11, 10))).to.equal('Here is the agenda for today: At 12:30 Steve Jobs will be giving a talk. At 18:00 Bill Gates will be giving a talk. ');
    done();
  })
});