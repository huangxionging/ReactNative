import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { RkCard, RkStyleSheet, RkText, RkTheme } from 'react-native-ui-kitten';
import { Avatar } from './components';
import { data } from "./data";
let moment = require("moment")
export default class DiscoverScreen extends Component {
    static navigationOptions = {
        title: "Blogposts".toUpperCase()
    }
    constructor(props) {
        super(props)
        this.renderItem = this._renderItem.bind(this)
        this.state = {
            data: data.getArticles("post")
        }
        console.log(data.getArticles("post"))
    }
    _keyExtractor(post, index) {
        return post.id
    }
    _renderItem(info) {

        console.log(info.item)
        console.log(info.item.user)
        return (
            <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() => {
                    this.props.navigation.navigate("Article", { id: info.item.id })
                }}
            >
                <RkCard rkType="blog" style={styles.card} >
                    <Image rkCardImg source={info.item.photo} />
                    <View rkCardHeader style={styles.content} >
                        <RkText style={styles.section} rkType="header4" >
                            {info.item.title}
                        </RkText>
                    </View>
                    <View rkCardContent>
                        <View>
                            <RkText rkType="primary3 mediumLine" numberOfLines={2}>
                                {info.item.text}
                            </RkText>
                        </View>
                    </View>
                    <View rkCardFooter>
                        <View style={styles.userInfo} >
                            <Avatar
                                style={styles.avatar}
                                rkType="circle small"
                                img={info.item.user.photo}
                            />
                            <RkText rkType="header6" >{`${info.item.user.firstName}${info.item.user.lastName}`}</RkText>
                        </View>
                        <RkText rkType="secondary2 hintColor">
                            {moment()
                                .add(info.item.time, "seconds")
                                .fromNow()}
                        </RkText>
                    </View>


                </RkCard>
            </TouchableOpacity>
        )
    }
    render() {
        console.log(this.state.data)
        return (
            <FlatList data={this.state.data} renderItem={this.renderItem} keyExtractor={this._keyExtractor} style={styles.container} ></FlatList>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.screen.scroll,
        paddingVertical: 8,
        paddingHorizontal: 14
    },
    card: {
        marginVertical: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 17,
    }
}))
