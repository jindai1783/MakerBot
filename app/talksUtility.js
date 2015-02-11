var GoogleCalendar = require('public-google-calendar')

var TalksUtility = function() {
  this.api    = new GoogleCalendar({ calendarId: 'iammakerbot@gmail.com' });
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
  events = events.filter(function(event) {
    return (event.start.getYear()  == nowTime.getYear() &&
            event.start.getMonth() == nowTime.getMonth() &&
            event.start.getDate()  == nowTime.getDate());
  });

  events = events.map(function(event) {
    var minutes = (event.start.getMinutes() < 10 ? "0" + event.start.getMinutes() : event.start.getMinutes())

    return "At " + event.start.getHours() + ":" + minutes +
    " " + event.summary + " will be giving a talk. ";
  });

  var outputString = "Here is the agenda for today: "
  for(var i = 0; i < events.length; i ++) {
    outputString += events[i];
  }

  return outputString;
};

TalksUtility.prototype.tomorrowsEvents = function(events, nowTime) {
  events = events.filter(function(event) {
    return (event.start.getYear()  == nowTime.getYear() &&
            event.start.getMonth() == nowTime.getMonth() &&
            event.start.getDate()  == nowTime.getDate() + 1);
  });

  events = events.map(function(event) {
    var minutes = (event.start.getMinutes() < 10 ? "0" + event.start.getMinutes() : event.start.getMinutes())

    return "At " + event.start.getHours() + ":" + minutes +
    " " + event.summary + " will be giving a talk. ";
  });

  var outputString = "Here is the agenda for tomorrow: "
  for(var i = 0; i < events.length; i ++) {
    outputString += events[i];
  }

  return outputString;
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

  var outputString = "Here is the agenda for Friday: "
  for(var i = 0; i < events.length; i ++) {
    outputString += events[i];
  }

  return outputString;
};

module.exports = TalksUtility;
