import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Posts } from './collections.js';
import Post from './Post.jsx';

export class App extends React.Component {
  insertPost() {
    Meteor.call('insertPost', 'Some Post Title', 'Some post content.', '/post');
  }
  render() {
    return (
      <div>
        <h1>Meteor Imports Webpack plugin example</h1>
        <button onClick={this.insertPost}>Insert Post</button>
        <ul>
          {this.props.posts.map(({_id, title, content}) => (
            <li key={_id}><Post title={title} content={content} /></li>
          ))}
        </ul>
      </div>
    );
  }
}

function composer(props, onData) {
  const handle = Meteor.subscribe('posts');
  if(handle.ready()) {
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {posts});
  };
};

export default composeWithTracker(composer)(App);
