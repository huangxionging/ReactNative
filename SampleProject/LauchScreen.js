import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { KittenTheme } from './theme';
import { RkText, RkTheme } from 'react-native-ui-kitten';
import { scale, scaleVertical, scaleModerate } from './scale';
import { ProgressBar } from './ProgressBar';
import { NavigationActions } from 'react-navigation';

export default class LauchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0
        }
    };

    componentDidMount() {
        StatusBar.setHidden(true, "none")
        RkTheme.setTheme(KittenTheme)
        this.timer = setInterval(() => {
            if (this.state.progress == 1) {
                clearInterval(this.timer);
                setTimeout(() => {
                    StatusBar.setHidden(false, "slide")
                    let home = NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({
                            routeName: "mainTab"
                        })]
                    })
                    this.props.navigation.dispatch(home)
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
                    <Image style={[styles.image, { width }]} source={require("./images/splashBack.png")} />
                    <View style={styles.text} >
                        <RkText rkType="light" style={styles.hero} >
                            React Native
                        </RkText>
                        <RkText rkType="logo" style={styles.appName} >
                            UI Kitten
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