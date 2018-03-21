import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { RkButton, RkText } from 'react-native-ui-kitten';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        console.log("sdsddsdsds")
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#f2a0ff",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{fontSize: 50}}>首页</Text>
                {/* <RkButton></RkButton> */}
            </View>
        )
    }
}