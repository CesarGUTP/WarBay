import { Meteor } from 'meteor/meteor';
  import { usd_games } from '../lib/collections/usd_games.js';
import '../lib/collections/usd_games.js';

Meteor.startup(() => {

});

Meteor.methods(
{'add_ugame':function(nam, desc, rate, gen, userid, ema, num, pr, img_src)
  {
    var userl=Meteor.userId();
    if(userl != null)
    {
      usd_games.insert(
      {
        name: nam,
        desc: desc,
        rating: rate,
        genre: gen,
        owner: userid,
        email: ema,
        phone: num,
        price: pr,
        file: img_src,
      });
    }
    else
    {
      throw new Meteor.Error(01, "The user must be loged in to publish");
    }
  },

  'find_game': function(nam)
  {
    return usd_games.find({name: nam});
  }
});

//Stripe method
Meteor.methods({
  'chargeCard': function(stripeToken, item , user) {
    var Stripe = StripeAPI('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    Stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});


Meteor.publish('pub_ug', function() {
  return usd_games.find();
});

Meteor.publish('pub_ug2', function(nam){
  return usd_games.find({name: nam})
});
