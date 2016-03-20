require('meteor-imports');

var Meteor = require('meteor/meteor').Meteor;
var Tracker = require('meteor/tracker').Tracker;
var Mongo = require('meteor/mongo').Mongo;

var Posts = new Mongo.Collection('posts');

Meteor.call('insertPost', 'Some Post Title', '/post');

Meteor.subscribe('posts');

Tracker.autorun(function() {
  console.log('Nnumber of posts: ' + Posts.find().count());
});
