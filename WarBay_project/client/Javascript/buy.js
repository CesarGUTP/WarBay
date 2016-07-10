import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

Template.Buy.events({
  'click #new-jsid': function(event){
    event.preventDefault();
    alert("Showing new games");
    //Meteor.call();
  },
  'click #used-jsid': function(event){
    event.preventDefault();
    alert("Showing used games");
  },
  'click #adv-js': function(event)
  {
    event.preventDefault();
    $('#advtemple').toggle('show');
  },
});

//FALTA EL METEOR.CALL()
