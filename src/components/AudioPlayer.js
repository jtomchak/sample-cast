import React, { Component } from "react";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }
  render() {
    console.log(this.audio);
    return (
      <div className="col-8">
        <h5>{this.props.title}</h5>
        <audio
          controls
          autoPlay
          src={this.props.enclosureURL}
          ref={this.audio}
        />
        <button
          type="button"
          className="btn btn-outline-secondary oi oi-media-skip-backward"
        />
        <button
          type="button"
          className="btn btn-outline-secondary oi oi-media-skip-forward"
        />
      </div>
    );
  }
}

export default AudioPlayer;
