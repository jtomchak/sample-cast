import React from "react";

const EpisodeList = ({ episodes, onSelect, selectedEpisode }) => {
  //create each episode list item
  const rEpisodes = episodes.map(e => (
    <div
      className={`list-group-item list-group-item-action flex-column align-items-start ${
        selectedEpisode === e.id ? "active" : ""
      }`}
      key={e.id}
      onClick={event => onSelect(event, e.id)}
    >
      <div className="d-flex w-100 justify-content-between">
        <img
          className="align-start img-fluid h-25 rounded img-thumbnail episode-thumbnail"
          src={e.image_url}
          alt="Generic placeholder"
        />
        <h5 className="mb-1 pl-2">{e.title}</h5>
        <small className="d-none d-md-block">3 days ago</small>
      </div>
      <p
        className="mb-1 d-none d-md-block"
        dangerouslySetInnerHTML={{ __html: e.description }}
      />
    </div>
  ));
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <ul className="list-group list-group-flush h-scroll">{rEpisodes}</ul>
    </div>
  );
};
export default EpisodeList;
