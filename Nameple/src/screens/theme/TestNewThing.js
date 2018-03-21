/**
 * Created by PC on 2017/7/18.
 */
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { RkButton, RkText } from "react-native-ui-kitten";
import Markdown from "react-native-simple-markdown";
import HTMLView from "react-native-htmlview";

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: "purple"
  },
  link: {
    color: "pink"
  },
  mailTo: {
    color: "orange"
  },
  text: {
    color: "#555555"
  }
};

const copy = `
# h1 Heading 8-)

header 1 | header 2
---|---
**row 1 col 1** | **row 1 col 2**
**row 2 col 1** | **row 2 col 2** 

第一格表头 | 第二格表头
--------- | -------------
**内容单元格 第一列第一格** | 内容单元格第二列第一格
内容单元格 第一列第二格 多加文字 | 内容单元格第二列第二格

# Markdown in react-native is so cool! \n

You can **emphasize** what you want, or just _suggest it_ 😏…

You can even [**link your website**](https://twitter.com/Charles_Mangwa) or if you prefer: [email somebody](mailto:email@somebody.com)

\`\`\`
$$	x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
\`\`\`

Spice it up with some GIFs 💃:

![Some GIF](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif)

And even add a cool video 😎!

[![A cool video from YT](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
[![Another one from Vimeo](https://i.vimeocdn.com/video/399486266_640.jpg)](https://vimeo.com/57580368)
`;

const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

export default class TestNewThing extends Component {
  render() {
    return (
      <View style={rootv}>
        <ScrollView style={{ flex: 1 }}>
          <Markdown style={markdownStyles}>{copy}</Markdown>
        </ScrollView>

        <HTMLView value={htmlContent} stylesheet={styles} />

        <Text style={{ fontSize: 50 }}>首页</Text>
        <RkButton rkType="clear" style={{ paddingTop: 2 }}>
          <RkText
            rkType="header6"
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            {" "}
            注册账号{" "}
          </RkText>
        </RkButton>
      </View>
    );
  }
}

const rootv = {
  flex: 1,
  backgroundColor: "#f2a0ff",
  justifyContent: "center",
  alignItems: "center"
};
const styles = StyleSheet.create({
  a: {
    fontWeight: "300",
    color: "#FF3366" // make links coloured pink
  }
});
