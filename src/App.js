import React, { Component } from "react";
import DivWithError from "./components/DivWithError";
import Navigation from "./components/Navigation";

import EpisodeList from "./components/EpisodeList";
import EpisodeDetails from "./components/EpisodeDetails";

import { Show, Episodes } from "./services";

class App extends Component {
  state = {
    show: {},
    episodes: [],
    loading: false,
    error: null
  };
  componentDidMount() {
    //Tackling a lot here: fetching show data AND episodes of that particular show
    //Eventually the episode id and info will be retrieved at a higher level
    //but for now this is the 'root' of our app
    let showId = parseInt(this.props.match.params.showId);
    Promise.all([Show.get(showId), Episodes.all(showId)])
      .then(values => {
        return Promise.all([values[0].json(), values[1].json()]);
      })
      .then(results => ({
        show: results[0].show,
        episodes: results[1].episodes
      }))
      .then(({ show, episodes }) => {
        //check for return error 'Not Found'
        if (show.error) {
          return this.setState({
            error: show.error
          });
        }
        //No Error. Successful fetch of show
        return this.setState({
          show: show,
          episodes: episodes
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
