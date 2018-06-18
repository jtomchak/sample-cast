import React from "react";
import PropTypes from "prop-types";

const EpisodeDetails = ({ episode }) => {
  return (
    <div className="media col-sm-8 col-md-8 d-none d-sm-block">
      <div className="media-body">
        <h5 className="mt-0">{episode.title}</h5>
        <p>{episode.description}</p>
      </div>
    </div>
  );
};

EpisodeDetails.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default EpisodeDetails;
