var yelp = require("yelp").createClient({
   consumer_key:'noERLN34lWjTDIfb9leQnw', 
   consumer_secret:'3NOwlGGKovj0Acbdpbjv0CrzWJE',
   token: 'uQAJ_ETdj3z60yDMHVy01_osoIqblYgv',
   token_secret: '8bQSadAxfXWzoCRNz37h3ccrRhY'
});

function Lunch(){
  this.apiData = null;
  this.restaurants = {};
  this.response = null;
}

Lunch.prototype.getResponse = function(args, callback) {
  var self = this;
  this.getInfo(function() {
    self.getRestaurants();
    callback(null, self.response = self.decision(args));
  });
};

Lunch.prototype.decision = function(args) {
  if(args[0] != null){
    return this.translateArgs(args);
  } else {
   var keys = Object.keys(this.restaurants);
   return keys.join("\n");
  }
};

Lunch.prototype.translateArgs = function(args) {
if (args[0] === 'random') {
    return this.randomRestaurant();
  } else {
    return this.getAddress(args);
  };
};

Lunch.prototype.getAddress = function(args) {
  var arg = args.join(' ');
  var address = this.restaurants[arg];
    if(address){
      return address.join(" ")
    }else{
      return "No restaurant found."
    };
};

Lunch.prototype.randomRestaurant = function() {
  var keys = Object.keys(this.restaurants); 
  var random = keys[Math.floor(Math.random() * keys.length)];
  return random;
};

Lunch.prototype.getInfo = function(callback) {
  var self = this;
  yelp.search({term: "food", location: "E1 6LT"}, function(error, data) {
    if(error) callback(error);
    callback(self.apiData = data);
  });
};

Lunch.prototype.getRestaurants = function() {
  var dataSize = this.apiData.businesses.length;
  var businesses = this.apiData.businesses;
  for(i = 0; i < dataSize; i++) {
   this.restaurants[businesses[i].name] = businesses[i].location.address;
 }
 return this.restaurants;
};


module.exports = Lunch;

