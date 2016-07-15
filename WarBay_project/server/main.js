import { Meteor } from 'meteor/meteor';
  import { new_games } from '../lib/collections/new_games.js';
  import { usd_games } from '../lib/collections/usd_games.js';
import '../lib/collections/usd_games.js';
import '../lib/collections/new_games.js';

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

  // 'add_ngame':function(nam, desc, rate, gen, userid, ema, num, pr, img_src)
  // {
  //   var userl=Meteor.userId();
  //   if(userl)
  //   {
  //     new_games.insert(
  //     {
  //       name: nam,
  //       desc: desc,
  //       rating: rate,
  //       genre: gen,
  //       user: userid,
  //       email: ema,
  //       phone: num,
  //       price: pr,
  //       file: img_src,
  //     });
  //   }
  //   else
  //   {
  //     throw new Meteor.Error(02, "You need to be logged in to publish");
  //   }
  // },

  'find_game': function(nam)
  {
    return usd_games.find({name: nam});
  }
});

Meteor.publish('pub_ug', function() {
  return usd_games.find();
});

Meteor.publish('pub_ug2', function(nam){
  return usd_games.find({name: nam})
});
