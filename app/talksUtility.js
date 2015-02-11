var GoogleCalendar = require('public-google-calendar')

var TalksUtility = function() {
  this.api  = new GoogleCalendar({ calendarId: 'iammakerbot@gmail.com' });
};

TalksUtility.prototype.getResponse     = function(args, callback) {
  if (args[0] === 'next') {
    this.getEvents(this.nextEvent);
  };
};

TalksUtility.prototype.getEvents       = function(callback) {
  this.api.getEvents({}, function(error, events) {
    callback(events);
  });
};

TalksUtility.prototype.nextEvent       = function(events) {
  var nextEventText = events[events.length - 1 ].summary;
  return "The next event will be " + nextEventText;
};

TalksUtility.prototype.todaysEvents    = function(events, nowTime) {
  return this.dayEvents(events, nowTime, nowTime.getDay());
};

TalksUtility.prototype.tomorrowsEvents = function(events, nowTime) {
  return this.dayEvents(events, nowTime, nowTime.getDay()+1);
};

TalksUtility.prototype.dayEvents       = function(events, nowTime, dayNum) {
  events = this._filterForEventsInDateRange(events, nowTime, dayNum, 7);

  var eventStrings = this._composeEventStrings(events);
  var outputString = this._composeOutputString(eventStrings, nowTime, dayNum);

  return outputString;
};

TalksUtility.prototype._composeEventStrings  = function(events) {
  return events.map(function(event) {
    var minutes = (event.start.getMinutes() < 10 ? "0" + event.start.getMinutes() : event.start.getMinutes())
    
    return "At " + event.start.getHours() + ":" + minutes +
    " " + event.summary + " will be giving a talk. ";
  });
};

TalksUtility.prototype._composeOutputString = function(events, nowTime, dayNum) {
  var outputString = "Here is the agenda for " + this._getDayString(nowTime, dayNum) + ": ";
  for(var i = 0; i < events.length; i ++) {
    outputString += events[i];
  }
  return outputString
};

TalksUtility.prototype._getDayString   = function(nowTime, dayNum) {
  if (nowTime.getDay()+1 === dayNum) {
    return "tomorrow" }

  else if (nowTime.getDay() === dayNum) {
    return "today"    }

  else { 
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayNum] };
};

TalksUtility.prototype._filterForEventsInDateRange = function(events, nowTime, dayNum, range) {
  return events.filter(function(event) {
    return (event.start.getYear()  == nowTime.getYear() &&
            event.start.getMonth() == nowTime.getMonth() &&
            event.start.getDate()  <= nowTime.getDate() + range &&
            event.start.getDay()   == dayNum);
  });
};

module.exports = TalksUtility;
