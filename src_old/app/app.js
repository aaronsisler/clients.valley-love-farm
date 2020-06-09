import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "../containers/app-container";
import "normalize.css/normalize.css";
import "./app.scss";
import { initializeAnalytics } from "../tools/analytics";

initializeAnalytics();

const App = () => (
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
);

export default App;
