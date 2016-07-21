import { Meteor } from 'meteor/meteor';
import { Posts } from './collections.js';

Meteor.methods({
  insertPost(title, slug) {
    Posts.insert({ title, slug });
  }
});
