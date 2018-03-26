import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../Module/HomeModule/Screens/HomeScreen';
import MineScreen from '../Module/MineModule/Screens/MineScreen';
import TabBarItem from '../Component/TabBarItem';

/**
 * Tab 导航
 */
export const MainTabNavigation = TabNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require("../../images/pfb_tabbar_homepage_2x.png")}
                    selectedImage={require("../../images/pfb_tabbar_homepage_selected_2x.png")}
                />
            )
        }
    },
    mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require("../../images/pfb_tabbar_mine_2x.png")}
                  selectedImage={require("../../images/pfb_tabbar_mine_selected_2x.png")}
                />
            )
        }
    }
}, {
        initialRouteName: "home",
    })