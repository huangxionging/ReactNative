import { Dimensions } from 'react-native';

export const SystemInfo = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    scale: Dimensions.get("window").scale,
    fontScale: Dimensions.get("window").fontScale
}

