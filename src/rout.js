import React from "react";
import { Switch, Route } from "react-router-dom";
import Charters from "./pages/charters/charters";
import Locations from "./pages/location/locations";
import Episodes from "./pages/episode/episodes";
import Home from "./pages/home/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/character/" component={Charters} />
      <Route path="/location/" component={Locations} />
      <Route path="/episode/" component={Episodes} />
    </Switch>
  );
};
export default Routes;
