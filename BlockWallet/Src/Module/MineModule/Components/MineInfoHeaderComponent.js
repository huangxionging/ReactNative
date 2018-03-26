import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MineInfoHeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar
        }

    }
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container} >
                    <Image
                        style={styles.avatar}
                        source={require(this)}
                    />
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginLeft: 20,
        width: 88,
        height: 88,
        borderRadius: 10,
    },
    nickName: {

    }
})