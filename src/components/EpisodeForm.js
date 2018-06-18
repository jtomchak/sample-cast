import React, { Component } from "react";

class EpisodeForm extends Component {
  state = { ...this.props };

  handleInputChange = e => {
    const target = e.target;
    this.setState({
      episode: { ...this.state.episode, [target.name]: target.value }
    });
  };

  cancelOnClick = e => {
    e.preventDefault();
    this.props.toggleEditable();
  };

  saveOnClick = e => {
    e.preventDefault();
    //as a PATCH save, only send episode changes, NOT entire payload
    //return to parent either object of changes *OR* null if no changes have occured
    const episodeChanges = objDiff(this.props.episode, this.state.episode);
    this.props.saveEpisode(
      Object.keys(episodeChanges).length ? episodeChanges : null
    );
  };

  render() {
    const episode = this.state.episode;

    return (
      <form className="d-none d-sm-block">
        <div className="form-row">
          <div className="form-group w-100">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              aria-describedby="title"
              value={episode.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="exampleInputPassword1">Description</label>
            <textarea
              className="form-control rounded-0"
              name="description"
              rows="6"
              value={episode.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="col-10">
            <button
              className="btn float-right btn-secondary"
              onClick={this.cancelOnClick}
            >
              Cancel
            </button>
          </div>
          <div className="col-2">
            <button
              className="btn float-right btn-primary"
              onClick={this.saveOnClick}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const objDiff = (o1, o2) =>
  Object.keys(o2).reduce((diff, key) => {
    if (o1[key] === o2[key]) return diff;
    return {
      ...diff,
      [key]: o2[key]
    };
  }, {});

export default EpisodeForm;
