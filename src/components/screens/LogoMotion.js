import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
//import Video from 'react-native-video';
export  default class Splash extends Component {
    constructor(props) {
        super(props);
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.state = {
            // logourl: require('../../../assets/images/LogoMotionBlack.gif'),
        backgroundurl: require('../../../assets/images/LogoMotionWhite.gif')
           //   backgroundurl: require('../../../assets/images/LogoMotionWhite.gif')

        };
    }
    componentDidMount() {
        this.animate();
        this.splash();
    }
    splash() {
        setTimeout(() => {
            this.props.navigation.navigate('NotificationLocal')
        }, 5000)
    }
    animate() {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay
            });
        };
        Animated.sequence([
            createAnimation(this.animatedValue1, 600, Easing.ease),
            createAnimation(this.animatedValue2, 800, Easing.ease),
        ]).start();
    }
    render() {
        const opacity = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        const introtext = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [-800, 50]
        });
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}  barStyle="light-content"/>
                <Animated.View style={{opacity}}>
                    <ImageBackground source={this.state.backgroundurl}
                                     style={{width: '100%', height: '100%'}}>
                        <View style={styles.textContainer}>
                            <Animated.View style={{bottom: introtext, position: 'absolute'}}>
                                <Text style={{color:'#777'}}>Designed and Executed by <Text style={styles.text}>ARKA Invent co.</Text></Text>
                            </Animated.View>
                        </View>
                    </ImageBackground>
                </Animated.View>

                {/*<Video source={{uri: "background"}}   // Can be a URL or a local file.*/}
                {/*       ref={(ref) => {*/}
                {/*           this.player = ref*/}
                {/*       }}                                      // Store reference*/}
                {/*       onBuffer={this.onBuffer}                // Callback when remote video is buffering*/}
                {/*       // onError={this.videoError}               // Callback when video cannot be loaded*/}
                {/*       // style={styles.backgroundVideo}*/}
                {/* />*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        marginTop: 450,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'black',
        // opacity:0.5,
    },
    text: {
        marginTop:5,
        fontSize: 20,
        color: '#777',
        // fontFamily: 'GreatVibes-Regular',
    },
});
