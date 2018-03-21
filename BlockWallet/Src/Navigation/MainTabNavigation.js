import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../Module/HomeModule/Screens/HomeScreen';
import MineScreen from '../Module/MineModule/Screens/MineScreen';

/**
 * Tab 导航
 */
export  const MainTabNavigation = TabNavigator({
    home: {
        screen: HomeScreen
    },
    mine: {
        screen: MineScreen
    }
}, {
    initialRouteName: "home"
})