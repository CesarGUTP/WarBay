import { usd_games } from '/lib/collections/usd_games.js';


Template.Cart.helpers({
  items: function(){
    var items = [];
    Cart.items().forEach(function(item) {
      items.push({
        _id: item.relationId,
        item: usd_games.findOne({name: item.relationId}),
        amount: item.quantity
      });
    });
    return items;
  },

  numItems: function(){
    return Cart.numItems();
  },

  totalPrice: function() {
    var price = 0;
    Cart.items().forEach(function(item) {
      var product = usd_games.findOne({_id: item.relationId});
      price += item.quantity * product.price;
    });
    return price;
  }
});


Template.Cart.events({
  "click #check-js": function(event, template){
    alert("Buying...");
    Cart.empty();
  },
  "click #remove-js": function()
  {
    Cart.remove(this._id);
    alert("item removed");
  },
  "click #emptyc-js": function()
  {
    Cart.empty();
    alert("shopping cart empty");
  },
});
