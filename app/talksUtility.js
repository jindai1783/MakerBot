var GoogleCalendar = require('public-google-calendar');

var TalksUtility = function() {
  this.api          = new GoogleCalendar({ calendarId: 'iammakerbot@gmail.com'});
  this.weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};

TalksUtility.prototype.getResponse     = function(args, callback) {
  console.log
  console.log('getResponse was hit');
  var self = this;
  this.getEvents(function(events) {
    if      (args[0] === 'next') {
      callback(null, self.nextEvent(events))
    }
    else if (args[0] === 'today') {
      callback(null, self.todaysEvents(events, new Date()))
    }
    else if (args[0] === 'tomorrow') {
      callback(null, self.tomorrowsEvents(events, new Date()))
    }
    else if (this.weekDayNames[self.capitalize(args[0])]) {
      callback(null, self.dayEvents(events, new Date(), self.weekDayNames.indexOf(self.capitalize(args[0]))))
    }
    else if (args[0] === 'help') {
      callback(null, 'Help command is not yet implemented!')
    }
    else {
      callback(null, ("I do not understand '" + args[0] + "'. Type '!bot talks help' to view valid arguments."))
    }
  });
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
    return this.weekDayNames[dayNum] };
};

TalksUtility.prototype._filterForEventsInDateRange = function(events, nowTime, dayNum, range) {
  return events.filter(function(event) {
    return (event.start.getYear()  == nowTime.getYear() &&
            event.start.getMonth() == nowTime.getMonth() &&
            event.start.getDate()  <= nowTime.getDate() + range &&
            event.start.getDay()   == dayNum);
  });
};

TalksUtility.prototype.capitalize = function(string) {
  return (string.charAt(0).toUpperCase() + string.substring(1));
};

module.exports = TalksUtility;
