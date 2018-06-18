import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//adding bootstrap & dependencies
import "./include/bootstrap";

//App is wrapped in Router to dynamicly pass the param 'showId' as prop
//this always App to fetch show details on init
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route
        path={"/"}
        render={() => <Redirect to="/185226/episodes/29314799" />}
      />
      <Route path={"/:showId/episodes/:episodeId?"} component={App} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
