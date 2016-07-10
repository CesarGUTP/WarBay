import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.MainLayout.onCreated(function MainLayoutOnCreated() {
  Meteor.logout();
  Accounts.ui.config(
  {
    passwordSignupFields: "USERNAME_ONLY"
  });
});
