import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class MineSettingItemCell extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {item, bindTap} = this.props
        return (
            <TouchableOpacity onPress={() => bindTap(this.props)} >
                <View style={styles.container} >
                    <Text style={styles.item} >{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 44,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        marginLeft: 20,
    }
})

