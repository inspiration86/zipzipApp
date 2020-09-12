import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    ImageBackground,
    StatusBar, Animated, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
import {faCashRegister, faHandHolding, faHands, faHSquare} from '@fortawesome/free-solid-svg-icons';
import {faFileExport} from '@fortawesome/free-solid-svg-icons/faFileExport';

class NotificationLocal extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
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
                        <Text style={styles.textSafe}>SAFE TECHNOLOGY</Text>
                    </View>
                    <View style={styles.linhorz}>
                        <Text style={styles.textLocal}>LOCAL PROCESS</Text>
                        <Text style={styles.text}>
                            All<Text style={{
                            fontFamily: 'Frutiger LT 95 Ultra Black',
                            fontSize: 20,
                        }}> ZIPZIP</Text> compression
                            algorithms have been performed
                            on this mobile phone during the
                            internal process, and no information
                            will be transferred during
                            the action.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={styles.button}>
                            <Text style={{color: '#fff', fontSize: 25, fontFamily: 'futura-pt-medium-589e45b956de4'}}>GOT
                                it</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom: 25, justifyContent: 'center',alignItems: 'center', flex: 2}}>
                    <Text style={{color: '#b3b3b3', fontSize: 18, fontFamily: 'futura-pt-medium-589e45b956de4'}}>Designed
                        and Executed by <Text style={styles.company}>ARKA Invent co.</Text></Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    company: {
        marginTop: 5,
        fontSize: 18,
        color: '#b4b4b4',
        fontFamily: 'FuturaStd-Bold',
    },
    box:{
        flex: 50,
        marginVertical: 150,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 25,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#000',
        margin: 20,
    },
    line:{
        marginHorizontal: 180,
        marginTop: -5,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderLeftColor: '#000',
    },
    boxSafe:{

        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#000',
        marginHorizontal: 30,
        backgroundColor: '#000',
    },
    textSafe:{
        alignSelf: 'center',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
        padding: 5,
        fontSize: 18,
        color: '#fff',
    },
    linhorz:{
        borderTopWidth: 3,
        borderTopColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    textLocal:{
        alignSelf: 'center',
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
        padding: 5,
        fontSize: 16,
        borderBottomWidth: 3,
        borderBottomColor: '#000',

      //  textDecoration: "underline"
    },
    text:{
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 18,
        textAlign:"center",
        fontFamily: 'futura-pt-bold-589e44b6aacd3',
        paddingHorizontal: 10,
    },
    button: {
        width: 330,
        height: 45,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 15,
        // shadowColor: '#474747',
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        // elevation: 12,
    },
});

export default NotificationLocal;
