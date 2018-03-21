import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import MainTab from "./MainTabNavigation";
import ProductScreen from "../screens/main/ProductScreen";
import SplashScreen from "../screens/main/splash";
import * as LoginSign from "../screens/login";

const RootNavigator = StackNavigator(
  {
    Splash: { screen: SplashScreen },
    MainTab: { screen: MainTab },
    // Product: { screen: ProductScreen },
    // SignUp: {screen: LoginSign.SignUp},
    // Login1: {screen: LoginSign.LoginV1}
  },
  {
    navigationOptions: {
      header: null,
      // headerTitle: "护牙者钱包",
      headrMode: "none",
      headerTintColor: "#333333",
      showIcon: true,
      swipeEnabled: false,
      animationEnabled: false
    },
    mode: "card"
  }
);
export default RootNavigator;
