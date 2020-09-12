import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onPressCountdown = () => {
        Alert.alert("Countdown Component Press.");
    }
    onDoneCountdown = () => {
        this.setState({displayTextResendSMS:'flex'})
    }

    textResend(){
        setInterval(()=>{
            return ( <Text style={{
                marginTop: -5,
                marginBottom: 5,
                color: '#47b03e',
                fontFamily: 'IRANSansMobile(FaNum)',
                fontSize: 15,
                alignSelf: 'center'
            }} onPress={() => this.onSendSMS()}>ارسال مجدد کد</Text>)
        },50000)

    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <ScrollView>
                    <View style={styles.MainContainer}>
                        <CountDown
                            until={90}
                            onFinish={this.onDoneCountdown}
                            onPress={this.onPressCountdown}
                            size={40}
                            timeToShow={['M','S']}
                            digitTxtStyle={{color: '#fff'}}
                            digitStyle={{backgroundColor: '#000'}}
                            timeLabelStyle={{color:'#fff',marginTop:2}}
                            timeLabels={{m: 'min', s: 'sec'}}
                           />
                    </View>
                    <View style={{marginTop: 40,flex:15}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 16,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            marginBottom: 20,
                            textAlign:'center',
                            paddingHorizontal:5
                        }}>
                            One Message Contains A Code has been sent To You</Text>
                        <View style={{backgroundColor:'#fff',height:60,width:'90%',alignSelf:'center',marginTop:10,borderWidth:3,borderColor:"#000"}}>
                            <TextInput
                                style={{alignItems:'flex-start',justifyContent:'flex-end',fontFamily: 'FuturaStd-Bold'}}
                                placeholder="Please Enter Code Sent"
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                maxLength={5}
                            />
                        </View>
                            <View style={{}}>
                                <TouchableOpacity activeOpacity={0.80} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textButton}>
                                        Ok </Text>
                                </View>
                                </TouchableOpacity>
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textButton}>
                                        Send again </Text>
                                </View>
                            </View>

                    </View>
                    <View style={{flex:1,marginTop:180,  justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} style={{marginRight:15}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    MainContainer: {
        flex: 8,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        marginHorizontal:20,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
