import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//import './main.html';
myspace = {};
myspace.setEmpty = function(event)
{
  event.target.namg_sell.value="";
  event.target.pubDesc.value="";
  event.target.rate_ht.value="";
  event.target.genre_ht.value="";
  event.target.email_ht.value="";
  event.target.phone_ht.value="";
  event.target.price_ht.value="";
  event.target.imgdir_ht.value="";
}

Template.Sell.events({
  'submit form': function(event){
     event.preventDefault();

     var nam_sell=event.target.namg_sell.value;
     var pdesc=event.target.pubDesc.value;
     var rate_s=event.target.rate_ht.value;
     var genre_s=event.target.genre_ht.value;
     var email_s=event.target.email_ht.value;
     var phone_s=event.target.phone_ht.value;
     var price_s=event.target.price_ht.value;
     var imgdir=event.target.imgdir_ht.value;
     var loggeduser=Meteor.userId();
     if(loggeduser && !loggeduser.equals("cesarAdmin"))
     {
       Meteor.call('add_ugame', nam_sell, pdesc, rate_s, genre_s, email_s, phone_s, price_s, imgdir);
       alert("Game published!");
       myspace.setEmpty(event);
     }
     else
     {
       Meteor.call('add_ngame', nam_sell, pdesc, rate_s, genre_s, email_s, phone_s, price_s, imgdir);
       alert("Game published!");
       myspace.setEmpty(event);
       //Alerts.add("You most be logged in :/");
     }
  }
});
