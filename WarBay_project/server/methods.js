import '../lib/collections/usd_games.js';
import '../lib/collections/new_games.js';


Meteor.publish('pub_ug', function() {
  return usd_games.find({name : "test"});
});

Meteor.publish('pub_ng', function() {
  return new_games.find({name : "test"});
});
