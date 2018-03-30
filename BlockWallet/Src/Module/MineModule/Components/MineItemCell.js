import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { print } from '../../../Utility';
import { icons } from '../../../Style/Booststrap';

export class MineItemCell extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        item: "",
        icon: "",
    }

    static propTypes = {
        item: PropTypes.string,
        icon: PropTypes.string,
        bindTap: PropTypes.func
    }

    render() {
        let {item, icon, bindTap} = this.props
        // print(icon)
        let iconItem = icons[icon]
        return (
            <TouchableOpacity onPress={() => bindTap(this.props)} >
                <View style={styles.container} >
                    <Image style={styles.icon} source={iconItem} />
                    <Text style={styles.item} >{item}</Text>
                    <Image source={require("../../../../images/right_arrow.png")} />
                </View>
            </TouchableOpacity>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 44,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 28,
        height: 28,
        marginLeft: 20,
    },
    item: {
        marginLeft: 20,
        flex: 1
    },
    arrow: {

    }
})