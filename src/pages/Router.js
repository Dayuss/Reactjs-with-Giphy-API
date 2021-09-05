import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Homepage";
import List from "./Items";


const Routes = (
  <div>
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/giphy-list" exact strict component={List} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>
);

export default Routes;
