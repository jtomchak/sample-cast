import React, { Component } from "react";
import DivWithError from "./components/DivWithError";
import Navigation from "./components/Navigation";

import EpisodeList from "./components/EpisodeList";
import EpisodeDetails from "./components/EpisodeDetails";

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
      <div>
        <Navigation />
        <div className="container-fluid">
          <DivWithError showError={this.state.error}>
            <h1>{this.state.show.name}</h1>
            <div className="row">
              <EpisodeList />
              <EpisodeDetails />
            </div>
          </DivWithError>
        </div>
      </div>
    );
  }
}

export default App;
