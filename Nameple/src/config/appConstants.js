import { Platform } from "react-native";

export class UIConstants {
  static get AppbarHeight() {
    return Platform.OS === "ios" ? 44 : 56;
  }
  static get StatusbarHeight() {
    return Platform.OS === "ios" ? 20 : 0;
  }
  static get HeaderHeight() {
    return UIConstants.AppbarHeight + UIConstants.StatusbarHeight;
  }
}
