import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import OrderComponent from "./OrderComponent";
import OrdersComponent from "./OrdersComponent";
import { Container } from "@mui/material";

const MainComponent = () => {
  return (
    <Container fluid>
      <Switch>
        <Route path="/order" component={OrderComponent} />
        <Route path="/orders" component={OrdersComponent} />
        <Redirect to="/order" />
      </Switch>
    </Container >
  );
};

export default MainComponent;
