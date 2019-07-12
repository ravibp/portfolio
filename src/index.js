import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "assets/scss/material-kit-react.scss?v=1.7.0";

// route pages
import LandingPage from "myComponents/LandingPage.jsx";
import ResumeBuild from "myComponents/ResumeBuild.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        exact path="/"
        component={ResumeBuild}
      />
      <Route
        path="/resume"
        component={LandingPage}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
