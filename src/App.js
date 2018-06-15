import React, { Component } from "react";
import "./App.css";
import DivWithError from "./withError";

import { Show } from "./services";

class App extends Component {
  state = {
    show: {},
    loading: false,
    error: null
  };
  componentDidMount() {
    Show.get(185226)
      .then(result => result.json())
      .then(payload => {
        this.setState({
          show: payload.show
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }
  render() {
    return (
      <DivWithError showError={this.state.error}>
        <h1>{this.state.show.name}</h1>
      </DivWithError>
    );
  }
}

export default App;
