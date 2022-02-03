import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Results from "./Results";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
