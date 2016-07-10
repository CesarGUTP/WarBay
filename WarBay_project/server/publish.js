Meteor.publish('go', function() {
  return UGamesdb.find();
});
