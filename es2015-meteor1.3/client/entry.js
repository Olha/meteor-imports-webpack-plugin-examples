import 'meteor-imports';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';

const Posts = new Mongo.Collection('posts');

Meteor.call('insertPost', 'Some Post Title', '/post');

Meteor.subscribe('posts');

Tracker.autorun(() => {
  console.log('Number of posts: ' + Posts.find().count());
});
