import React, { Component } from "react";
import { bootstrap } from "./config/bootstrap";
import { data } from "./data";
import RootNavigator from "./navigation/RootNavigation";

bootstrap();
data.populateData();

export default class Route extends Component {
  render() {
    return <RootNavigator />;
  }
}
