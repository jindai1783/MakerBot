var chai           = require('chai');
var expect         = chai.expect;
var TalksUtility   = require('../app/talksUtility.js')
var GoogleCalendar = require('public-google-calendar')

describe('Talks Utility', function() {

  var talksUtility;

  describe('public interface returns relevant strings for the time argument', function() {

    var GoogleCalendarDouble;

    before(function() {
      GoogleCalendarDouble = function() {
        GoogleCalendarDouble.prototype.getEvents = function(first_argument) {
          // body...
        };
      }
      talksUtility         = new TalksUtility(new GoogleCalendarDouble());
    });

    it("'today'", function(done) {

      done();
    });
  });

  describe('returns strings describing events for', function() {

    before(function() {
      talksUtility = new TalksUtility();
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

    it('Fridays events', function(done) {
      var today    = new Date(2015, 1, 11, 12, 30);
      var friday   = new Date(2015, 1, 13, 12, 30);

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

      var todayEvent    = new todayEventDouble();
      var fridayEvent   = new fridayEventDouble();
      var futureEvent  = new futureEventDouble();

      expect(talksUtility.dayEvents([todayEvent, fridayEvent, futureEvent], today, 5)).to.equal('Here is the agenda for Friday: At 12:30 Michael Jackson will be giving a talk. ');
      done();
    });
  });
});
















