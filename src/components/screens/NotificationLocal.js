import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    ImageBackground,
    StatusBar, Animated, StyleSheet, Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
//import PhoneNumberPicker from 'react-native-country-code-telephone-input'
//import PhoneInput from 'react-native-phone-input'

class NotificationLocal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // render(){
    //     return(
    //         <PhoneInput ref='phone'/>
    //     )
    // }


    render() {
        return (
            <View style={{flex: 1,backgroundColor:"#fff"}}>
                <View style={styles.box}>
                    <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon
                            name='warning'
                            color='#000'
                            size={45}/>
                    </View>
                    <View style={styles.line}>
                        <Text></Text>
                    </View>
                    <View style={styles.boxSafe}>
                        <Text style={styles.textSafe}>SAFE  TECHNOLOGY</Text>
                    </View>
                    <View style={styles.linhorz}>
                        <Text style={styles.textLocal}>LOCAL PROCESS</Text>
                        <Text style={styles.text}>
                            All ZIPZIP compression
                            algorithms have been performed
                            on this mobile phone during the
                            internal process, and no information
                            will be transferred during
                            the action.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} activeOpacity={0.92}
                                      onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{
                            color: '#fff',
                            fontSize: width * 0.06,
                            fontFamily: 'futura-pt-medium-589e45b956de4',
                        }}>GOT it</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Text style={{
                        color: '#b4b4b4',
                        fontSize: width * 0.04,
                        fontFamily: 'futura-pt-medium-589e45b956de4',
                    }}>Designed
                        and Executed by <Text style={styles.company}>ARKA Invent co.</Text></Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        top: '90%',
        alignSelf: 'center',
    },
    company: {
        marginTop: 5,
        fontSize: width * 0.04,
        color: '#b4b4b4',
        fontFamily: 'FuturaStd-Bold',
    },
    box: {
        marginTop:70,
        height:height*0.6-10,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: '#000',
        marginHorizontal: 20,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,

    },
    line: {
        marginHorizontal: 180,
        marginTop: -5,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderLeftColor: '#000',
    },
    boxSafe: {
        borderRadius:4,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#000',
        marginHorizontal: 30,
        backgroundColor: '#000',
    },
    textSafe: {
        alignSelf: 'center',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
        padding: 5,
        fontSize: width * 0.04,
        color: '#fff',
    },
    linhorz: {
        borderTopWidth: 3,
        borderTopColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    textLocal: {
        alignSelf: 'center',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
        padding: 5,
        fontSize: width * 0.04,
        borderBottomWidth: 3,
        borderBottomColor: '#000',

        //  textDecoration: "underline"
    },
    text: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: width * 0.05,
        textAlign: 'center',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
        paddingHorizontal: 15,
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginHorizontal: 15,
        borderRadius:5,
    },
});
export default NotificationLocal;
