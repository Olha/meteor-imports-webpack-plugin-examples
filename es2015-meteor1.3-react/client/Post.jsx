import React from 'react';
import Title from './Title.jsx';

class Post extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <h3>Post: {this.props.title}</h3>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Post;
