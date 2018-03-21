import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Route from './Route';

export default class App extends React.Component {
  render() {
    return (
      <Route/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('SamplProject', () => App)