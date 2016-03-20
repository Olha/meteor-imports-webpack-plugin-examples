var Posts = new Mongo.Collection('posts');

Meteor.methods({
  insertPost: function(title, slug) {
    Posts.insert({ title: title, slug: slug });
  }
});

Meteor.publish('posts', function() {
  return Posts.find({});
});
