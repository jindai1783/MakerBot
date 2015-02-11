var GoogleCalendar = require('public-google-calendar')

var TalksUtility = function() {
  this.api  = new GoogleCalendar({ calendarId: 'iammakerbot@gmail.com' });
  this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};

TalksUtility.prototype.getResponse = function(args, callback) {
  if (args[0] === 'next') {
    this.getEvents(this.nextEvent);
  };
};

TalksUtility.prototype.getEvents = function(callback) {
  this.api.getEvents({}, function(error, events) {
    callback(events);
  });
};

TalksUtility.prototype.nextEvent = function(events) {
  var nextEventText = events[events.length - 1 ].summary;
  return "The next event will be " + nextEventText;
};

TalksUtility.prototype.todaysEvents = function(events, nowTime) {
  return this.dayEvents(events, nowTime, nowTime.getDay());
};

TalksUtility.prototype.tomorrowsEvents = function(events, nowTime) {
  return this.dayEvents(events, nowTime, nowTime.getDay()+1);
};

TalksUtility.prototype.dayEvents = function(events, nowTime, dayNum) {
  events = events.filter(function(event) {
    return (event.start.getYear()  == nowTime.getYear() &&
            event.start.getMonth() == nowTime.getMonth() &&
            event.start.getDate()  <= nowTime.getDate()+7 &&
            event.start.getDay()   == dayNum);
  });

  events = events.map(function(event) {
    var minutes = (event.start.getMinutes() < 10 ? "0" + event.start.getMinutes() : event.start.getMinutes())

    return "At " + event.start.getHours() + ":" + minutes +
    " " + event.summary + " will be giving a talk. ";
  });

  var dayString = this._getDayString(nowTime, dayNum);

  var outputString = "Here is the agenda for " + dayString + ": ";
  for(var i = 0; i < events.length; i ++) {
    outputString += events[i];
  }

  return outputString;
};

TalksUtility.prototype._getDayString = function(nowTime, dayNum) {
  if (nowTime.getDay()+1 === dayNum) {
    return "tomorrow";
  }
  else if (nowTime.getDay() === dayNum) {
    return "today";
  }
  else { return this.days[dayNum] };
};

module.exports = TalksUtility;
