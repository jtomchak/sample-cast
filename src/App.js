import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Episodes } from "./services";

class App extends Component {
  componentDidMount() {
    Episodes.all()
      .then(payload => console.log(payload))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
