import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { RkTextInput, RkModalImg, RkButton, RkAvoidKeyboard } from 'react-native-ui-kitten';
import { NavigationActions } from 'react-navigation';
/**
 * 另外一种引入方式 {} 为非默认组件, 不带 {}的是默认组件, 需要带 export default 关键字
 */
import * as Utility from '../../../Utility';
import { LoginManager } from '../Managers/LoginManager';



export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.onChangeText = this._onChangeText.bind(this)
        this.onChangeVerifyCodeText = this._onChangeVerifyCodeText.bind(this)
        this.getVerifyCode.bind(this)
        this.state = {
            // 电话
            telephone: "",
            // 验证码
            verifyCode: "",
            getVerifyCodeButtonDisable: false
        }
    }

    closeKeyboard() {
        Keyboard.dismiss()
    }

    getVerifyCode(res) {
        // Utility.print(res)
        // let getVerifyCodeButtonDisable = true
        // this.setState({ getVerifyCodeButtonDisable })
        LoginManager.getVerifyCode({
            telephone: this.state.telephone
        }, (res) => {

        })
    }

    loginClick(res) {
        LoginManager.login({
            telephone: this.state.telephone,
            validcode: this.state.verifyCode
        }, (res) => {
            Utility.print(res)
            let memberId = res.memberId, accessToken = res.accessToken
            Utility.CacheStorage.setStorageSync("isLogin", {
                memberId, accessToken
            }, (res) => {
                var action =  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({
                        routeName: "mainTabNavigation"
                    })]
                })
                this.props.navigation.dispatch(action)
            })

        })
    }

    _onChangeText(telephone) {
        Utility.print(telephone)
        this.setState({ telephone })
    }

    _onChangeVerifyCodeText(verifyCode) {
        Utility.print(verifyCode)
        this.setState({ verifyCode })
    }

    render() {
        let { width, height } = Dimensions.get("window")
        return (
            <RkAvoidKeyboard>
                // 
                <TouchableOpacity onPress={this.closeKeyboard} activeOpacity={1} >
                    <View style={[styles.container, { width }, { height }]} >
                        <View style={[styles.topBackground, { width }]} >
                            <Image style={styles.image} source={require("../../../../images/doctor_logo.png")} />
                        </View>
                        <View style={{ width }}>
                            <View style={styles.telphpne}>
                                <RkTextInput
                                    placeholder='输入手机号'
                                    rkType="login telphone"
                                    onChangeText={this.onChangeText}
                                    label={"手机号"}
                                    keyboardType={"numeric"}
                                    maxLength={11}
                                />
                                <RkButton
                                    rkType="login"
                                    onPress={(res) => { this.getVerifyCode(res) }}
                                    disabled={this.state.getVerifyCodeButtonDisable}
                                >
                                    获取验证码
                                </RkButton>
                            </View>
                            <RkTextInput
                                label={"验证码"}
                                rkType="login"
                                placeholder={"输入验证码"}
                                keyboardType={"numeric"}
                                onChangeText={this.onChangeVerifyCodeText}
                            />
                        </View>
                        <RkButton 
                            rkType="circle" 
                            style={styles.loginButton} 
                            onPress={(res) => { this.loginClick(res) }}
                        >
                            登陆
                        </RkButton>
                    </View>
                </TouchableOpacity>
            </RkAvoidKeyboard>

        )
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: 'center',
    },
    topBackground: {
        backgroundColor: "#00a0e9",
        height: 259
    },
    image: {
        alignSelf: 'center',
        width: 117,
        height: 131,
        marginTop: 64,
    },
    telphpne: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        marginTop: 60,
    }
})