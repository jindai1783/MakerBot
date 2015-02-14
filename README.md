[![Code Climate](https://codeclimate.com/repos/54ddc110e30ba070710052ce/badges/c04aa5a3fc98b0c98879/gpa.svg)](https://codeclimate.com/repos/54ddc110e30ba070710052ce/feed)[![Test Coverage](https://codeclimate.com/repos/54ddc110e30ba070710052ce/badges/c04aa5a3fc98b0c98879/coverage.svg)](https://codeclimate.com/repos/54ddc110e30ba070710052ce/feed)

## What is Makerbot?

Makerbot is the digital assistant for Makers Academy. It was born out of a need for a user interface to pull together the resources we all use regularly. It lives inside the Makers' Slack environment. Makerbot is modular and open source so if you have any ideas you would like incorporated into Makerbot, get coding! See the section: Writing Modules for Makerbot if you would like to know how.

## How to Use Makerbot

To get my attention, click on me in the Makers' Slackbot and say 'mbot' followed by a command:

* **help** - will show you all commands. Makerbot is always updating so it's always good to check my help commands e.g. 'mbot help'
* **pills** - will show all the Makers pills - use with an argument to get the link - e.g. 'mbot pills' followed by 'mbot pills pill.md'
* **challenges** - will show all the Makers challenges - use with an argument to get the link - e.g. 'mbot challenges' followed by 'mbot challenges challenge.md'
* **talks** - will show you the talks taking place - use with the following arguments: 'next', 'today' and 'tomorrow' e.g. 'mbot talks next Monday'
* **121** - will show you the 121 schedule at Makers (remember to login!) e.g. 'mbot 121'
* **q** - will answer your question using Wolfram Alpha e.g. "mbot q 'What's the airspeed of an unladen swallow?'"

## Powered By

* Javascript
* Node.js
* Mocha
* Chai
* Grunt
* Google Calendar
* Wolfram Alpha
* Github

## Team

* Clint Pijuan
* Danielle Demkiw
* Ptolemy Barnes
* Jin Dai
Jacob Mitchinson


## Writing Modules for Makerbot

Makerbot has a standarised way of incorporating new modules. This makes it easy to write new modules for Makerbot. When creating a new module the public interface of that module should be a single #getResponse method. That method should take two arguments: arguments you wish to use with Makerbot e.g. 'mbot superawesome moreawesome' and a callback which will callback to the commandParser. For example:

````var api = require('api');
var readAPI = api();

var SuperAwesomeModule = function() {

};

SuperAwesomeModule.prototype.getResponse = function(arguments, callback) {
    if(arguments === 'moreawesome') {
        readAPI.fetch("I want some awesome things from you", function(awesomethings){
            callback(awesomethings);
        });
    };
};
````





