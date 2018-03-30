import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../Module/HomeModule/Screens/HomeScreen';
import { MineNavigation } from './MineNavigation';
import TabBarItem from '../Component/TabBarItem';
import { HomeNavigation } from './HomeNavigation';

/**
 * Tab 导航
 */
export const MainTabNavigation = TabNavigator({
    home: {
        screen: HomeNavigation,
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
        screen: MineNavigation,
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
        tabBarPosition: 'bottom',
        swipeEnabled:false,
        animationEnabled:false, 
        // tabBarOptions: { 
        //     style: { height:49 },
        //     activeBackgroundColor:'white', 
        //     activeTintColor:'#4ECBFC', 
        //     inactiveBackgroundColor:'white', 
        //     inactiveTintColor:'#aaa', 
        //     showLabel:false
        // }
        backBehavior: ""

    })