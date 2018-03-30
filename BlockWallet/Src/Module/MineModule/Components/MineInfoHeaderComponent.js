import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


export  class MineInfoHeaderComponent extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        avatarUrl: "",
        nickName: ""
    }

    static propTypes = {
        avatarUrl: PropTypes.string,
        nickName: PropTypes.string,
        bindTap: PropTypes.func
    }
    render() {
        let {avatarUrl, nickName, bindTap} = this.props
        return (
            <TouchableOpacity onPress={bindTap} >
                <View style={styles.container} >
                    <Image
                        style={styles.avatar}
                        source={{uri: avatarUrl}}
                    />
                    <View style={styles.nickName} >
                        <Text>{nickName}</Text>
                        <Text>账号: 1234567</Text>
                    </View>
                    <Image source={require("../../../../images/right_arrow.png")} />
                </View>
            </TouchableOpacity>

        )
    }
}

let styles = StyleSheet.create({
    container: {
        // backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
    },
    avatar: {
        marginLeft: 20,
        width: 88,
        height: 88,
        borderRadius: 10,
    },
    nickName: {
        marginLeft: 20,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    arrow: {

    }
})
