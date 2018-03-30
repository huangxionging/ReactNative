import { RkTheme } from 'react-native-ui-kitten';

export let booststrap = () => {
    RkTheme.setType("RkTextInput", "login", {
        container: {
            paddingLeft: 10,
            height: 40,
        },
        labelColor: "#333",
        placeholderTextColor: "#999",
    })

    RkTheme.setType("RkTextInput", "telphone", {
        container: {
            marginRight: 20,
            flex: 1,
        }
    })

    RkTheme.setType("RkButton", "login", {
        container: {
            width: 100,
            marginRight: 10,
            height: 30,
        },
        fontSize: 14,
    })
}

export const icons = {
    myService: require("../../images/my_service.png"),
    myToothbrushTail: require("../../images/my_toothbrush_tail.png"),
    myWholesaleMall: require("../../images/my_wholesale_mall.png"),
    myCheckOrder: require("../../images/my_check_order.png"),
    myShippingAddress: require("../../images/my_shipping_address.png"),
    mySetting: require("../../images/my_setting.png")
}