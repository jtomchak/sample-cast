import React, { Component } from "react";
import DivWithError from "./components/DivWithError";
import Navigation from "./components/Navigation";
import AudioPlayer from "./components/AudioPlayer";
import EpisodeList from "./components/EpisodeList";
import EpisodeDetails from "./components/EpisodeDetails";
import EpisodeForm from "./components/EpisodeForm";

import { Show, Episodes } from "./services";

class App extends Component {
  state = {
    show: {},
    episodes: [],
    loading: false,
    error: null,
    selectedEpisode: null,
    editable: false,
    episodePlaying: {}
  };

  componentDidMount() {
    //Tackling a lot here: fetching show data AND episodes of that particular show
    //Eventually the episode id and info will be retrieved at a higher level
    //but for now this is the 'root' of our app
    let showId = Number(this.props.match.params.showId);
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

  toggleEditable = () =>
    this.setState(prevState => ({ editable: !prevState.editable }));

  handleSelectEpisode = (e, id) => {
    this.setState(
      prevStat => ({
        selectedEpisode: id,
        editable: false
      }),
      () => this.props.history.push(`/${this.state.show.id}/episodes/${id}`)
    );
  };

  handleSaveEpisode = episodeDetails => {
    //as a PATCH save, getting object or null from form
    if (episodeDetails) {
      Episodes.update(
        this.state.show.id,
        this.state.selectedEpisode,
        episodeDetails
      )
        .then(payload => {
          this.setState({
            editable: false
          });
        })
        .catch(err => this.setState({ error: err }));
    }
  };

  handlePlayEpisode = episodeId => {
    this.setState({
      episodePlaying: this.state.episodes.find(e => e.id === episodeId)
    });
  };
  render() {
    const {
      show,
      episodes,
      error,
      selectedEpisode,
      editable,
      episodePlaying
    } = this.state;
    const currentlySelected =
      episodes.find(e => e.id === selectedEpisode) || {};
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <DivWithError showError={error}>
            <div className="row">
              <div className="col-4">
                <h1>{show.name}</h1>
                <span>{show.description}</span>
              </div>

              <AudioPlayer
                title={episodePlaying.title}
                enclosureURL={episodePlaying.enclosure_url}
                thumbNail={episodePlaying.image_url}
              />
            </div>
            <div className="row">
              <EpisodeList
                episodes={episodes}
                onSelect={this.handleSelectEpisode}
                selectedEpisode={selectedEpisode}
              />
              {selectedEpisode &&
                (editable ? (
                  <EpisodeForm
                    episode={currentlySelected}
                    saveEpisode={this.handleSaveEpisode}
                    toggleEditable={this.toggleEditable}
                  />
                ) : (
                  <EpisodeDetails
                    episode={currentlySelected}
                    playEpisode={this.handlePlayEpisode}
                    toggleEditable={this.toggleEditable}
                  />
                ))}
              {!selectedEpisode && (
                <h5 className="col-8">
                  <span>Select an Episode for Details</span>
                </h5>
              )}
            </div>
          </DivWithError>
        </div>
      </div>
    );
  }
}

export default App;
