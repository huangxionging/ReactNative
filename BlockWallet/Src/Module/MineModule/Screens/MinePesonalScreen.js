import React, { Component } from 'react';
import { View, Text, ListView, FlatList,  StyleSheet, Dimensions, SectionList } from 'react-native';
import { print } from '../../../Utility';

import mineData from "../../../../jsons/Mine.json";
import { MineInfoHeaderComponent } from '../Components/MineInfoHeaderComponent';
import { MineItemCell  } from '../Components/MineItemCell';

export default class MinePesonalScreen extends Component {
    static navigationOptions = {
        title: "个人信息",
        tabBarVisible: false // tabBar 隐藏
    }

    constructor(props) {
        super(props)
        this.renderHeader = this._renderHeader.bind(this)
        this.state = {
            data: mineData.dataArray
        }
       print(mineData)
    }

    _renderItemMineInfo() {
        
    }

    _renderItemConfig(res) {
        print(res)
        return <MineItemCell/>
    }

    _renderHeader(res) {
        print(res)
        return  <MineInfoHeaderComponent  
                    avatarUrl={"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLard73s4fMYN22P07rbGOPnVSNcywficjBSJUsLqxLffMwEKlkjdKq3fqic2Fm3WgonKabMRRJiccrg/0"}
                    nickName={"huangxiong"}
                />
    }
    render() {
        let width = Dimensions.get("window").width
        var sections = this.state.data
        return (
            <View style={[styles.container, {width}]} >
                <SectionList
                    ListHeaderComponent={(res) => {return this.renderHeader(res)}}
                    renderItem={(res) => (this._renderItemConfig(res))}
                    sections={
                        sections
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