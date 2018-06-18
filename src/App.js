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
    error: null,
    selectedEpisode: null
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

  handleSelectEpisode = (e, id) => {
    this.setState(prevStat => ({
      selectedEpisode: id
    }));
  };
  render() {
    const { show, episodes, error, selectedEpisode } = this.state;
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <DivWithError showError={error}>
            <h1>{show.name}</h1>
            <span>{show.description}</span>
            <div className="row">
              <EpisodeList
                episodes={episodes}
                onSelect={this.handleSelectEpisode}
                selectedEpisode={selectedEpisode}
              />
              {selectedEpisode && (
                <EpisodeDetails
                  episode={episodes.find(e => e.id === selectedEpisode)}
                />
              )}
            </div>
          </DivWithError>
        </div>
      </div>
    );
  }
}

export default App;
