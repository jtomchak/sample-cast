import React from "react";
import PropTypes from "prop-types";

const EpisodeDetails = ({ episode, toggleEditable }) => {
  //Episodes might have HTML in description
  //Needs to be rendered as such
  const descriptionMarkup = { __html: episode.description };
  return (
    <div className="media col-sm-8 col-md-8 d-none d-sm-block">
      <div className="media-body">
        <h5 className="mt-0">
          <span>{episode.title}</span>
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={toggleEditable}
          >
            Edit
          </button>
        </h5>
        <p dangerouslySetInnerHTML={descriptionMarkup} />
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
