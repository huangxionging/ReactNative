import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { print } from '../../../Utility';


export default class WealthTotalHeaderComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {totalMoney, latestIncome} = this.props
        print(this.props)
        return (
            <View style={styles.container} >
                <View>
                    <Text>总资产</Text>
                    <Text>{totalMoney}</Text>
                </View>
                <View>
                    <Text>昨日收入</Text>
                    <Text>{latestIncome}</Text>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b81d3",
        height: 100,
    }
})