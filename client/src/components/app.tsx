import React from "react";
import { Query } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Grid } from "./grid/Grid";
import { Header } from "./header/header";

export const App: React.FC = () => (
  <Router>
    {/* <Header /> */}
    <Route exact path="/" component={() => <Grid />} />
  </Router>
);
