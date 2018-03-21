/**
 * Created by PC on 2017/7/18.
 */
import React, { Component } from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

export default class TabBarItem extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    tintColor: "#ffffff",
    focused: false,
    normalImage: NaN,
    selectedImage: NaN
  };

  static propTypes = {
    tintColor: PropTypes.string,
    focused: PropTypes.bool,
    normalImage: PropTypes.number,
    selectedImage: PropTypes.number
  };

  render() {
    // console.debug("-----------------------------------------------");
    // console.debug(this.props);
    // console.debug("===============================================");
    return (
      <Image
        source={
          this.props.focused ? this.props.selectedImage : this.props.normalImage
        }
        style={{ tintColor: this.props.tintColor, width: 23, height: 23 }}
      />
    );
  }
}
