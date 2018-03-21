import React, { Component } from "react";
import { TabBarBottom, TabNavigator } from "react-navigation";
import HomeScreen from "../screens/main/HomeScreen";
import MineScreen from "../screens/main/MineScreen";
import DiscoverScreen from "../screens/main/DiscoverScreen";
import TabBarItem from "../screens/main/TabBarItem";

const MainTab = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require("../img/tabbar/pfb_tabbar_homepage_2x.png")}
            selectedImage={require("../img/tabbar/pfb_tabbar_homepage_selected_2x.png")}
          />
        )
      }
    },
    NearBy: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: "发现",
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require("../img/tabbar/pfb_tabbar_merchant_2x.png")}
            selectedImage={require("../img/tabbar/pfb_tabbar_merchant_selected_2x.png")}
          />
        )
      }
    },

    Mine: {
      screen: MineScreen,
      navigationOptions: {
        tabBarLabel: "我",
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require("../img/tabbar/pfb_tabbar_mine_2x.png")}
            selectedImage={require("../img/tabbar/pfb_tabbar_mine_selected_2x.png")}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarComponent: TabBarBottom, // TabBarBottom
    tabBarPosition: "bottom", // 显示位置，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    animationEnabled: false, // 切换页面时是否有动画效果
    lazy: true, // 懒加载
    backBehavior: "nome", // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      activeTintColor: "#06C1AE", //  激活版块的颜色
      inactiveTintColor: "#979797", // 非激活版块的颜色
      style: { backgroundColor: "#ffffff" }, // 背景颜色
      labelStyle: { fontSize: 12 } // 文字大小
    }
  }
);

export default MainTab;
