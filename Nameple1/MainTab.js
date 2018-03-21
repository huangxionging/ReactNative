import React, { Component } from 'react';
import {TabBarBottom, TabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import MineScreen from './MineScreen';
import DiscoverScreen from './DiscoverScreen';
import TabBarItem from './TabBarItem';


const MainTab = TabNavigator({
    home: {
        screen: HomeScreen,
        // navigationOptions: {
            
        // }
    },
    nearBy: {
        screen: DiscoverScreen
    },
    mine: {
        screen: MineScreen
    }
}, {
    initialRouteName: "home"
}
)

export default MainTab;