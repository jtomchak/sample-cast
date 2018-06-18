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
              onClick={this.props.toggleEditable}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EpisodeForm;
