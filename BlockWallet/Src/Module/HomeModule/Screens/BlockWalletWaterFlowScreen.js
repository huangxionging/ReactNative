import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RootNavigationBar from '../../../Navigation/RootNavigationBar';
import { print } from '../../../Utility';




export default class BlockWalletWaterFlowScree extends Component {
    static navigationOptions = {
        title: "流水",
        tabBarVisible: false // tabBar 隐藏
    }

    constructor(props) {
        super(props)
    }
    relogin() {
       this.props.navigation.dispatch(NavigationActions.reset({
           index: 0,
           actions: [NavigationActions.navigate({
               routeName: "loginScreen"
           })],
           key: null
       }))
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>dddsds</Text>
                <Button onPress={() => this.relogin()} title="重新登录" />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        marginTop: 100,
    }
})