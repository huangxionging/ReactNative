import React from 'react';
import { View, Text, ListView, FlatList,  StyleSheet, Dimensions, SectionList } from 'react-native';
import { print } from '../../../Utility';

import mineData from "../../../../jsons/Mine.json";
import { MineInfoHeaderComponent } from '../Components/MineInfoHeaderComponent';
import { MineItemCell  } from '../Components/MineItemCell';

export default class MineScreen extends React.Component {
    static navigationOptions = {
        title: "我的"
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
        var navigate
        if (res.item.navigate != undefined) {
            navigate = res.item.navigate
        }
        return  <MineItemCell
                    item={res.item.item}
                    icon={res.item.icon}
                    bindTap={(res) => this.selectItem(res)}
                    navigate={navigate}
                />
    }

    _renderHeader(res) {
        print(res)
        return  <MineInfoHeaderComponent  
                    avatarUrl={"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLard73s4fMYN22P07rbGOPnVSNcywficjBSJUsLqxLffMwEKlkjdKq3fqic2Fm3WgonKabMRRJiccrg/0"}
                    nickName={"huangxiong"}
                    bindTap={(res) => this.headerTapClick(res)}
                />
    }

    headerTapClick(res) {
        print(["自己", this])
        this.props.navigation.navigate("minePersonal")
    }

    selectItem(res) {
        print(res)
        if (res.navigate != undefined) {
            this.props.navigation.navigate(res.navigate)
        }
    }

    getItem(data, index) {
        print(["itemdddd", data, index])
    }

    getItemCount(data) {
        print(["datadata", data])
        return 100
    }

    render() {
        let {width, height} = Dimensions.get("window")
        var sections = this.state.data
        return (
            <View style={[styles.container, {width}]} >
                <SectionList
                    ListHeaderComponent={(res) => {return this.renderHeader(res)}}
                    renderItem={(res) => (this._renderItemConfig(res))}
                    sections={
                        sections
                    }
                    ItemSeparatorComponent={
                        // 分割线
                        () => (<View style={{height: 1}} ></View>)
                    }
                    SectionSeparatorComponent = {
                        () => (<View style={{height: 10}} ></View>)
                    }
                    getItem={(data, index) => this.getItem(data, index)}
                    getItemCount={(data) => this.getItemCount(data)}
                    getItemLayout={(data, index) => ({
                        length: 45,
                        offset: 45 * index,
                        index: index 
                    })}
                />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        // backgroundColor: "#f0eff6",
        flex: 1
    }
})