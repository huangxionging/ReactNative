import React, { Component } from 'react';
import { View, Text, ListView, FlatList,  StyleSheet, Dimensions, SectionList } from 'react-native';
import { print } from '../../../Utility';

import mineData from "../../../../jsons/Mine.json";

export default class MineScreen extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            data: mineData.data
        }
       print(mineData)
    }
    render() {
        let width = Dimensions.get("window").width
        return (
            <View style={[styles.container, {width}]} >
                <SectionList
                    sections={
                        =
                    }
                />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // backgroundColor: "#f0eff6",
    }
})