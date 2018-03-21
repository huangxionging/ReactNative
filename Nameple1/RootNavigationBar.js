import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import MainTab from './MainTab';
import SplashScreen from './SplashScreen';
import LauchScreen from './LauchScreen'
const RootNavigationBar = StackNavigator({
    lauchScreen: {screen: LauchScreen},
    mainTab: {screen: MainTab},
    // Product: {screen: ProductScreens}
}, {
   navigationOptions: {
       header: null,
       heaerMode: 'none',
       headerStyle: {
           backgroundColor: '#red'
       },
       headerTintColor: '#333333',
       showIcon: true,
       swipeEnabled: false,
       animationEnabled: false,
       gesturesEnabled: true
   },
   mode: 'card'
})

export default RootNavigationBar