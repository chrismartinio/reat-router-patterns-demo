import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogHome from "./BlogHome";
import Post from "./Post";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/about"
               render={() => <About />} />
        <Route path="/contact"
               render={rtProps => <Contact {...rtProps} />} />
        <Route path="/blog/:slug"
               render={rtProps => <Post {...rtProps} />} />
        <Route path="/blog"
               render={() => <BlogHome />} />
        <Route path="/"
               render={() => <Home />} />
      </div>
    );
  }
}

export default Routes;
