import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
window.Tracker = Tracker; // add Tracker as a global for composeWithTracker.

export const Posts = new Mongo.Collection('posts');

Tracker.autorun(() => {
  console.log('Number of posts: ' + Posts.find().count());
});
