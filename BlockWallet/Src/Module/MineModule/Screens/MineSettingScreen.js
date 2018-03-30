import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, FlatList } from 'react-native';
import MineSetting from "../../../../jsons/MineSetting.json";
import { MineSettingItemCell } from '../Components/MineSettingItemCell';
import { CacheStorage, print } from '../../../Utility';
import { NavigationActions } from 'react-navigation';
import {  MineNavigation} from '../../../Navigation/MineNavigation';

export default class MineSettingScreen extends Component {
    static navigationOptions = {
        title: "设置",
        tabBarVisible: false // tabBar 隐藏
    }
    
    constructor(props) {
        super(props)
        this.renderItem = this._renderItemConfig.bind(this)
    }

    _renderItemConfig(res) {
        return <MineSettingItemCell
            item={res.item.item}
            action={res.item.action}
            bindTap={(res) => this.selectItem(res)}
        />
    }

    selectItem(res) {
        if (res.action == "logout") {
            // 删除缓存信息
            CacheStorage.removeStorageSync("isLogin", (res) => {
                print(res)
                // 成功删除后, 退出到登陆界面
                if (res.success != null && res.fail == null) {
                    var action =  NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({
                            routeName: "loginScreen"
                        })],
                        // 重点来了, 这里写 null 就完全正常, 不写 null, 就报 bug 了
                        key: null
                    })
                    this.props.navigation.dispatch(action)
                }
            })
        }
    }

    render() {
        let sections = MineSetting.dataArray
        return (
            <View style={styles.container} >
                <SectionList
                    renderItem={this.renderItem}
                    sections={
                        sections
                    }
                    ItemSeparatorComponent={
                        // 分割线
                        () => (<View style={{ height: 1 }} ></View>)
                    }
                    SectionSeparatorComponent={
                        () => (<View style={{ height: 10 }} ></View>)
                    }
                />
            </View>
        )
    }

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})