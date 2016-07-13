import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.Buy.events({
  'click #new-jsid': function(event){
    event.preventDefault();
    alert("Showing new games");
    var gname = event.target.usr.value;
    Meteor.subscribe('pub_ug');
  },
  'click #used-jsid': function(event){
    event.preventDefault();
    alert("Showing used games");
    var gname = event.target.usr.value;
    Meteor.subscribe('pub_ug');
  },
  'click #adv-js': function(event)
  {
    event.preventDefault();
    $('#advtemple').toggle('show');
  },
});
