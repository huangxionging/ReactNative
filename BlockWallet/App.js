/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
/**
 * 引入路由
 */
import Route from './Src/Route';
/**
 * App 入口类
 * 
 * @export 
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  render() {
    return (
      // 路由类
      <Route/>
    )
  }
}

