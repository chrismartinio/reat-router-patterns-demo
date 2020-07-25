import React, { Component } from "react";
import Nav from "./Nav";
import { Route, BrowserRouter } from "react-router-dom";
import Food from "./Food";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Route path="/food/:name"
                 render={rtProps => <Food {...rtProps} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
