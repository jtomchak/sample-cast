import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
//adding bootstrap & dependencies
import "./include/bootstrap";

//App is wrapped in Router to dynamicly pass the param 'showId' as prop
//this always App to fetch show details on init
ReactDOM.render(
  <Router>
    <Route path={"/:showId"} component={App} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
