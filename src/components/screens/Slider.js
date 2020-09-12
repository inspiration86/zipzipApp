import React from 'react';
import {StyleSheet, View, Text, Image, BackHandler, Animated} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import DashboardUser from '../layouts/DashboardUser';
//import Login from './Login'

const slides = [
    {
        key: 'one',
        title:' صفحه اصلي',
        text: 'با اپ چرتکه به راحتي هزينه هاي خود را مديريت کنيد',
        image: require('../../../assets/images/slide1.gif'),
        bg: "#fff"
    },
    {
        key: 'two',
        title:'صفحه گزارشگيري',
        text: 'مي توانيد به روش هاي مختلف گزارشگيري کنيد',
        image: require('../../../assets/images/slide2.gif'),
        bg: "#fff"
    },
    {
        key: 'three',
        title:' داشبرد اپ چرتکه',
        text: "در اين بخش امکانات مختلفي در اختيار شماس",
        image: require('../../../assets/images/slide3.gif'),
        bg: "#fff"
    },
];

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        showRealApp: false,

    }
    splash() {
        setTimeout(() => {
            // AsyncStorage.getItem(this.state.user_id,(err,result)=>{
            // if (result===null)
            this.props.navigation.navigate('LogoMotion');
            // else
            //     this.props.navigation.navigate('DashboardUser');
            //         });
        }, 40000);
    }
    componentDidMount() {
        this.splash();
        BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    }
    backPressed = () => {
        let { routeName } = this.props.navigation.state;
        console.log("route is :  " + routeName);

        if (this.props.navigation.isFocused()) {
            console.log("ROUTE :  " + routeName);
            BackHandler.exitApp()
            return true;
        } else {
            return false;
        }
    };
    _renderItem = ({ item }) => {
        return (
            <View
                style={[
                    styles.slide,
                    {
                        backgroundColor: item.bg,
                    },
                ]}>

                <Image source={item.image} style={styles.image} />
                {/*<Text style={styles.title}>{item.title}</Text>*/}
                {/*<View style={{}}>*/}
                {/*    <Text style={styles.text}>{item.text}</Text>*/}
                {/*</View>*/}

            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    _keyExtractor = (item) => item.title;
    _renderDoneButton = () => {
        return (
            <Animated.View >
            <View style={styles.button}>
                <Text style={{color:"#fff",fontSize:30,fontFamily:"HelveticaNeueLTStd-Md"}}>start</Text>
            </View>
            </Animated.View>
        );
    };

    render() {
        if (this.state.showRealApp) {
            return <Login />;
        } else {
            return <AppIntroSlider
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onDone={this._onDone}
                    showPrevButton
                    showSkipButton
                    nextLabel="next"
                    prevLabel='back'
                    skipLabel="back"
                    doneLabel='next'
                    nextStyle={{backgroundColor:'red'}}
                    nextStyle
                    showDoneButton= {true}
                    renderDoneButton={this._renderDoneButton}
                    showNextButton= {false}
                    showPrevButton= {false}
                    showSkipButton= {false}
                    activeDotStyle= {{backgroundColor:'#777',marginTop:30}}
                    dotStyle={{backgroundColor:'#000',fontSize:40,marginTop:30}}
                    data={slides}
                />
        }
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor:"#fff",
    },
    image: {
        width: '100%',
        height:'100%',
        borderRadius:20,
        alignSelf:'center',

    },
    text: {
        color: '#555',
        textAlign: 'center',
        fontSize: 20,

    },
    title: {
        fontSize: 22,
        color: '#555',
        textAlign: 'center',
    },
    button: {
        width: 350,
        height:60,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-60,
        marginLeft:40,
        marginHorizontal:10
    },
});
