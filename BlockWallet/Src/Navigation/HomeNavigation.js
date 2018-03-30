import { StackNavigator } from 'react-navigation';
import MineScreen from '../Module/MineModule/Screens/MineScreen';
import BlockWalletWaterFlowScreen from '../Module/HomeModule/Screens/BlockWalletWaterFlowScreen';
import HomeScreen from '../Module/HomeModule/Screens/HomeScreen';

export const HomeNavigation =  StackNavigator({
     // 启动页
     homeScreen: {
        screen: HomeScreen
    },
    walletWaterFlowScreen: {
        screen: BlockWalletWaterFlowScreen
    }
},{
    navigationOptions: {
        headerStyle: {
            // backgroundColor: "#000000",
        },
        headerTintColor: "#333",
        gesturesEnabled: true
    },
    mode: "card"
})
