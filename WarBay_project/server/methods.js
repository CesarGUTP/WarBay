Meteor.methods(
{
//=================================Insert - used games======================================================
  'add_ugame':function(nam, desc, rate, gen, userid, ema, num, pr, img_src)
  {
    var userl=Meteor.userId();
    if(user)
    {
      UGamesdb.insert(
      {
        "name": nam,
        "desc": desc,
        "rating": rate,
        "genre": gen,
        "user": userid,
        "email": ema,
        "phone": num,
        "price": pr,
        "file": img_src,
      });
    }
    else
    {
      throw new Meteor.Error("logged-out", "The user must be logged in to publish");
    }
  },

//=================================Insert - new games (only administrators)======================================================
  'add_ngame':function(nam, desc, rate, gen, userid, ema, num, pr, img_src)
  {
    var userl=Meteor.userId();
    if(user)
    {
      NGamesdb.insert(
      {
        "name": nam,
        "desc": desc,
        "rating": rate,
        "genre": gen,
        "user": userid,
        "phone": num,
        "price": pr,
        "file": img_src,
      });
    }
    else
    {
      throw new Meteor.Error("logged-out", "You need to be logged in to publish");
    }
 },

});
