import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.MainLayout.onCreated(function MainLayoutOnCreated() {
  // Meteor.logout();
  Accounts.ui.config(
  {
    passwordSignupFields: 'USERNAME_ONLY',
  });
  var handler = StripeCheckout.configure({
		key: 'YOUR_PUBLISHABLE_KEY',
		token: function(token) {}
	});
});
