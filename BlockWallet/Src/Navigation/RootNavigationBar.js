import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MainTabNavigation } from './MainTabNavigation';
import LoginScreen from '../Module/LoginModule/Screens/LoginScreen';
import LaunchScreen from '../Module/LaunchModule/Screens/LaunchScreen';

const RootNavigationBar = StackNavigator({
    // 启动页
    launchScreen: {
        screen: LaunchScreen
    },
    mainTabNavigation: {
        screen: MainTabNavigation
    },
    loginScreen: {
        screen: LoginScreen
    }
}, {
    navigationOptions: {
        header: null,
        headerStyle: {
        },
        headerTintColor: "#333",
        gesturesEnabled: true
    },
    mode: "card",
});

export default RootNavigationBar