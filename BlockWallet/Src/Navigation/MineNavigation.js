import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MineScreen from '../Module/MineModule/Screens/MineScreen';
import MinePesonalScreen from '../Module/MineModule/Screens/MinePesonalScreen';
import MineSettingScreen from '../Module/MineModule/Screens/MineSettingScreen';
export const MineNavigation =  StackNavigator({
     // 启动页
     mineScreen: {
        screen: MineScreen
    },
    minePersonal: {
        screen: MinePesonalScreen
    },
    mineSetting: {
        screen: MineSettingScreen
    }
},{
    navigationOptions: {
        headerStyle: {
            // backgroundColor: "#000000",
        },
        headerTintColor: "#333",
        gesturesEnabled: true
    },
    mode: "card"
})