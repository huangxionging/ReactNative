import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RootNavigationBar from '../../../Navigation/RootNavigationBar';
import { print } from '../../../Utility';
import WealthTotalHeaderComponent from '../Components/WealthTotalHeaderComponent';



export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "财富"
    }

    constructor(props) {
        super(props)
    }
    relogin() {
       this.props.navigation.navigate("walletWaterFlowScreen")
    }
    render() {
        return (
            <View style={styles.container} >
                <WealthTotalHeaderComponent
                    latestIncome={"13re4re4"}
                    totalMoney={"sw3434443"}
                >{"hdshjhdj"}</WealthTotalHeaderComponent>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // marginTop: 100,
    }
})