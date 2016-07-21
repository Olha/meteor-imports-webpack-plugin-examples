import { Meteor } from 'meteor/meteor';
import { Posts } from './collections.js';

Meteor.publish('posts', () => Posts.find());
