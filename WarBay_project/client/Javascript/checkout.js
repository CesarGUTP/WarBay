import { usd_games } from '/lib/collections/usd_games.js';
import { totalPrice } from '/client/javascript/cart.js';

Meteor.startup(function() {
  Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
});


itemprice={};
itemprice.subt=function(item, product)
{
  return item * product;
}

Template.Checkout.helpers({
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

  subtotal: function() {
    var price = 0, sub=0;
    Cart.items().forEach(function(item) {
      var product = usd_games.findOne({_id: item.relationId});
      sub=itemprice.subt(item.quantity, product.price);
      price += sub;
    });
    return price;
  },

  tax_seven: function()
  {
    var seven=0, sub=0;
    price = 0;
    Cart.items().forEach(function(item) {
      var product = usd_games.findOne({_id: item.relationId});
      sub=itemprice.subt(item.quantity, product.price);
      price += sub;
      seven = price * 0.07;
    });
    return seven;
  },

  totalseven: function(){
     var total=0, price = 0, sub = 0;
     Cart.items().forEach(function(item) {
       var product = usd_games.findOne({_id: item.relationId});
       sub=itemprice.subt(item.quantity, product.price);
       price += sub;
       total = price * 1.07;
     });
     return total;
  },

});

Template.Checkout.events({
  "submit form": function(event)
  {
    event.preventDefault();
    var email_c = event.target.email_check.value;
    ccNum = $('#ccnum-js').val();
    cvc = $('#cvc-js').val();
    expMo = $('#exp-month').val();
    expYr = $('#exp-year').val();

    Stripe.card.createToken({
      number: ccNum,
      cvc: cvc,
      exp_month: expMo,
      exp_year: expYr,
    }, function(status, response) {
      stripeToken = response.id;
      Meteor.call('chargeCard', stripeToken, Cart.items() ,Meteor.user().username);
    });
    alert("We will notify you by email: " + email_c);
    alert("Thanks for your buying and preferring us!"+"\n"+"Come back soon ;)");
    Cart.empty();
  },

});
