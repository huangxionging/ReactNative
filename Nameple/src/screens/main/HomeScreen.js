/**
 * Created by PC on 2017/7/18.
 */
import React, { Component } from "react";
import { Text, View } from "react-native";
import { RkButton, RkText } from 'react-native-ui-kitten'
export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#f2a0ff",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 50 }}>首页</Text>
        <RkButton rkType='clear' style={{ paddingTop: 20 }}>
          <RkText rkType='header6' onPress={() => this.props.navigation.navigate('SignUp')}> 注册账号 </RkText>
        </RkButton>
      </View>
    );
  }
}
