import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstList from "../pages/FirstList";
import SecondList from "../pages/SecondList";
import ThirdList from "../pages/ThirdList";
import FourthList from "../pages/FourthList";
import Main from "../pages/Main";

function Routes() {
  return (
    <Switch>
      <Route path={"/"} exact component={Main} />
      <Route path={"/FirstList"} component={FirstList} />
      <Route path={"/SecondList"} component={SecondList} />
      <Route path={"/ThirdList"} component={ThirdList} />
      <Route path={"/FourthList"} component={FourthList} />
    </Switch>
  );
}

export default Routes;
