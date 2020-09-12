import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//global screens
import Splash from './components/screens/Splash';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import  DashboardUser from './components/layouts/DashboardUser';
import RegisterMobile from './components/screens/RegisterMobile';
import Profile from "./components/screens/Profile";
import Slider from "./components/screens/Slider";
import LogoMotion from "./components/screens/LogoMotion";
import NotificationLocal from "./components/screens/NotificationLocal";
import SendSms from "./components/screens/SendSms";
import PicZip from "./components/screens/PicZip";
import MovZip from "./components/screens/MovZip";
import DocZip from "./components/screens/DocZip";
import SelectPic from "./components/screens/SelectPic";
import ZipSuccess from "./components/screens/ZipSuccess";
import BuyPicZip from "./components/screens/BuyPicZip";
import SelectPayWay from "./components/screens/SelectPayWay";
import Help from "./components/screens/Help";
import BuyPicZipClassicSuccess from "./components/screens/BuyPicZipClassicSuccess";
import BuyPicZipPremiumSuccess from "./components/screens/BuyPicZipPremiumSuccess";
import test from "./components/screens/test";

const RootStack = createStackNavigator({
        Splash: {screen: Splash,navigationOptions: ({navigation}) => ({
            headerShown: false
            })},
        BuyPicZipPremiumSuccess: {
            screen: BuyPicZipPremiumSuccess,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        BuyPicZipClassicSuccess: {
            screen: BuyPicZipClassicSuccess,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },   Slider: {
            screen: Slider,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        SendSms: {
            screen: SendSms,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        LogoMotion: {
            screen: LogoMotion,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        RegisterMobile: {
            screen: RegisterMobile,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        DashboardUser: {
            screen: DashboardUser,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        SelectPayWay: {
            screen: SelectPayWay,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        PicZip: {
            screen: PicZip,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        BuyPicZip: {
            screen: BuyPicZip,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        SelectPic: {
            screen: SelectPic,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        MovZip: {
            screen: MovZip,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        DocZip: {
            screen: DocZip,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        ZipSuccess: {
            screen: ZipSuccess,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Help: {
            screen: Help,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        NotificationLocal: {
            screen: NotificationLocal,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        test: {
            screen: test,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        },
    {
       initialRouteName: 'DashboardUser',
    },
    {
        defaultNavigationOptions: {headerShown: false}
    }
);
export default createAppContainer(RootStack);
