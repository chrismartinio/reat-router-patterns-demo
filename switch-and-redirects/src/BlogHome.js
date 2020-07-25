import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogHome extends Component {
  render() {
    let slugs = [
      "how-to-disrupt-everything",
      "unicorns-ftw",
      "technology-will-save-us"
    ];

    return (
      <div>
        <h1>Welcome to our blog!</h1>
        <p>Here's what's been on our mind lately.</p>
        <ul>
          {slugs.map(slug => (
            <li key={slug}>
              <Link to={`/blog/${slug}`}>{slug}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlogHome;
