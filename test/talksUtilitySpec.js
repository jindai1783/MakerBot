// *note: I know this Spec looks scary. But most of it is just Doubles.

var chai           = require('chai');
var expect         = chai.expect;
var TalksUtility   = require('../app/talksUtility.js');

describe('Talks Utility', function() {

  var talksUtility;

  describe('public interface returns strings appropriate to the argument', function() {

    before(function() {

      var nextTime   = new Date();
      nextTime.setHours(nextTime.getHours() + 1);

      var nextEventDouble = function() { 
        this.summary = "Steve Jobs";
        this.start   = nextTime;
      }

      var tomorrow   = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      var tomorrowEventDouble = function() { 
        this.summary = "Ptolemy Barnes";
        this.start   = tomorrow;
      }

      var mondayEventDouble = function() { 
        this.summary = "Fred Flintstone";
        this.start   = new Date(2015, 1, 16);;
      }

      var nextEvent     = new nextEventDouble();
      var tomorrowEvent = new tomorrowEventDouble();
      var mondayEvent   = new mondayEventDouble();

      var GoogleCalDouble = function(option) {};
      GoogleCalDouble.prototype.getEvents = function(options, callback) {
        callback(null, [mondayEvent, tomorrowEvent, nextEvent]);
      };
      talksUtility        = new TalksUtility(GoogleCalDouble);
    });

    it("'next'", function(done) {

      talksUtility.getResponse(['next'], function(err, string) {
        expect(string).to.equal('The next event will be Steve Jobs');
        done();
      });
    });

    it("'tomorrow'", function(done) {

      talksUtility.getResponse(['tomorrow'], function(err, string) {
        expect(string).to.match(/Ptolemy Barnes will be giving a talk/);
        done();
      });
    });

    it("'monday'", function(done) {

      talksUtility.getResponse(['monday'], function(err, string) {
        expect(string).to.match(/Fred Flintstone will be giving a talk/);
        done();
      });
    });

    it("that is bad", function(done) {

      talksUtility.getResponse(['gobble'], function(err, string) {
        expect(string).to.equal("I do not understand 'gobble'. Type '!bot talks help' to view valid arguments.");
        done();
      });
    });

    it("when it is empty", function(done) {

      talksUtility.getResponse([], function(err, string) {
        expect(string).to.equal('The next event will be Steve Jobs');
        done();
      });
    });
  });

  describe('returns strings describing events for', function() {

    before(function() {
      var GoogleCalDouble = function(option) {};
      talksUtility = new TalksUtility(GoogleCalDouble);
    });

    it('the next event', function(done) {
      var EventDouble = function() { this.summary = "Bot Party" }
      var calEvent    = new EventDouble();

      expect(talksUtility.nextEvent([calEvent])).to.equal('The next event will be Bot Party');
      done();
    });

    it('todays events', function(done) {
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

    it('tomorrows events', function(done) {
      var today    = new Date(2015, 0, 1, 12, 30);
      var tomorrow = new Date(2015, 0, 2, 12, 30);

      var todayEventDouble = function() { 
        this.summary = "Eric Schmidt";
        this.start   = today;
      }

      var tomorrowEventDouble = function() { 
        this.summary = "Elon Musk";
        this.start   = tomorrow;
      }

      var todayEvent    = new todayEventDouble();
      var tomorrowEvent = new tomorrowEventDouble();

      expect(talksUtility.tomorrowsEvents([todayEvent,tomorrowEvent], today)).to.equal('Here is the agenda for tomorrow: At 12:30 Elon Musk will be giving a talk. ');
      done();
    });

    it('this Fridays events', function(done) {
      var today     = new Date(2015, 1, 11, 12, 30);
      var friday    = new Date(2015, 1, 13, 12, 30);
      var lastFriday= new Date(2015, 1, 6, 12, 30);

      var todayEventDouble = function() { 
        this.summary = "Eric Schmidt";
        this.start   = today;
      }

      var fridayEventDouble = function() { 
        this.summary = "Michael Jackson";
        this.start   = friday;
      }

      var futureEventDouble = function() { 
        this.summary = "Elon Musk";
        this.start   = new Date(2015, 3, 11, 18);
      }

      var lastFridayEventDouble = function() { 
        this.summary = "Fred Durst";
        this.start   = lastFriday;
      }

      var todayEvent      = new todayEventDouble();
      var fridayEvent     = new fridayEventDouble();
      var futureEvent     = new futureEventDouble();
      var lastFridayEvent = new lastFridayEventDouble();

      expect(talksUtility.dayEvents([todayEvent, fridayEvent, lastFridayEvent, futureEvent], today, 5)).to.equal('Here is the agenda for Friday: At 12:30 Michael Jackson will be giving a talk. ');
      done();
    });
  });
});
















