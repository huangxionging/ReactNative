/**
 * 第一个 App
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload, \n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload, \n' +
        'shake or press menu button for dev menu'
})

export default class HelloWorldAPP extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welconme}>
                    HelloWorldAPP
                </Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    welconme: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
})