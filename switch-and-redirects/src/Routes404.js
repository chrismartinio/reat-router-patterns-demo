import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogHome from "./BlogHome";
import Post from "./Post";
import NotFound from "./NotFound";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about"
               render={() => <About />} />
        <Route exact path="/contact"
               render={rtProps => <Contact {...rtProps} />} />
        <Route exact path="/blog/:slug"
               render={rtProps => <Post {...rtProps} />} />
        <Route exact path="/blog"
               render={() => <BlogHome />} />
        <Route exact path="/"
               render={() => <Home />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
