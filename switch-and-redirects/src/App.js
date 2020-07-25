import React, { Component } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
