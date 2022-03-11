import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import OrderComponent from "./OrderComponent";
import OrdersComponent from "./OrdersComponent";

const MainComponent = () => {
  return (
    <div>
      <Switch>
        <Route path="/order" component={OrderComponent} />
        <Route path="/orders" component={OrdersComponent} />
        <Redirect to="/order" />
      </Switch>
    </div>
  );
};

export default MainComponent;
