import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, Dimensions, StatusBar} from 'react-native';
// 主题
import { KittenTheme } from '../../../Theme/Theme';
import { RkText, RkTheme } from 'react-native-ui-kitten';
// 裁剪
import { scale, scaleVertical, scaleModerate, print, CacheStorage, SystemInfo} from '../../../Utility';
import { ProgressBar } from '../Components/ProgressBar';
import { NavigationActions } from 'react-navigation';
import Storage from 'react-native-storage';

/**
 * 启动页
 * 
 * @export 
 * @class LauchScreen
 * @extends {Component}
 */
export default class LaunchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0
        }
    };

    componentDidMount() {
        StatusBar.setHidden(true, "none")
        // 设置主题
        RkTheme.setTheme(KittenTheme)
        this.timer = setInterval(() => {
            if (this.state.progress == 1) {
                clearInterval(this.timer);
                setTimeout(() => {
                    CacheStorage.getStorageSync("isLogin", (res) => {
                        let fail = res.fail, success = res.success
                        StatusBar.setHidden(false, "slide")
                        print([res, "get"])
                        // Action
                        var action =  NavigationActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({
                                routeName: "mainTabNavigation"
                            })]
                        })
                        // 如果失败
                        if (success == null) {
                            print("未登录")
                            action = NavigationActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({
                                    routeName: "loginScreen"
                                })]
                            })
                        }
                        this.props.navigation.dispatch(action)
                        
                    })
                }, 500);
            } else {
                let random = Math.random() * 0.5;
                let progress = this.state.progress + random
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({ progress })
                // this.setState({progress})
            }
        }, 500)
    }
    
    render() {
        // 获取屏幕宽度
        let width = Dimensions.get("window").width
        return (
            <View style={styles.container} >
                <View>
                    <Image style={[styles.image, { width }]} source={require("../../../../images/splashBack.png")} />
                    <View style={styles.text} >
                        <RkText rkType="light" style={styles.hero} >
                            32Teeth
                        </RkText>
                        <RkText rkType="logo" style={styles.appName} >
                            Block Wallet
                        </RkText>
                    </View>
                </View>
                <ProgressBar 
                    color={RkTheme.current.colors.accent}
                    style={styles.progress}
                    progress={this.state.progress}
                    width={scale(320)}
                />
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: KittenTheme.colors.screen.base,
        justifyContent: 'space-between',
        flex: 1,
    },
    image: {
        resizeMode: "cover",
        height: scale(430)
    },
    text: {
        alignItems: 'center',
    },
    hero: {
        fontSize: 37
    },
    appName: {
        fontSize: 67
    },
    progress: {
        alignSelf: 'center',
        marginBottom: 35,
        backgroundColor: "#e5e5e5"
    }
})