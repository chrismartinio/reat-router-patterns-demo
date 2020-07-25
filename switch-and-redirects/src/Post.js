import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <h1>Here's our blog post.</h1>
        <p>Topic: {this.props.match.params.slug}</p>
        <p>Content: TBD.</p>
      </div>
    );
  }
}

export default Post;
