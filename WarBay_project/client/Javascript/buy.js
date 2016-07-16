import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { usd_games } from '/lib/collections/usd_games.js';

Meteor.subscribe('pub_ug');
Template.Buy.helpers({
  show_games: ()=> {
    return usd_games.find();
  },
  'desc': ()=>
  {
    return Session.get('description');
  },
});


Template.Buy.events({
  //SHOWING ADVANCE SEARCH EVENT
  // 'click #adv-js': function(event)
  // {
  //   event.preventDefault();
  //   $('#advtemple').toggle('show');
  // },

  'click #info-js': function(event)
  {
    event.preventDefault();
    Meteor.call('find_game', desc);
    // var name=usd_games.findOne({name});
    // var rate=usd_games.findOne({rate: ""});
    // var genre=usd_games.findOne({genre: ""});
    // var phone=usd_games.findOne({phone: ""});
    // var user=usd_games.findOne({owner: ""});
    // var email=usd_games.findOne({email: ""});
    alert(
      "Game Information:"+"\n\n"+
      "Game: "+ name +"\n"+
      "Rating: "+ rate + "\n"+
      "Genre: "+ genre + "\n"+
      "Phone: "+ phone + "\n"+
      "Owner: "+ user + "\n"+
      "Email: "+ email
    );
  },
  "click #addc-js": function(event, template)
  {
    Cart.add(
    {
      relationType: 'u_g',
      relationId: this._id,
      quantity: 1,
    });
    alert("Game added");
  },
});
