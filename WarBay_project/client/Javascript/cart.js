import { usd_games } from '/lib/collections/usd_games.js';

Template.Cart.helpers({
  items: function(){
    var items = [];
    Cart.items().forEach(function(item) {
      items.push({
        _id: item.relationId,
        item: usd_games.findOne({_id: new Meteor.Collection.ObjectID(item.relationId)}),
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
      var product = usd_games.findOne({_id: new Meteor.Collection.ObjectID(item.relationId)});
      price += item.quantity * product.price;
    });
    return price;
  }
});

Template.Cart.events({
  "click #pay": function(event, template){
    alert('pagando!');
  }
});
