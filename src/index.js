import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//Include bootstrap's css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Include bootstrap's js
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
